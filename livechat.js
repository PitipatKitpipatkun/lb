// ═══════════════════════════════════════════════
//  VetQuiz Live Chat — Floating Widget v2
//  ทุกคนใช้ได้ — เลือก Avatar + ชื่อเล่นก่อน chat
// ═══════════════════════════════════════════════
(function(){
'use strict';

const SB_URL='https://mxnsngomamxtvlbzrqqd.supabase.co';
const SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bnNuZ29tYW14dHZsYnpycXFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTMxOTgsImV4cCI6MjA5MjUyOTE5OH0.ZeriQ41qG2GCtjRB4Ios6ecCvMmVoCbAc-ydgcgXMNg';
const CHANNEL='livechat_global';
const MAX_MSG=100;

const AVATARS=['🐕','🐈','🐄','🐷','🐴','🦜','🐰','🐢','🦊','🐺','🦁','🐯','🐻','🐼','🦝','🦔','🐸','🐧','🦆','🐬'];

let sb=null, ch=null;
let myId='', myNick='', myAvatar='🐾';
let isOpen=false, unread=0, online=1;
let profileSet=false;

// ─── Boot ────────────────────────────────────
function boot(){
  if(!window.supabase){ setTimeout(boot,300); return; }
  sb=window.supabase.createClient(SB_URL,SB_KEY);
  myId=getUid();
  loadProfile();
  buildCSS();
  buildHTML();
  connect();
}

function getUid(){
  let id=localStorage.getItem('lc_uid');
  if(!id){ id='u'+Math.random().toString(36).slice(2,10); localStorage.setItem('lc_uid',id); }
  return id;
}

function loadProfile(){
  // Try logged-in user first
  try{
    const u=JSON.parse(localStorage.getItem('lb_user')||'null');
    if(u&&u.fullName){ myNick=u.fullName.split(' ')[0]; }
  }catch(e){}
  // Then check saved chat profile
  try{
    const p=JSON.parse(localStorage.getItem('lc_profile')||'null');
    if(p&&p.nick){ myNick=p.nick; myAvatar=p.avatar||'🐾'; profileSet=true; }
  }catch(e){}
  if(!myNick) myNick='';
}

function saveProfile(nick,av){
  myNick=nick; myAvatar=av; profileSet=true;
  localStorage.setItem('lc_profile',JSON.stringify({nick,avatar:av}));
  if(ch) ch.track({uid:myId,nick:myNick,avatar:myAvatar,page:pageLabel()}).catch(()=>{});
}

function pageLabel(){
  const p=location.pathname.split('/').pop()||'index.html';
  const map={'index.html':'🏠 หน้าหลัก','game.html':'🎮 VetQuiz','quiz-live.html':'⚡ Live','calculators.html':'🧮 Calculator','games.html':'🎮 Games','student-dashboard.html':'🎓 Student','teacher-dashboard.html':'👩‍⚕️ Teacher','admin-dashboard.html':'⚙️ Admin'};
  return map[p]||p;
}

// ─── CSS ─────────────────────────────────────
function buildCSS(){
  const s=document.createElement('style');
  s.textContent=`
#_lcFab{
  position:fixed;bottom:max(20px,env(safe-area-inset-bottom));right:16px;z-index:9000;
  width:54px;height:54px;border-radius:50%;
  background:linear-gradient(135deg,#0d9488,#0f766e);
  border:none;cursor:pointer;
  box-shadow:0 4px 20px rgba(13,148,136,0.4);
  display:flex;align-items:center;justify-content:center;
  font-size:26px;transition:transform 0.2s,background 0.2s;}
#_lcFab:active{transform:scale(0.93);}
#_lcFab{cursor:grab !important;touch-action:none;}

#_lcFab.open{background:linear-gradient(135deg,#475569,#334155);}
#_lcBadge{
  position:absolute;top:-3px;right:-3px;
  background:#e11d48;color:#fff;border-radius:99px;
  font-size:10px;font-weight:800;padding:1px 5px;
  min-width:18px;text-align:center;font-family:sans-serif;
  display:none;border:2px solid #fff;}
#_lcPanel{
  position:fixed;bottom:86px;right:12px;z-index:8999;
  width:320px;max-width:calc(100vw - 20px);
  background:#fff;border-radius:22px;
  box-shadow:0 8px 44px rgba(0,0,0,0.18);
  display:flex;flex-direction:column;max-height:500px;
  transform:scale(0.85) translateY(12px);opacity:0;
  transform-origin:bottom right;
  transition:transform 0.22s cubic-bezier(0.34,1.56,0.64,1),opacity 0.2s;
  pointer-events:none;overflow:hidden;}
#_lcPanel.on{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}

/* Header */
._lcHdr{
  background:linear-gradient(135deg,#0d9488,#0f766e);
  padding:11px 14px;display:flex;align-items:center;gap:9px;flex-shrink:0;}
._lcHdrIco{font-size:22px;line-height:1;}
._lcHdrInfo{flex:1;}
._lcHdrTitle{font-family:'Sarabun',sans-serif;font-size:14px;font-weight:700;color:#fff;}
._lcOnline{font-size:11px;color:rgba(255,255,255,0.7);}
._lcClose{
  background:rgba(255,255,255,0.15);border:none;color:#fff;
  width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;
  display:flex;align-items:center;justify-content:center;}

/* JOIN SCREEN */
#_lcJoin{
  flex:1;padding:20px 16px;display:flex;flex-direction:column;
  align-items:center;gap:14px;overflow-y:auto;}
._lcJoinTitle{font-family:'Sarabun',sans-serif;font-size:15px;font-weight:700;color:#1e293b;}
._lcJoinSub{font-size:12px;color:#94a3b8;text-align:center;line-height:1.5;}
._lcAvatarGrid{
  display:grid;grid-template-columns:repeat(5,1fr);gap:8px;width:100%;}
._lcAvOpt{
  width:100%;aspect-ratio:1;border-radius:10px;border:2px solid #e2e8f0;
  background:#f8fafc;cursor:pointer;font-size:22px;display:flex;
  align-items:center;justify-content:center;transition:all 0.15s;}
._lcAvOpt:active{transform:scale(0.9);}
._lcAvOpt.sel{border-color:#0d9488;background:#f0fdfa;transform:scale(1.08);}
._lcNickWrap{width:100%;display:flex;gap:8px;}
._lcNickField{
  flex:1;padding:10px 13px;border:1.5px solid #e2e8f0;border-radius:12px;
  font-family:'Sarabun',sans-serif;font-size:14px;outline:none;}
._lcNickField:focus{border-color:#0d9488;}
._lcJoinBtn{
  width:100%;padding:12px;background:linear-gradient(135deg,#0d9488,#0f766e);
  color:#fff;border:none;border-radius:13px;
  font-family:'Sarabun',sans-serif;font-size:14px;font-weight:700;cursor:pointer;}
._lcJoinBtn:active{transform:scale(0.97);}
._lcMyAvBig{font-size:44px;line-height:1;}

/* CHAT SCREEN */
#_lcChat{flex:1;display:flex;flex-direction:column;overflow:hidden;}
._lcMeBar{
  padding:6px 12px;background:#f0fdfa;border-bottom:1px solid #e2e8f0;
  display:flex;align-items:center;gap:8px;flex-shrink:0;}
._lcMeAvSmall{font-size:18px;}
._lcMeName{font-family:'Sarabun',sans-serif;font-size:12px;font-weight:700;color:#0d9488;flex:1;}
._lcChangeBtn{
  font-size:11px;color:#94a3b8;background:none;border:none;cursor:pointer;
  font-family:'Sarabun',sans-serif;padding:3px 6px;}
#_lcMsgs{
  flex:1;overflow-y:auto;padding:10px 12px;
  display:flex;flex-direction:column;gap:6px;scroll-behavior:smooth;}
#_lcMsgs::-webkit-scrollbar{width:3px;}
#_lcMsgs::-webkit-scrollbar-thumb{background:#e2e8f0;border-radius:2px;}
._lcEmpty{
  text-align:center;color:#94a3b8;font-size:12px;
  padding:24px 16px;font-family:'Sarabun',sans-serif;}
._lcMsg{display:flex;gap:7px;animation:_lcIn 0.18s ease;}
._lcMsg.me{flex-direction:row-reverse;}
@keyframes _lcIn{from{opacity:0;transform:translateY(5px)}to{opacity:1}}
._lcAv{
  width:32px;height:32px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-size:19px;flex-shrink:0;margin-top:2px;
  background:#f1f5f9;}
._lcBub{max-width:210px;}
._lcBubNick{font-size:10px;color:#94a3b8;font-weight:600;margin-bottom:2px;font-family:sans-serif;}
._lcMsg.me ._lcBubNick{text-align:right;}
._lcBubText{
  background:#f1f5f9;border-radius:12px 12px 12px 3px;
  padding:7px 10px;font-size:13px;line-height:1.5;color:#1e293b;
  word-break:break-word;font-family:'Sarabun',sans-serif;}
._lcMsg.me ._lcBubText{
  background:linear-gradient(135deg,#0d9488,#0f766e);color:#fff;
  border-radius:12px 12px 3px 12px;}
._lcBubTime{font-size:10px;color:#cbd5e1;margin-top:2px;font-family:sans-serif;}
._lcMsg.me ._lcBubTime{text-align:right;}
._lcSys{text-align:center;font-size:11px;color:#94a3b8;padding:2px 0;font-family:sans-serif;}
._lcInputRow{
  padding:9px 12px;border-top:1px solid #f1f5f9;
  display:flex;gap:7px;align-items:flex-end;flex-shrink:0;
  background:#fff;}
#_lcInput{
  flex:1;padding:8px 11px;border:1.5px solid #e2e8f0;border-radius:11px;
  font-family:'Sarabun',sans-serif;font-size:13px;outline:none;
  resize:none;max-height:80px;line-height:1.4;min-height:36px;}
#_lcInput:focus{border-color:#0d9488;}
#_lcSend{
  width:36px;height:36px;background:linear-gradient(135deg,#0d9488,#0f766e);
  color:#fff;border:none;border-radius:10px;cursor:pointer;font-size:17px;
  display:flex;align-items:center;justify-content:center;flex-shrink:0;
  transition:transform 0.15s;}
#_lcSend:active{transform:scale(0.91);}
`;
  document.head.appendChild(s);
}

// ─── HTML ─────────────────────────────────────
function buildHTML(){
  const d=document.createElement('div');
  d.innerHTML=`
<button id="_lcFab" title="Live Chat">💬<span id="_lcBadge"></span></button>

<div id="_lcPanel">
  <!-- Header (always visible) -->
  <div class="_lcHdr">
    <div class="_lcHdrIco">💬</div>
    <div class="_lcHdrInfo">
      <div class="_lcHdrTitle">Live Chat</div>
      <div class="_lcOnline" id="_lcOnlineTxt">🟢 กำลังโหลด...</div>
    </div>
    <button class="_lcClose" id="_lcCloseBtn" title="ย่อ">—</button>
  </div>

  <!-- JOIN SCREEN -->
  <div id="_lcJoin">
    <div class="_lcMyAvBig" id="_lcJoinAvBig">🐾</div>
    <div class="_lcJoinTitle">ยินดีต้อนรับสู่ Live Chat! 🎉</div>
    <div class="_lcJoinSub">เลือก Avatar และตั้งชื่อเล่นก่อนเริ่มคุย</div>
    <div class="_lcAvatarGrid" id="_lcAvGrid">${AVATARS.map((a,i)=>`<button class="_lcAvOpt${i===0?' sel':''}" data-av="${a}" onclick="lcPickAv('${a}',this)">${a}</button>`).join('')}</div>
    <div class="_lcNickWrap">
      <input class="_lcNickField" id="_lcNickField" maxlength="20" placeholder="ชื่อเล่นของคุณ">
    </div>
    <button class="_lcJoinBtn" onclick="lcJoin()">💬 เริ่มคุย!</button>
  </div>

  <!-- CHAT SCREEN -->
  <div id="_lcChat" style="display:none;">
    <div class="_lcMeBar">
      <span class="_lcMeAvSmall" id="_lcMeAv">🐾</span>
      <span class="_lcMeName" id="_lcMeName">...</span>
      <button class="_lcChangeBtn" onclick="lcShowJoin()">✏️ เปลี่ยน</button>
    </div>
    <div id="_lcMsgs"><div class="_lcEmpty">🐾 ยังไม่มีข้อความ — เป็นคนแรกที่พูดคุย!</div></div>
    <div class="_lcInputRow">
      <textarea id="_lcInput" rows="1" placeholder="พิมพ์ข้อความ..." maxlength="300"></textarea>
      <button id="_lcSend">➤</button>
    </div>
  </div>
</div>`;
  document.body.appendChild(d);

  // Pre-fill if profile exists
  if(profileSet){
    document.getElementById('_lcNickField').value=myNick;
    setSelectedAv(myAvatar);
    document.getElementById('_lcJoinAvBig').textContent=myAvatar;
  }

  // Events
  document.getElementById('_lcFab').addEventListener('click',lcToggle);
  setTimeout(initDrag, 0);
  document.getElementById('_lcCloseBtn').addEventListener('click',lcToggle);
  document.getElementById('_lcSend').addEventListener('click',lcSend);
  const inp=document.getElementById('_lcInput');
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();lcSend();}});
  inp.addEventListener('input',function(){this.style.height='auto';this.style.height=Math.min(this.scrollHeight,80)+'px';});

  // Expose globals
  window.lcPickAv=lcPickAv;
  // Re-sync panel pos after open
  window.lcJoin=lcJoin;
  window.lcShowJoin=lcShowJoin;
}

