const steps = [
  {
    role: "client",
    speaker: "客户",
    time: "00:08",
    text: "我 2023 年 3 月入职一家科技公司，做运营，工资每月 12000。",
    tags: ["入职时间: 2023年3月", "岗位: 运营", "工资: 12000/月"],
    focus: "确认劳动关系基础信息",
    focusDesc: "已识别入职时间、岗位和工资标准，下一步应确认合同和工资发放方式。",
    facts: {
      入职时间: "2023 年 3 月",
      工资标准: "12000 元/月",
      解除方式: "未识别",
      现有证据: "未识别"
    },
    questions: ["是否签订劳动合同？", "工资是税前还是税后？", "工资通过银行发放还是现金？", "社保和个税是否正常缴纳？"],
    laws: [
      {
        title: "劳动关系基础事实",
        body: "劳动合同、工资支付、实际用工记录通常用于证明劳动关系和工资标准。",
        status: "模拟法条卡 · 需核验具体依据"
      }
    ],
    plan: ["先固定劳动关系和工资标准。", "引导客户补充劳动合同、工资流水、社保或个税记录。"]
  },
  {
    role: "client",
    speaker: "客户",
    time: "00:31",
    text: "上个月公司说我绩效不达标，让我直接不用来了，没有给正式解除通知。",
    tags: ["解除理由: 绩效不达标", "解除方式: 口头通知", "解除通知: 未提供"],
    focus: "解除依据和解除程序",
    focusDesc: "绩效解除需要重点核验制度依据、考核过程、改进机会和解除通知。",
    facts: {
      入职时间: "2023 年 3 月",
      工资标准: "12000 元/月",
      解除方式: "口头通知",
      现有证据: "劳动合同待确认"
    },
    questions: ["是否收到书面解除通知？", "是否签收过绩效考核结果？", "公司是否给过绩效改进计划？", "公司制度是否写明绩效不达标后果？"],
    laws: [
      {
        title: "用人单位解除劳动合同",
        body: "用人单位单方解除通常需要具备合法依据，并履行相应程序。绩效不达标解除需关注制度、考核和程序。",
        status: "模拟法条卡 · 不作为正式依据"
      },
      {
        title: "违法解除风险",
        body: "若解除依据或程序无法证明，可能存在被认定为违法解除的风险。",
        status: "模拟法条卡 · 需律师核验"
      }
    ],
    plan: ["围绕绩效解除合法性收集证据。", "优先核验书面解除通知、绩效制度、绩效结果和沟通记录。", "对外表达使用“存在违法解除风险”，避免确定性承诺。"]
  },
  {
    role: "lawyer",
    speaker: "律师",
    time: "00:52",
    text: "你有没有签过绩效考核结果，或者公司有没有让你做过绩效改进计划？",
    tags: ["律师追问", "绩效材料", "改进计划"],
    focus: "追问关键解除程序",
    focusDesc: "律师正在追问绩效解除的关键程序材料，系统继续关注证据缺口。",
    questions: ["绩效结果是否有书面或系统记录？", "是否有 HR 或主管沟通记录？", "是否有录音或邮件？"],
    laws: [],
    plan: ["如果客户没有绩效材料，应要求其提供所有相关沟通记录。", "如果公司无改进过程，解除程序风险需要进一步评估。"]
  },
  {
    role: "client",
    speaker: "客户",
    time: "01:16",
    text: "没有签过绩效改进计划。我有劳动合同、工资流水，还有一些微信聊天记录，但是考勤记录不完整。",
    tags: ["已有: 劳动合同", "已有: 工资流水", "已有: 微信记录", "缺失: 完整考勤"],
    focus: "证据状态和材料缺口",
    focusDesc: "客户已有劳动关系和部分沟通证据，但解除、绩效、考勤材料仍是关键缺口。",
    facts: {
      入职时间: "2023 年 3 月",
      工资标准: "12000 元/月",
      解除方式: "口头通知",
      现有证据: "劳动合同、工资流水、微信记录"
    },
    questions: ["微信记录里是否有解除通知或领导要求离开的表述？", "是否能导出考勤或请同事证明？", "是否签署过离职结算文件？"],
    laws: [
      {
        title: "证据补强提示",
        body: "劳动争议中，劳动关系、解除事实、工资标准、加班事实通常需要不同证据分别证明。",
        status: "模拟法条卡 · 证据规则需核验"
      }
    ],
    plan: ["材料清单初步形成：劳动合同、工资流水、解除沟通、绩效材料、考勤和加班记录。", "违法解除主张可作为主线，加班费和年假工资作为补充主张评估。"]
  },
  {
    role: "client",
    speaker: "客户",
    time: "01:44",
    text: "我平时经常加班，年假也没怎么休过。我想知道能不能要赔偿金、年假和加班费。",
    tags: ["诉求: 赔偿金", "诉求: 年假工资", "诉求: 加班费"],
    focus: "形成初步处理方案",
    focusDesc: "客户诉求已经明确，可形成初步方案，但加班费和年假工资证据风险较高。",
    questions: ["加班是否有审批、排班或工作成果提交记录？", "年假是否有系统记录或公司通知？", "是否愿意先补齐材料后测算金额？"],
    laws: [
      {
        title: "赔偿金、年假、加班费请求",
        body: "不同请求项目对应不同事实和证据要求。赔偿金关注解除合法性，加班费关注加班事实和单位安排，年假关注应休和已休情况。",
        status: "模拟法条卡 · 需进一步核验"
      }
    ],
    plan: ["初步方案：先固定劳动关系、工资标准和解除事实。", "第二步核验公司绩效解除依据和程序。", "第三步整理加班和年假证据，判断是否一并主张。", "如协商不成，准备劳动仲裁。"]
  }
];

