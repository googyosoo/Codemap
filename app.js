/* ===== 상태 ===== */
const LS_KEY = "codemap_done_v1";
const LS_STAR = "codemap_star_v1";
const LS_REV = "codemap_review_v1";
const LS_WRONG = "codemap_wrong_v1";
const LS_PG = "codemap_pgsave_v1";
let done = new Set(JSON.parse(localStorage.getItem(LS_KEY) || "[]"));
let star = new Set(JSON.parse(localStorage.getItem(LS_STAR) || "[]"));
let reviews = JSON.parse(localStorage.getItem(LS_REV) || "{}");   // {id:{stage,due}}
let wrong = new Set(JSON.parse(localStorage.getItem(LS_WRONG) || "[]")); // 퀴즈 원본 인덱스
let pgSave = JSON.parse(localStorage.getItem(LS_PG) || "{}");     // {idx:code}
let filter = { cat: "all", level: "all", q: "", starOnly: false };
const catMap = Object.fromEntries(CATS.map(c => [c.id, c]));
const REV_DAYS = [1, 3, 7, 14, 30];
const DAY = 86400000;

function saveDone(){ localStorage.setItem(LS_KEY, JSON.stringify([...done])); }
function saveStar(){ localStorage.setItem(LS_STAR, JSON.stringify([...star])); }
function saveRev(){ localStorage.setItem(LS_REV, JSON.stringify(reviews)); }
function saveWrong(){ localStorage.setItem(LS_WRONG, JSON.stringify([...wrong])); }
function savePg(){ localStorage.setItem(LS_PG, JSON.stringify(pgSave)); }
const $ = s => document.querySelector(s);

/* ===== 카테고리 칩 ===== */
function renderCats(){
  const el = $("#cats");
  let html = `<span class="cat ${filter.cat==='all'?'on':''}" data-cat="all">전체 보기</span>`;
  for(const c of CATS){
    const n = CONCEPTS.filter(x=>x.cat===c.id).length;
    html += `<span class="cat ${filter.cat===c.id?'on':''}" data-cat="${c.id}">
      <span class="dot" style="background:${c.color}"></span>${c.icon} ${c.name} <span style="color:var(--mut)">${n}</span></span>`;
  }
  el.innerHTML = html;
  el.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{ filter.cat=b.dataset.cat; renderCats(); renderGrid(); });
}