// ─── Join / Profile ───────────────────────────
let _selectedAv=AVATARS[0];

function lcPickAv(av,btn){
  _selectedAv=av;
  document.querySelectorAll('._lcAvOpt').forEach(b=>b.classList.remove('sel'));
  btn.classList.add('sel');
  document.getElementById('_lcJoinAvBig').textContent=av;
}

function setSelectedAv(av){
  _selectedAv=av;
  document.querySelectorAll('._lcAvOpt').forEach(b=>{
    b.classList.toggle('sel',b.dataset.av===av);
  });
}

function lcJoin(){
  const nick=(document.getElementById('_lcNickField').value||'').trim();
  if(!nick){ document.getElementById('_lcNickField').focus(); return; }
  saveProfile(nick,_selectedAv);
  showChat();
  if(!_historyLoaded){ _historyLoaded=true; loadHistory(); }
  // Announce join
  if(ch) ch.send({type:'broadcast',event:'msg',payload:{uid:'sys',nick:'',avatar:'',text:'👋 '+nick+' เข้าร่วมห้อง',ts:new Date().toISOString()}}).catch(()=>{});
}

let _historyLoaded=false;
function showChat(){
  document.getElementById('_lcJoin').style.display='none';
  document.getElementById('_lcChat').style.display='flex';
  document.getElementById('_lcMeAv').textContent=myAvatar;
  document.getElementById('_lcMeName').textContent=myNick;
  setTimeout(lcScrollBottom,100);
  document.getElementById('_lcInput')?.focus();
}