const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const resetBtn = document.querySelector("#resetBtn");
const liveFeed = document.querySelector("#liveFeed");
const sessionStatus = document.querySelector("#sessionStatus");
const recordDot = document.querySelector("#recordDot");
const timer = document.querySelector("#timer");
const currentFocus = document.querySelector("#currentFocus");
const currentFocusDesc = document.querySelector("#currentFocusDesc");
const factGrid = document.querySelector("#factGrid");
const questionList = document.querySelector("#questionList");
const lawCards = document.querySelector("#lawCards");
const planDraft = document.querySelector("#planDraft");
const outputs = document.querySelector("#outputs");

let index = 0;
let seconds = 0;
let timerId = null;
let streamId = null;
let hasEnded = false;

const outputDocs = {
  minutes: {
    title: "咨询纪要",
    body: `
      <h3>一、客户主要诉求</h3>
      <p>客户希望判断公司以绩效不达标为由解除劳动关系是否合法，并确认能否主张违法解除赔偿金、未休年假工资和加班费。</p>
      <h3>二、关键事实</h3>
      <ul>
        <li>客户于 2023 年 3 月入职某科技公司，岗位为运营，月工资 12000 元。</li>
        <li>公司上月以绩效不达标为由要求客户离开，客户称未收到正式解除通知。</li>
        <li>客户称未签署绩效改进计划，现有劳动合同、工资流水和部分微信记录。</li>
      </ul>
      <h3>三、待确认事项</h3>
      <p>需进一步确认解除通知、绩效考核材料、离职结算文件、完整考勤和加班证据。</p>
    `
  },
  materials: {
    title: "材料清单",
    body: `
      <h3>必须补充</h3>
      <ul>
        <li>劳动合同</li>
        <li>工资流水</li>
        <li>解除通知或解除沟通记录</li>
        <li>绩效制度、绩效考核结果、绩效沟通和改进计划</li>
        <li>关键微信、邮件、工作软件沟通记录</li>
      </ul>
      <h3>建议补充</h3>
      <ul>
        <li>考勤记录、排班表、项目上线记录</li>
        <li>年休假记录、社保和个税记录</li>
        <li>离职结算材料或补偿协议</li>
      </ul>
    `
  },
  plan: {
    title: "方案摘要",
    body: `
      <h3>初步处理路径</h3>
      <ol>
        <li>先固定劳动关系、工资标准和解除事实。</li>
        <li>重点核验公司绩效解除依据和程序是否合法。</li>
        <li>补强解除通知、绩效材料、考勤和加班证据。</li>
        <li>根据材料判断违法解除赔偿金、年假工资、加班费是否一并主张。</li>
        <li>协商不成时，准备劳动仲裁。</li>
      </ol>
      <p class="doc-warning">对外表达建议使用“存在被认定为违法解除的风险”，避免承诺确定结果。</p>
    `
  },
  opinion: {
    title: "模拟法律意见书格式样例",
    body: `
      <p class="doc-warning">模拟格式样例，仅用于向律师确认结构。未经律师审核，不可发送客户。法条与结论均需进一步核验。</p>
      <h3>一、基本事实</h3>
      <p>根据客户陈述，其于 2023 年 3 月入职某科技公司，岗位为运营，月工资 12000 元。公司近期以绩效不达标为由要求客户离开，客户称未收到正式解除通知。</p>
      <h3>二、咨询问题</h3>
      <ul>
        <li>公司以绩效不达标为由解除劳动关系是否合法。</li>
        <li>客户能否主张违法解除赔偿金。</li>
        <li>客户能否一并主张未休年假工资和加班费。</li>
      </ul>
      <h3>三、初步分析</h3>
      <p>公司以绩效不达标解除劳动关系，需进一步核验绩效制度、考核结果、改进安排及解除程序。若公司无法证明解除依据和程序合法，存在被认定为违法解除的风险。</p>
      <h3>四、处理建议</h3>
      <p>建议先补充劳动合同、工资流水、解除沟通记录、绩效材料、考勤及加班证据，再由律师进一步判断具体请求项目和金额测算。</p>
      <h3>五、风险提示</h3>
      <p>本样例不构成正式法律意见。具体判断需由律师结合完整证据和现行法律依据确认。</p>
    `
  }
};

