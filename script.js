
const data = [
["Problem Statement ID","SIH26042"],
["Problem Statement Title","AI-Powered Vernacular Pedagogy and Real-Time Translation Tool for Mother Tongue-Based Primary Education"],
["Organization","Government of Jharkhand"],
["Department","Department of Higher & Technical Education"],
["Category","Software"],
["Theme","Smart Education"],
["Problem Statement Description","Jharkhand's PALASH Mother Tongue-Based Multilingual Education (MTB-MLE) programme has improved foundational literacy among tribal children. Scaling the programme is constrained by a shortage of teachers proficient in tribal languages such as Ho, Mundari, and Santhali, along with limited digital NLP resources. Many teachers are Hindi-medium trained and lack the linguistic tools needed for mother-tongue-based instruction.\n\nThe proposed system is an AI-assisted translation and curriculum-generation software suite that enables non-native-speaking primary teachers to deliver mother-tongue-based instruction. It should translate Hindi FLN curriculum content, including lesson scripts, activity instructions, and assessment prompts, into contextually accurate text and synthesised audio in target tribal languages. A real-time voice-to-voice translation feature should support interactive classroom dialogue with latency not exceeding three seconds. The system should also auto-generate bilingual worksheets and visual flashcard sets aligned with NIPUN Bharat learning outcomes, and is expected to function offline on low-cost tablets after initial content synchronisation."],
["Expected Solution","SikshaSetu is an AI-powered platform designed to bridge the language gap between Hindi-trained teachers and tribal-language-speaking primary students. The solution focuses on Hindi ↔ tribal-language voice translation, bilingual learning material generation, AI-generated worksheets and activities, NIPUN Bharat learning-outcome alignment, and an offline-first direction for low-connectivity classrooms."],
["Hardware Solution","[FILL: Actual demo / target device]"],
["Software Solution","Multilingual Live Translation; Listening Mode; Remote Communication; Real-Time Speech Processing"],
["Technologies Used","Python; TypeScript; React; Vite; Tailwind CSS; FastAPI; NLLB-200; Web Speech API; WebSocket; REST API; Docker; Vercel; Render; Git/GitHub"],
["Current Prototype","Current prototype capabilities: Multilingual Live Translation, Listening Mode, Remote Communication, and Real-Time Speech Processing."],
["Methodology / Implementation Flow","Speech Capture > Speech-to-Text > FastAPI > NLLB-200 Translation > SikshaSetu vernacular text + audio output"],
["Input / Output","Input: Speech > Speech-to-Text > AI Translation > Output: Vernacular Text + Audio"],
["Language Information","Target tribal languages named in the SIH problem statement: Ho, Mundari, and Santhali."],
["Currently Supported Language(s)","[FILL: Only the language(s) actually working in the current prototype]"],
["Data / Model Information","AI/NLP Model: NLLB-200 (pretrained multilingual translation model)."],
["Dataset / Custom Training","[No value provided in the solution sheet]"],
["Speech / Audio","Speech-to-Text: Web Speech API. Text-to-Speech: [FILL: Exact technology/API actually used]."],
["Offline Capability","Offline AI Processing: Future Development. Planned for low-connectivity classrooms after initial content synchronisation."],
["Deployment","Frontend: Vercel. Backend: Render. Containerisation: Docker. Version Control: Git/GitHub."],
["Prototype URL","[FILL: Actual deployed prototype URL]"],
["GitHub Repository","[FILL: Actual GitHub repository URL]"],
["Potential Impact","Teachers: supports Hindi-trained teachers in vernacular instruction and reduces the teacher–student language barrier.\nStudents: supports learning and classroom communication through a familiar mother tongue.\nSchools: supports Mother Tongue-Based Multilingual Education and digital teaching in low-connectivity environments.\nEducation System: can help scale vernacular teaching support and curriculum-aligned multilingual learning."],
["Benefits","Social: promotes inclusive education and linguistic diversity.\nEducational: improves access to mother-tongue learning.\nEconomic: can reduce extensive language-training and manual material-preparation effort.\nTechnological: applies AI-based translation and speech support to low-resource language education.\nAccessibility: supports voice and text-based classroom communication.\nScalability: digital learning content can be reused across classrooms."],
["Research / References","1. NIPUN Bharat Guidelines — foundational literacy, numeracy, and learning outcomes.\n2. UNESCO — research and policy work on mother-tongue and multilingual education.\n3. Digital India BHASHINI — Indian-language AI, speech, and translation ecosystem.\n4. NLLB-200 research — multilingual machine translation, including low-resource language translation."],
["Reference Links","[FILL: Add official source URLs for the four references above]"]
];

const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
function renderSheet(q=""){
  const rows=data.filter(([k,v]) => (k+" "+v).toLowerCase().includes(q.trim().toLowerCase()));
  document.getElementById("sheet").innerHTML=rows.map(([k,v])=>{
    const fill=/\[FILL:|No value provided/.test(v);
    return `<div class="sheet-row"><strong>${esc(k)}</strong><div class="value">${esc(v)}${fill?'<div class="fill">SOURCE FIELD REQUIRES COMPLETION</div>':''}</div></div>`;
  }).join("");
  document.getElementById("count").textContent=`${rows.length} of ${data.length} fields`;
}
renderSheet();
document.getElementById("search").addEventListener("input",e=>renderSheet(e.target.value));

const menu=document.getElementById("menu"), nav=document.getElementById("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{
 const h=document.documentElement.scrollHeight-window.innerHeight;
 progress.style.width=(window.scrollY/Math.max(h,1))*100+"%";
},{passive:true});


const liveState = document.getElementById("liveState");
if (liveState) {
  const states = ["AI PROCESSING", "LISTENING", "TRANSLATING", "AUDIO READY"];
  let stateIndex = 0;
  setInterval(() => {
    stateIndex = (stateIndex + 1) % states.length;
    liveState.animate(
      [{opacity:1, transform:"translateY(0)"},{opacity:0, transform:"translateY(-3px)"},{opacity:1, transform:"translateY(0)"}],
      {duration:380, easing:"ease-out"}
    );
    liveState.textContent = states[stateIndex];
  }, 1700);
}