function lcShowJoin(){
  document.getElementById('_lcJoin').style.display='flex';
  document.getElementById('_lcChat').style.display='none';
  document.getElementById('_lcNickField').value=myNick;
  setSelectedAv(myAvatar);
}

// ─── Supabase ─────────────────────────────────
function connect(){
  ch=sb.channel(CHANNEL,{
    config:{presence:{key:myId},broadcast:{self:true}}
  });

  ch.on('presence',{event:'sync'},()=>{
    const state=ch.presenceState();
    online=Object.keys(state).length;
    updateOnline();
  });
  ch.on('presence',{event:'join'},({key,newPresences})=>{
    online=Math.max(online+1,1);updateOnline();
    const p=newPresences[0];
    // Don't show join msg here since lcJoin() handles it
  });
  ch.on('presence',{event:'leave'},({key,leftPresences})=>{
    online=Math.max(online-1,1);updateOnline();
    const p=leftPresences[0];
    if(p&&p.uid!==myId) lcAddSys('🚪 '+(p.nick||'ผู้ใช้')+' ออกไป');
  });

  ch.on('broadcast',{event:'msg'},(payload)=>{
    const d=payload?.payload??payload;
    if(!d)return;
    if(d.uid==='sys'){lcAddSys(d.text);return;}
    lcRenderMsg(d.uid===myId,d.nick,d.avatar||'🐾',d.text,d.ts,false);
    if(!isOpen){unread++;updateBadge();}
  });

  ch.subscribe(async(status)=>{
    if(status==='SUBSCRIBED'){
      const trackData={uid:myId,nick:myNick||'?',avatar:myAvatar,page:pageLabel()};
      await ch.track(trackData).catch(()=>{});
      updateOnline();
      // Auto-show chat if profile already set
      if(profileSet&&isOpen){
        showChat();
        if(!_historyLoaded){ _historyLoaded=true; loadHistory(); }
      }
    }
  });
}