startBtn.addEventListener("click", startSession);
endBtn.addEventListener("click", endSession);
resetBtn.addEventListener("click", resetSession);
outputs.addEventListener("click", handleOutputClick);

function startSession() {
  liveFeed.innerHTML = "";
  index = 0;
  seconds = 0;
  hasEnded = false;
  sessionStatus.textContent = "咨询中 · 模拟转记";
  recordDot.classList.add("active");
  startBtn.disabled = true;
  endBtn.disabled = false;
  timer.textContent = "00:00";
  timerId = window.setInterval(() => {
    seconds += 1;
    timer.textContent = formatTime(seconds);
  }, 1000);
  playNext();
  streamId = window.setInterval(playNext, 1800);
}

function playNext() {
  if (index >= steps.length) {
    endSession();
    return;
  }
  const step = steps[index];
  appendUtterance(step);
  updateAssist(step);
  index += 1;
}

function appendUtterance(step) {
  const article = document.createElement("article");
  article.className = `utterance ${step.role}`;
  article.innerHTML = `
    <div class="utterance-head">
      <span class="speaker">${step.speaker}</span>
      <span class="time">${step.time}</span>
    </div>
    <p>${step.text}</p>
    <div class="tags">${step.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
  `;
  liveFeed.appendChild(article);
  article.scrollIntoView({ behavior: "smooth", block: "end" });
}

