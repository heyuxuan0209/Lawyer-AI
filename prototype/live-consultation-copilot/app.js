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
const nextBtn = document.querySelector("#nextBtn");
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

startBtn.addEventListener("click", startSession);
nextBtn.addEventListener("click", playNext);
endBtn.addEventListener("click", endSession);
resetBtn.addEventListener("click", resetSession);

function startSession() {
  liveFeed.innerHTML = "";
  index = 0;
  seconds = 0;
  sessionStatus.textContent = "咨询中 · 模拟转记";
  recordDot.classList.add("active");
  startBtn.disabled = true;
  nextBtn.disabled = false;
  endBtn.disabled = false;
  timer.textContent = "00:00";
  timerId = window.setInterval(() => {
    seconds += 1;
    timer.textContent = formatTime(seconds);
  }, 1000);
  playNext();
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
  if (index >= steps.length) {
    nextBtn.textContent = "等待结束";
    nextBtn.disabled = true;
  }
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
  window.clearInterval(timerId);
  timerId = null;
  sessionStatus.textContent = "已结束 · 产物已生成";
  recordDot.classList.remove("active");
  startBtn.disabled = false;
  nextBtn.disabled = true;
  endBtn.disabled = true;
  nextBtn.textContent = "下一段";
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
  `;
  liveFeed.appendChild(article);
  article.scrollIntoView({ behavior: "smooth", block: "end" });
}

function resetSession() {
  window.clearInterval(timerId);
  timerId = null;
  index = 0;
  seconds = 0;
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
  nextBtn.disabled = true;
  nextBtn.textContent = "下一段";
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