async function loadHistory(){
  try{
    const {data}=await sb.from('activity_logs')
      .select('user_name,user_code,details,created_at,action')
      .eq('user_role','livechat')
      .order('created_at',{ascending:false})
      .limit(30);
    if(!data||!data.length)return;
    // Clear empty state
    const empty=document.getElementById('_lcMsgs')?.querySelector('._lcEmpty');
    if(empty)empty.remove();
    data.reverse().forEach(row=>{
      let av='🐾',nick=row.user_name||'?';
      try{ const x=JSON.parse(row.action||'{}'); av=x.avatar||'🐾'; }catch(e){}
      lcRenderMsg(row.user_code===myId,nick,av,row.details,row.created_at,true);
    });
  }catch(e){ console.log('[chat] history error',e); }
}

// ─── Send ──────────────────────────────────────
async function lcSend(){
  if(!profileSet){ lcShowJoin(); return; }
  const inp=document.getElementById('_lcInput');
  const text=(inp.value||'').trim();
  if(!text||!ch)return;
  inp.value=''; inp.style.height='auto';
  const ts=new Date().toISOString();
  const payload={uid:myId,nick:myNick,avatar:myAvatar,text,ts};
  await ch.send({type:'broadcast',event:'msg',payload}).catch(()=>{});
  // Persist
  try{
    await sb.from('activity_logs').insert({
      user_role:'livechat',user_name:myNick,user_code:myId,
      action:JSON.stringify({avatar:myAvatar}),details:text
    });
  }catch(e){}
}