function updateAssist(step) {
  currentFocus.textContent = step.focus;
  currentFocusDesc.textContent = step.focusDesc;

  if (step.facts) {
    factGrid.innerHTML = Object.entries(step.facts)
      .map(([key, value]) => `<div><span>${key}</span><strong>${value}</strong></div>`)
      .join("");
  }

  if (step.questions?.length) {
    questionList.innerHTML = step.questions.map((item) => `<li>${item}</li>`).join("");
  }

  if (step.laws?.length) {
    lawCards.innerHTML = step.laws.map((law) => `
      <div class="law-card">
        <strong>${law.title}</strong>
        <p>${law.body}</p>
        <em>${law.status}</em>
      </div>
    `).join("");
  }

  if (step.plan?.length) {
    planDraft.innerHTML = `<ul>${step.plan.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }
}

function endSession() {
  if (hasEnded) return;
  hasEnded = true;
  window.clearInterval(timerId);
  window.clearInterval(streamId);
  timerId = null;
  streamId = null;
  sessionStatus.textContent = "已结束 · 产物已生成";
  recordDot.classList.remove("active");
  startBtn.disabled = false;
  endBtn.disabled = true;
  markOutputsReady();
  appendSummary();
}

function markOutputsReady() {
  outputs.querySelectorAll("button").forEach((button) => {
    button.disabled = false;
    button.classList.add("ready");
  });
}

function appendSummary() {
  const article = document.createElement("article");
  article.className = "utterance ai";
  article.innerHTML = `
    <div class="utterance-head">
      <span class="speaker">AI 会后沉淀</span>
      <span class="time">${formatTime(seconds)}</span>
    </div>
    <p>已生成：咨询纪要、待补材料清单、方案摘要、模拟法律意见书格式样例。</p>
    <div class="tags">
      <span>模拟法律意见书不可直接发送</span>
      <span>需律师审核</span>
      <span>法条需核验</span>
    </div>
    <p>右侧“咨询结束后产物”已点亮，点击任一产物可在中间查看内容预览。</p>
  `;
  liveFeed.appendChild(article);
  article.scrollIntoView({ behavior: "smooth", block: "end" });
}

function handleOutputClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const key = target.dataset.output;
  if (!key || target.disabled) return;
  const doc = outputDocs[key];
  if (!doc) return;
  appendOutputDoc(doc);
}

function appendOutputDoc(doc) {
  const article = document.createElement("article");
  article.className = "utterance ai output-doc";
  article.innerHTML = `
    <div class="utterance-head">
      <span class="speaker">${doc.title}</span>
      <span class="time">会后产物</span>
    </div>
    ${doc.body}
  `;
  liveFeed.appendChild(article);
  article.scrollIntoView({ behavior: "smooth", block: "end" });
}

function resetSession() {
  window.clearInterval(timerId);
  window.clearInterval(streamId);
  timerId = null;
  streamId = null;
  index = 0;
  seconds = 0;
  hasEnded = false;
  liveFeed.innerHTML = `
    <div class="empty-state">
      <h2>点击“开始咨询”播放模拟实时转记</h2>
      <p>中间会逐段出现客户和律师对话，右侧同步更新案情要点、追问建议、法律条款和方案草稿。</p>
    </div>
  `;
  sessionStatus.textContent = "未开始";
  timer.textContent = "00:00";
  recordDot.classList.remove("active");
  startBtn.disabled = false;
  endBtn.disabled = true;
  currentFocus.textContent = "等待客户陈述";
  currentFocusDesc.textContent = "开始咨询后，系统会根据转写内容实时更新律师下一步应关注的问题。";
  factGrid.innerHTML = `
    <div><span>入职时间</span><strong>未识别</strong></div>
    <div><span>工资标准</span><strong>未识别</strong></div>
    <div><span>解除方式</span><strong>未识别</strong></div>
    <div><span>现有证据</span><strong>未识别</strong></div>
  `;
  questionList.innerHTML = "<li>等待转写内容后生成追问。</li>";
  lawCards.innerHTML = `
    <div class="law-card muted">
      <strong>尚未触发</strong>
      <p>法条卡为模拟展示，用于确认推送时机和卡片格式，不作为正式法律依据。</p>
    </div>
  `;
  planDraft.innerHTML = "<p>咨询开始后，系统会随着事实补齐持续形成方案草稿。</p>";
  outputs.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
    button.classList.remove("ready");
  });
}

function formatTime(value) {
  const min = String(Math.floor(value / 60)).padStart(2, "0");
  const sec = String(value % 60).padStart(2, "0");
  return `${min}:${sec}`;
}