/* ===== 필터링 ===== */
function filtered(){
  const q = filter.q.trim().toLowerCase();
  return CONCEPTS.filter(c=>{
    if(filter.starOnly && !star.has(c.id)) return false;
    if(filter.cat!=="all" && c.cat!==filter.cat) return false;
    if(filter.level!=="all" && c.level!==filter.level) return false;
    if(q){
      const hay = (c.title+" "+c.key+" "+c.summary+" "+c.points.join(" ")+" "+catMap[c.cat].name).toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });
}

/* ===== 카드 그리드 ===== */
function renderGrid(){
  const list = filtered();
  const grid = $("#grid"), empty = $("#empty");
  $("#cardCount").textContent = `${list.length}개 개념 · 완료 ${[...done].length}`;
  if(!list.length){ grid.innerHTML=""; empty.style.display="block"; return; }
  empty.style.display="none";
  grid.innerHTML = list.map(c=>{
    const cat = catMap[c.cat];
    return `<article class="ccard ${done.has(c.id)?'is-done':''}" data-id="${c.id}">
      <div class="thumb">
        <span class="lv" style="color:${cat.color}">${cat.icon} ${c.level}</span>
        <img loading="lazy" src="${IMG(c.images[0].src)}" alt="${c.title}"
             onerror="this.parentElement.style.background='linear-gradient(135deg,#232a47,#1c2138)';this.style.display='none'">
        <div class="star ${star.has(c.id)?'on':''}" data-star="${c.id}" title="북마크">★</div>
        <div class="done">✓</div>
      </div>
      <div class="body">
        <div class="ck" style="color:${cat.color}">${cat.name}</div>
        <h3>${c.title}</h3>
        <p>${c.summary}</p>
        <div class="tags"><span class="tag">${c.key}</span><span class="tag">그림 ${c.images.length}장</span></div>
      </div>
    </article>`;
  }).join("");
  grid.querySelectorAll(".ccard").forEach(card=>card.onclick=()=>openModal(card.dataset.id));
  grid.querySelectorAll(".star").forEach(s=>s.onclick=e=>{ e.stopPropagation(); toggleStar(s.dataset.star); });
  updateProgress();
}

/* ===== 북마크 ===== */
function toggleStar(id){
  if(star.has(id)){ star.delete(id); } else { star.add(id); toast("⭐ 북마크에 추가했어요"); }
  saveStar(); renderGrid();
  if(curId===id) openModal(id);
}

/* ===== 진도 ===== */
function updateProgress(){
  const pct = Math.round([...done].length / CONCEPTS.length * 100);
  $("#miniBar").style.width = pct+"%";
  $("#miniPct").textContent = pct+"%";
  if(document.getElementById("roadmapWrap")) renderRoadmap();
}

/* ===== 복습 센터 (간격 반복) ===== */
function fmtDue(due){
  const diff = due - Date.now();
  if(diff <= 0) return "지금";
  const d = Math.ceil(diff/DAY);
  return d>=1 ? d+"일 뒤" : "오늘";
}
function renderReview(){
  const wrap = $("#reviewWrap"); if(!wrap) return;
  const ids = Object.keys(reviews).filter(id=>done.has(id));
  const now = Date.now();
  const due = ids.filter(id=>reviews[id].due<=now).sort((a,b)=>reviews[a].due-reviews[b].due);
  const upcoming = ids.filter(id=>reviews[id].due>now).sort((a,b)=>reviews[a].due-reviews[b].due);
  $("#revCount").textContent = `오늘 복습 ${due.length} · 예정 ${upcoming.length}`;
  if(!ids.length){
    wrap.innerHTML = `<div class="revempty">아직 복습할 개념이 없어요. 개념을 ‘학습 완료’로 표시하면 1·3·7·14·30일 간격으로 복습 일정이 잡힙니다.</div>`;
    return;
  }
  const row = (id,isDue)=>{
    const c = CONCEPTS.find(x=>x.id===id); const cat = catMap[c.cat];
    const st = reviews[id].stage;
    return `<div class="revrow ${isDue?'due':''}">
      <div class="rinfo"><b>${c.title}</b>
        <div class="meta">${cat.icon} ${cat.name} · 복습 ${st+1}단계 · ${isDue?'복습할 때예요!':fmtDue(reviews[id].due)+' 예정'}</div></div>
      <div class="rbtns">
        <button class="rbtn" onclick="openModal('${id}')">다시 보기</button>
        ${isDue?`<button class="rbtn go" onclick="reviewDone('${id}')">복습 완료</button>`:''}
      </div></div>`;
  };
  let html = "";
  if(due.length) html += `<div class="revgroup"><h4>🔔 오늘 복습할 개념 (${due.length})</h4>${due.map(id=>row(id,true)).join("")}</div>`;
  else html += `<div class="revgroup"><div class="revempty">오늘 복습할 개념은 없어요. 예정된 복습을 미리 확인하세요 👇</div></div>`;
  if(upcoming.length) html += `<div class="revgroup"><h4>📅 예정된 복습 (${upcoming.length})</h4>${upcoming.map(id=>row(id,false)).join("")}</div>`;
  wrap.innerHTML = html;
}
function reviewDone(id){
  const r = reviews[id]; if(!r) return;
  r.stage = Math.min(r.stage+1, REV_DAYS.length-1);
  r.due = Date.now() + REV_DAYS[r.stage]*DAY;
  saveRev(); renderReview();
  toast("복습 완료! 다음 복습은 "+REV_DAYS[r.stage]+"일 뒤예요 ✅");
}

/* ===== 지식 그래프 (선행·후속 연결) ===== */
function getPrereqs(id){ return (PREREQ[id]||[]).filter(p=>CONCEPTS.some(c=>c.id===p)); }
function getNexts(id){ return CONCEPTS.filter(c=>(PREREQ[c.id]||[]).includes(id)).map(c=>c.id); }
let graphId = "lang";
function gnode(id, x, y, w, center){
  const c = CONCEPTS.find(k=>k.id===id); if(!c) return "";
  const cat = catMap[c.cat]; const h=44;
  const label = c.title.length>11 ? c.title.slice(0,11)+"…" : c.title;
  const tick = done.has(id) ? "✓ " : "";
  if(center){
    return `<g class="gnode" onclick="graphCenter('${id}')">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="11" fill="${cat.color}"/>
      <text x="${x+14}" y="${y+27}" font-size="13.5" fill="#0b1020">${tick}${label}</text></g>`;
  }
  return `<g class="gnode" onclick="graphCenter('${id}')">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="11" style="fill:var(--card2)" stroke="${cat.color}" stroke-width="1.5"/>
    <text x="${x+14}" y="${y+27}" font-size="13" style="fill:var(--txt)">${tick}${label}</text></g>`;
}
function renderGraph(){
  const wrapEl = document.getElementById("graphSvg"); if(!wrapEl) return;
  const center = graphId;
  const pre = getPrereqs(center).slice(0,6);
  const nxt = getNexts(center).slice(0,8);
  const W=720, NW=180, cx=270, cw=180;
  const rows = Math.max(pre.length, nxt.length, 1);
  const H = Math.max(rows*58+24, 170);
  const cyc = (H-44)/2;
  const yat=(i,n)=>{ const tot=n*44+(n-1)*14; const start=(H-tot)/2; return start+i*58; };
  let lines="", nodes="";
  pre.forEach((id,i)=>{ const y=yat(i,pre.length);
    lines+=`<line x1="${20+NW}" y1="${y+22}" x2="${cx}" y2="${cyc+22}" stroke="#8a93ad" stroke-width="1.6" marker-end="url(#arr)"/>`;
    nodes+=gnode(id,20,y,NW,false); });
  nxt.forEach((id,i)=>{ const y=yat(i,nxt.length);
    lines+=`<line x1="${cx+cw}" y1="${cyc+22}" x2="${W-20-NW}" y2="${y+22}" stroke="#8a93ad" stroke-width="1.6" marker-end="url(#arr)"/>`;
    nodes+=gnode(id,W-20-NW,y,NW,false); });
  nodes+=gnode(center,cx,cyc,cw,true);
  const lbl=`<text class="gcap" x="20" y="14">⬅ 먼저 볼 개념</text>
    <text class="gcap" x="${W-20}" y="14" text-anchor="end">다음에 볼 개념 ➡</text>`;
  wrapEl.innerHTML=`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arr" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
      <path d="M0,0 L7,3 L0,6 Z" fill="#8a93ad"/></marker></defs>
    ${lbl}${lines}${nodes}</svg>`;
  const cobj=CONCEPTS.find(c=>c.id===center);
  $("#graphMeta").textContent=`${catMap[cobj.cat].icon} ${catMap[cobj.cat].name} · 선행 ${getPrereqs(center).length} · 후속 ${getNexts(center).length}`;
}
function graphCenter(id){ graphId=id; const sel=$("#graphSelect"); if(sel) sel.value=id; renderGraph(); }
function fillGraphSelect(){
  const sel=$("#graphSelect"); if(!sel) return;
  sel.innerHTML=CATS.map(cat=>`<optgroup label="${cat.icon} ${cat.name}">`+
    CONCEPTS.filter(c=>c.cat===cat.id).map(c=>`<option value="${c.id}">${c.title}</option>`).join("")+`</optgroup>`).join("");
  sel.value=graphId;
  sel.onchange=()=>{ graphId=sel.value; renderGraph(); };
}

/* ===== 로드맵 ===== */
function titleOf(id){ const c=CONCEPTS.find(x=>x.id===id); return c?c.title:id; }
function renderRoadmap(){
  const wrap = $("#roadmapWrap");
  $("#rmCount").textContent = `전체 ${CONCEPTS.length}개 · 완료 ${[...done].length}`;
  wrap.innerHTML = ROADMAP.map(stage=>{
    const ids = stage.steps.flatMap(s=>s.ids);
    const dc = ids.filter(id=>done.has(id)).length;
    const spct = Math.round(dc/ids.length*100);
    const steps = stage.steps.map((s,i)=>{
      const chips = s.ids.map(id=>`<span class="rmchip ${done.has(id)?'done':''}" data-id="${id}">
        ${done.has(id)?'✓':'<span class="c">▸</span>'} ${titleOf(id)}</span>`).join("");
      return `<div class="rmstep">
        <div class="num">${i+1}</div>
        <div class="rsbody">
          <h4>${s.title}</h4>
          <div class="rsdesc">${s.desc}</div>
          <div class="rmchips">${chips}</div>
        </div></div>`;
    }).join("");
    return `<div class="rmstage">
      <div class="rmhead">
        <div class="badge2" style="background:${stage.color}22;border:1px solid ${stage.color}55">${stage.icon}</div>
        <div><h3>${stage.name}</h3><div class="tag">${stage.tag} · ${stage.intro}</div></div>
        <div class="stageprog"><b style="color:${stage.color}">${spct}%</b><div class="sbar"><i style="width:${spct}%;background:${stage.color}"></i></div><div style="font-size:11px;color:var(--mut);margin-top:3px">${dc}/${ids.length}</div></div>
      </div>
      <div class="rmsteps">${steps}</div>
    </div>`;
  }).join("");
  wrap.querySelectorAll(".rmchip").forEach(ch=>ch.onclick=()=>openModal(ch.dataset.id));
}

/* ===== 코드 실습실 ===== */
let pgIdx = 0;
function renderSnips(){
  $("#pgSnips").innerHTML = SNIPPETS.map((s,i)=>
    `<span class="pgsnip ${i===pgIdx?'on':''}" data-i="${i}">${s.name}</span>`).join("");
  $("#pgSnips").querySelectorAll(".pgsnip").forEach(b=>b.onclick=()=>loadSnippet(parseInt(b.dataset.i)));
}
function loadSnippet(i){
  pgIdx = i;
  const s = SNIPPETS[i];
  const saved = pgSave[i];
  $("#pgCode").value = (saved!=null) ? saved : s.code;
  const rel = CONCEPTS.find(c=>c.id===s.concept);
  const savedTag = (saved!=null) ? ` &nbsp;·&nbsp; <span style="color:var(--ok)">💾 저장된 내 코드</span>` : "";
  $("#pgHint").innerHTML = `💡 ${s.hint}` + (rel?` &nbsp;·&nbsp; 관련 개념: <a style="color:var(--ok);cursor:pointer;text-decoration:underline" onclick="openModal('${rel.id}')">${rel.title}</a>`:"") + savedTag;
  if(s.challenge){
    $("#pgChallenge").style.display = "block";
    $("#pgChallenge").innerHTML = `<span class="ct">🎯 도전 과제</span>${s.challenge}
      <button class="solbtn" onclick="document.getElementById('pgSol').classList.toggle('show')">정답 보기</button>
      <div class="sol" id="pgSol">💡 ${s.solution||""}</div>`;
  } else { $("#pgChallenge").style.display = "none"; }
  renderSnips();
  runCode();
}
function resetSnippet(){ delete pgSave[pgIdx]; savePg(); loadSnippet(pgIdx); toast("예제 원본으로 되돌렸어요 ↺"); }
function runCode(){
  const code = $("#pgCode").value;
  $("#pgView").srcdoc = `<!DOCTYPE html><html><head><meta charset="utf-8">
    <style>body{font-family:system-ui,'Malgun Gothic',sans-serif;padding:16px;line-height:1.6;color:#1a1a1a}</style>
    </head><body>${code}</body></html>`;
}

/* ===== 상세 모달 ===== */
let curId = null;
function openModal(id){
  const c = CONCEPTS.find(x=>x.id===id); if(!c) return;
  curId = id;
  const cat = catMap[c.cat];
  const isDone = done.has(id);
  const related = CONCEPTS.filter(x=>x.cat===c.cat && x.id!==id).slice(0,3);
  const preL = getPrereqs(id), nxtL = getNexts(id);
  const lchip = i=>`<div class="linkchip ${done.has(i)?'done':''}" onclick="openModal('${i}')">${done.has(i)?'✓':'▸'} ${titleOf(i)}</div>`;
  const linksHtml = (preL.length||nxtL.length) ? `
      <h4 class="lbl">🔗 학습 연결</h4>
      <div class="linkcols">
        <div class="linkcol"><div class="lh">⬅ 먼저 볼 개념</div>${preL.length?`<div class="linkchips">${preL.map(lchip).join("")}</div>`:'<div class="linknone">없음 — 여기서 시작해도 좋아요</div>'}</div>
        <div class="linkcol"><div class="lh">다음에 볼 개념 ➡</div>${nxtL.length?`<div class="linkchips">${nxtL.map(lchip).join("")}</div>`:'<div class="linknone">없음</div>'}</div>
      </div>` : "";
  const imgs = c.images.map(im=>`
    <figure>
      <img src="${IMG(im.src)}" alt="${im.cap}" onclick="zoomImg('${IMG(im.src).replace(/'/g,"\\'")}')"
           onerror="this.closest('figure').style.display='none'">
      <figcaption>${im.cap}</figcaption>
    </figure>`).join("");
  $("#sheet").innerHTML = `
    <div class="top">
      <div>
        <div class="ck" style="color:${cat.color}">${cat.icon} ${cat.name} · ${c.level}</div>
        <h2>${c.title}</h2>
      </div>
      <div class="x" onclick="closeModal()">✕</div>
    </div>
    <div class="scroll">
      <div class="summary">${c.summary}</div>

      <h4 class="lbl">🎯 핵심 정리</h4>
      <ul class="points">${c.points.map(p=>`<li><span class="b">›</span><span>${p}</span></li>`).join("")}</ul>

      <h4 class="lbl">💡 쉽게 이해하기</h4>
      <div class="analogy"><b>비유 ›</b> ${c.analogy}</div>

      <h4 class="lbl">🚀 이렇게 적용하세요</h4>
      <div class="analogy" style="background:rgba(61,220,151,.1)"><b style="color:var(--ok)">적용 ›</b> ${c.apply}</div>

      ${linksHtml}

      <h4 class="lbl">🖼️ 개념 그림 (클릭하면 확대)</h4>
      <div class="imgs">${imgs}</div>

      <div class="donebar">
        <div style="display:flex;gap:10px;align-items:center">
          <button class="btn ${isDone?'ghost':'primary'}" id="doneBtn" onclick="toggleDone('${id}')">
            ${isDone? '✓ 학습 완료됨 (취소)' : '학습 완료로 표시'}</button>
          <div class="mstar ${star.has(id)?'on':''}" onclick="toggleStar('${id}')" title="북마크">★</div>
        </div>
        <div class="relnav">${related.map(r=>`<button class="btn ghost" style="font-size:13px;padding:9px 13px" onclick="openModal('${r.id}')">${r.title} ›</button>`).join("")}</div>
      </div>
    </div>`;
  $("#modal").classList.add("open");
  $("#sheet").scrollIntoView();
  document.body.style.overflow="hidden";
}
function closeModal(){ $("#modal").classList.remove("open"); document.body.style.overflow=""; }
function toggleDone(id){
  if(done.has(id)){
    done.delete(id); delete reviews[id];
  } else {
    done.add(id);
    reviews[id] = { stage:0, due: Date.now() + REV_DAYS[0]*DAY };
    toast("학습 완료! 복습 일정이 잡혔어요 🎉");
  }
  saveDone(); saveRev(); renderGrid(); renderReview();
  if(curId===id) openModal(id);
}

/* ===== 확대 ===== */
function zoomImg(src){ $("#zoomImg").src=src; $("#zoom").classList.add("open"); }
$("#zoom").onclick=()=>$("#zoom").classList.remove("open");

/* ===== 비교표 ===== */
function renderCompare(){
  const wrap = $("#compareWrap");
  wrap.innerHTML = COMPARES.map(cmp=>{
    let head, body;
    if(cmp.two){
      head = `<tr><th>${cmp.a}</th><th>${cmp.b}</th></tr>`;
      body = cmp.rows.map(r=>`<tr><td class="a">${r[0]}</td><td>${r[1]}</td></tr>`).join("");
    }else{
      head = `<tr><th>구분</th><th class="a">${cmp.a}</th><th class="b">${cmp.b}</th></tr>`;
      body = cmp.rows.map(r=>`<tr><td>${r[0]}</td><td class="a">${r[1]}</td><td class="b">${r[2]}</td></tr>`).join("");
    }
    return `<h4 class="lbl" style="margin-top:26px;font-size:15px;color:var(--txt)">⚖️ ${cmp.title}</h4>
      <div class="cmpwrap"><table class="cmp"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
  }).join("");
}

/* ===== 퀴즈 ===== */
let qi=0, qScore=0, qAnswered=false, qOrder=[], qWrongMode=false;
function startQuiz(subset){
  qi=0; qScore=0; qAnswered=false;
  qWrongMode = Array.isArray(subset);
  const base = qWrongMode ? subset.slice() : QUIZ.map((_,i)=>i);
  qOrder = base.sort(()=>Math.random()-0.5);
  renderQuestion();
}
let qOpt=[]; // 현재 문제의 섞인 보기 순서(원본 인덱스 배열)
function renderQuestion(){
  const box = $("#quizbox");
  if(qi>=qOrder.length){ return renderQuizResult(); }
  const item = QUIZ[qOrder[qi]];
  qAnswered=false;
  qOpt = item.opts.map((_,i)=>i).sort(()=>Math.random()-0.5);
  const pct = Math.round(qi/qOrder.length*100);
  box.innerHTML = `
    <div class="qprog">문제 ${qi+1} / ${qOrder.length} · 현재 점수 ${qScore}</div>
    <div class="qbar"><i style="width:${pct}%"></i></div>
    <div class="qq">${item.q}</div>
    <div class="qopts" id="qopts">
      ${qOpt.map((orig,pos)=>`<div class="qopt" data-orig="${orig}"><span class="k">${"ABCD"[pos]}</span>${item.opts[orig]}</div>`).join("")}
    </div>
    <div class="qexp" id="qexp"></div>
    <div class="qfoot">
      <span style="color:var(--mut);font-size:13px">정답을 고르면 해설이 나옵니다</span>
      <button class="btn primary" id="qnext" style="display:none" onclick="nextQuestion()">다음 문제 ›</button>
    </div>`;
  box.querySelectorAll(".qopt").forEach(opt=>opt.onclick=()=>answer(parseInt(opt.dataset.orig),opt));
}
function answer(orig, clicked){
  if(qAnswered) return; qAnswered=true;
  const item = QUIZ[qOrder[qi]];
  const opts = $("#qopts").children;
  // 정답 보기를 화면 위치 기준으로 찾아 강조
  const correctPos = qOpt.indexOf(item.a);
  opts[correctPos].classList.add("correct");
  const ok = (orig===item.a);
  const origIdx = qOrder[qi];
  if(!ok){ clicked.classList.add("wrong"); wrong.add(origIdx); }
  else { qScore++; wrong.delete(origIdx); }
  saveWrong(); renderWrong();
  const exp = $("#qexp");
  exp.innerHTML = (ok?"✅ 정답! ":"❌ 아쉬워요. ")+item.exp;
  exp.classList.add("show");
  $("#qnext").style.display="inline-flex";
  $("#qnext").textContent = (qi===qOrder.length-1)?"결과 보기 ›":"다음 문제 ›";
}
function nextQuestion(){ qi++; renderQuestion(); }
function renderQuizResult(){
  const pct = Math.round(qScore/qOrder.length*100);
  let msg = pct>=80?"훌륭해요! 핵심을 잘 잡았습니다 👏":pct>=50?"좋아요! 틀린 개념만 다시 보면 완벽해요 💪":"괜찮아요. 카드를 다시 보고 도전해요 🌱";
  const wrongBtn = wrong.size ? `<button class="btn ghost" onclick="retryWrong()">📕 오답만 다시 풀기 (${wrong.size})</button>` : "";
  $("#quizbox").innerHTML = `
    <div class="qresult">
      <div class="big">${qScore} / ${qOrder.length}</div>
      <div style="font-size:18px;font-weight:700;margin:8px 0 4px">${pct}점</div>
      <p style="color:var(--sub);margin-bottom:20px">${msg}</p>
      <button class="btn primary" onclick="startQuiz()">🔄 전체 다시 풀기</button>
      ${wrongBtn}
      <button class="btn ghost" onclick="document.getElementById('concepts').scrollIntoView()">📚 개념 다시 보기</button>
    </div>`;
  renderWrong();
}
function retryWrong(){
  if(!wrong.size) return;
  startQuiz([...wrong]);
  $("#quiz").scrollIntoView();
}

/* ===== 오답 노트 ===== */
function renderWrong(){
  const box = $("#wrongNote"); if(!box) return;
  if(!wrong.size){ box.innerHTML = ""; return; }
  const items = [...wrong].map(i=>{
    const it = QUIZ[i];
    return `<div class="witem">❓ ${it.q}<br><span style="color:var(--ok)">정답: ${it.opts[it.a]}</span> — ${it.exp}</div>`;
  }).join("");
  box.innerHTML = `<div class="wnote">
    <h4>📕 오답 노트 <span style="font-size:13px;color:var(--mut);font-weight:600">틀린 ${wrong.size}문제</span></h4>
    <p style="font-size:13.5px;color:var(--sub)">아래 개념을 다시 익히고, ‘오답만 다시 풀기’로 확인하세요. 맞히면 노트에서 사라집니다.</p>
    <div style="margin-top:12px"><button class="btn primary" style="font-size:14px;padding:10px 18px" onclick="retryWrong()">📕 오답만 다시 풀기 (${wrong.size})</button></div>
    <div class="wlist">${items}</div>
  </div>`;
}

/* ===== 토스트 ===== */
let toastT;
function toast(msg){
  const t=$("#toast"); t.textContent=msg; t.classList.add("show");
  clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("show"),2200);
}

/* ===== 이벤트 바인딩 ===== */
$("#search").oninput = e=>{ filter.q=e.target.value; renderGrid(); };
document.querySelectorAll(".lvl[data-lv]").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".lvl[data-lv]").forEach(x=>x.classList.remove("on"));
  b.classList.add("on"); filter.level=b.dataset.lv; renderGrid();
});
$("#modal").onclick = e=>{ if(e.target.id==="modal") closeModal(); };
document.addEventListener("keydown", e=>{
  if(e.key==="Escape"){ closeModal(); $("#zoom").classList.remove("open"); }
});
let pgT;
$("#pgCode").oninput = ()=>{
  clearTimeout(pgT);
  pgT = setTimeout(()=>{
    pgSave[pgIdx] = $("#pgCode").value; savePg(); runCode();
    const sv = $("#pgSaved"); if(sv){ sv.classList.add("show"); setTimeout(()=>sv.classList.remove("show"),1200); }
  }, 600);
};

/* 북마크 필터 토글 */
$("#starFilter").onclick = ()=>{
  filter.starOnly = !filter.starOnly;
  $("#starFilter").classList.toggle("on", filter.starOnly);
  renderGrid();
};

/* ===== 테마 (라이트/다크) ===== */
const LS_THEME = "codemap_theme_v1";
let theme = localStorage.getItem(LS_THEME) || "dark";
function applyTheme(t){
  document.body.classList.toggle("light", t==="light");
  const b=$("#themeBtn"); if(b) b.textContent = (t==="light") ? "☀️" : "🌙";
}
$("#themeBtn").onclick = ()=>{
  theme = (theme==="light") ? "dark" : "light";
  localStorage.setItem(LS_THEME, theme); applyTheme(theme);
};

/* ===== 학습 기록 내보내기 / 가져오기 / 초기화 ===== */
function exportProgress(){
  const data = { _app:"codemap", _ver:1, _date:new Date().toISOString(),
    done:[...done], star:[...star], reviews, wrong:[...wrong], pgSave, theme };
  const blob = new Blob([JSON.stringify(data,null,2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "codemap-학습기록-" + new Date().toISOString().slice(0,10) + ".json";
  a.click(); URL.revokeObjectURL(a.href);
  toast("학습 기록을 파일로 내보냈어요 ⬇️");
}
function refreshAll(){
  renderGrid(); renderRoadmap(); renderReview(); renderWrong();
  renderGraph(); loadSnippet(pgIdx);
}
function importProgress(file){
  const reader = new FileReader();
  reader.onload = e=>{
    try{
      const d = JSON.parse(e.target.result);
      if(d._app !== "codemap") throw 0;
      if(Array.isArray(d.done)){ done=new Set(d.done); saveDone(); }
      if(Array.isArray(d.star)){ star=new Set(d.star); saveStar(); }
      if(d.reviews && typeof d.reviews==="object"){ reviews=d.reviews; saveRev(); }
      if(Array.isArray(d.wrong)){ wrong=new Set(d.wrong); saveWrong(); }
      if(d.pgSave && typeof d.pgSave==="object"){ pgSave=d.pgSave; savePg(); }
      if(d.theme){ theme=d.theme; localStorage.setItem(LS_THEME,theme); applyTheme(theme); }
      refreshAll();
      toast("학습 기록을 불러왔어요 ⬆️");
    }catch(err){ toast("불러오기 실패 — 올바른 코드맵 기록 파일이 아니에요"); }
  };
  reader.readAsText(file);
}
$("#importFile").onchange = e=>{ if(e.target.files[0]) importProgress(e.target.files[0]); e.target.value=""; };
function resetProgress(){
  if(!confirm("정말 모든 학습 기록(진도·북마크·복습·오답·실습 코드)을 지울까요?\n되돌릴 수 없습니다.")) return;
  done.clear(); star.clear(); reviews={}; wrong.clear(); pgSave={};
  saveDone(); saveStar(); saveRev(); saveWrong(); savePg();
  refreshAll();
  toast("모든 학습 기록을 초기화했어요 🗑️");
}

/* ===== 초기화 ===== */
applyTheme(theme);
renderCats();
renderGrid();
renderRoadmap();
renderReview();
fillGraphSelect();
renderGraph();
renderCompare();
loadSnippet(0);
startQuiz();
renderWrong();