// ─── Render ────────────────────────────────────
function lcRenderMsg(isMine,nick,avatar,text,ts,historic){
  const empty=document.getElementById('_lcMsgs')?.querySelector('._lcEmpty');
  if(empty)empty.remove();
  const wrap=document.getElementById('_lcMsgs');
  if(!wrap)return;
  while(wrap.children.length>=MAX_MSG)wrap.removeChild(wrap.firstChild);
  const time=ts?new Date(ts).toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'}):'';
  const div=document.createElement('div');
  div.className='_lcMsg'+(isMine?' me':'');
  div.innerHTML=
    '<div class="_lcAv">'+esc(avatar||'🐾')+'</div>'+
    '<div class="_lcBub">'+
      '<div class="_lcBubNick">'+esc(nick)+'</div>'+
      '<div class="_lcBubText">'+esc(text)+'</div>'+
      '<div class="_lcBubTime">'+time+'</div>'+
    '</div>';
  wrap.appendChild(div);
  if(isOpen||historic)lcScrollBottom();
}

function lcAddSys(text){
  const wrap=document.getElementById('_lcMsgs');
  if(!wrap)return;
  const div=document.createElement('div');
  div.className='_lcSys'; div.textContent=text;
  wrap.appendChild(div);
  if(isOpen)lcScrollBottom();
}

// ─── UI ────────────────────────────────────────
function lcToggle(){
  isOpen=!isOpen;
  document.getElementById('_lcPanel').classList.toggle('on',isOpen);
  document.getElementById('_lcFab').classList.toggle('open',isOpen);
  document.getElementById('_lcFab').querySelector('span')||null;
  if(isOpen){
    unread=0; updateBadge();
    if(profileSet) showChat();
    else { // show join screen
      document.getElementById('_lcJoin').style.display='flex';
      document.getElementById('_lcChat').style.display='none';
    }
    setTimeout(lcScrollBottom,120);
  }
}

function lcScrollBottom(){
  const w=document.getElementById('_lcMsgs');
  if(w)w.scrollTop=w.scrollHeight;
}
function updateBadge(){
  const b=document.getElementById('_lcBadge');
  if(!b)return;
  b.textContent=unread>9?'9+':unread;
  b.style.display=unread>0&&!isOpen?'block':'none';
}
function updateOnline(){
  const el=document.getElementById('_lcOnlineTxt');
  if(el)el.textContent='🟢 ออนไลน์ '+online+' คน';
}
function esc(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}



// ══════════════════════════════════════
//  DRAGGABLE FAB (Pointer Events)
// ══════════════════════════════════════
function initDrag(){
  const fab=document.getElementById('_lcFab');
  if(!fab)return;

  let active=false, ox=0, oy=0, fx=0, fy=0, moved=false;
  const MARGIN=8, FAB_S=54;

  // Restore saved position
  (function loadPos(){
    try{
      const s=localStorage.getItem('lc_fab_pos');
      if(!s)return;
      const p=JSON.parse(s);
      applyPos(p.x,p.y);
    }catch(e){}
  })();

  function clamp(x,y){
    const W=window.innerWidth, H=window.innerHeight;
    return {
      x:Math.max(MARGIN, Math.min(x, W-FAB_S-MARGIN)),
      y:Math.max(MARGIN, Math.min(y, H-FAB_S-MARGIN))
    };
  }

  function applyPos(x,y){
    const p=clamp(x,y);
    fab.style.cssText=fab.style.cssText
      .replace(/right:[^;]+;?/g,'')
      .replace(/bottom:[^;]+;?/g,'');
    fab.style.left=p.x+'px';
    fab.style.top=p.y+'px';
    fab.style.right='auto';
    fab.style.bottom='auto';
    repositionPanel(p.x,p.y);
  }

  function repositionPanel(fx,fy){
    const panel=document.getElementById('_lcPanel');
    if(!panel||!panel.classList.contains('on'))return;
    const W=window.innerWidth, H=window.innerHeight;
    const PW=320, PH=460;
    // Prefer above, else below
    let px=fx+FAB_S/2-PW/2;
    let py=fy-PH-10;
    if(py<MARGIN){ py=fy+FAB_S+10; }
    px=Math.max(MARGIN, Math.min(px, W-PW-MARGIN));
    panel.style.left=px+'px'; panel.style.top=py+'px';
    panel.style.right='auto'; panel.style.bottom='auto';
    panel.style.transformOrigin='center bottom';
  }

  function getRect(){
    return fab.getBoundingClientRect();
  }

  fab.addEventListener('pointerdown', function(e){
    const r=getRect();
    fx=r.left; fy=r.top;
    ox=e.clientX; oy=e.clientY;
    active=true; moved=false;
    fab.setPointerCapture(e.pointerId);
    fab.style.transition='none';
    e.preventDefault();
  },{passive:false});

  fab.addEventListener('pointermove', function(e){
    if(!active)return;
    const dx=e.clientX-ox, dy=e.clientY-oy;
    if(!moved && Math.hypot(dx,dy)<6)return;
    moved=true;
    applyPos(fx+dx, fy+dy);
    e.preventDefault();
  },{passive:false});

  fab.addEventListener('pointerup', function(e){
    if(!active)return;
    active=false;
    fab.style.transition='transform 0.2s,background 0.2s';
    if(moved){
      const r=getRect();
      try{ localStorage.setItem('lc_fab_pos',JSON.stringify({x:r.left,y:r.top})); }catch(e2){}
    } else {
      lcToggle(); // tap = toggle
    }
  });

  fab.addEventListener('pointercancel',()=>{ active=false; });

  // Remove the direct click handler (pointerup handles it)
  fab.removeEventListener('click',lcToggle);
  fab.addEventListener('click',(e)=>e.stopImmediatePropagation(),true);
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
else boot();
})();
