const steps = [
  {
    role: "client",
    speaker: "客户",
    time: "00:06",
    text: "我现在有点懵，公司上周五突然让我别去了，说我绩效不行。我在那家公司干了三年多了，之前也没人正式跟我说要辞退。",
    tags: ["情绪: 焦虑", "争议: 绩效解除", "工作年限: 三年多"],
    focus: "先稳定事实主线",
    focusDesc: "客户先表达情绪和解除事实，当前不要急着给结论，先把入职时间、解除时间、通知形式问清楚。",
    facts: {
      入职时间: "三年多前，待确认",
      工资标准: "未识别",
      解除方式: "疑似口头通知",
      现有证据: "未识别"
    },
    questions: ["具体入职日期是哪一天？", "公司是口头通知还是发了书面文件？", "通知你不用去的人是谁？", "有没有聊天记录或录音？"],
    laws: [
      {
        title: "可能相关规则：单方解除需有依据和程序",
        body: "为什么推送：客户提到公司以绩效不行为由让其离开。适用前提：需核验解除主体、解除通知、解除理由和程序。",
        status: "模拟卡片 · 具体法条需律师确认"
      }
    ],
    plan: ["当前判断：疑似绩效解除争议。", "先不承诺结果，优先固定解除事实和通知方式。"]
  },
  {
    role: "client",
    speaker: "客户",
    time: "00:24",
    text: "我是 2023 年 3 月入职的，岗位是运营，工资每月 12000，都是银行发。劳动合同我有，社保应该也一直在交。",
    tags: ["入职时间: 2023年3月", "岗位: 运营", "工资: 12000/月", "证据: 劳动合同"],
    focus: "劳动关系和工资标准已初步明确",
    focusDesc: "已识别劳动关系、工资标准和部分证据，下一步应确认解除材料和绩效流程。",
    facts: {
      入职时间: "2023 年 3 月",
      工资标准: "12000 元/月",
      解除方式: "疑似口头通知",
      现有证据: "劳动合同、银行流水、社保待核验"
    },
    questions: ["劳动合同期限到什么时候？", "工资 12000 是税前还是实发？", "社保和个税记录能否下载？", "工资流水能否覆盖近 12 个月？"],
    laws: [
      {
        title: "可能相关规则：劳动关系和工资标准证明",
        body: "为什么推送：客户提到劳动合同、工资和社保。适用前提：需核验合同文本、工资流水、社保/个税记录。",
        status: "模拟卡片 · 证据用途需律师确认"
      }
    ],
    plan: ["事实基础：劳动关系和工资标准较容易先固定。", "证据重点：合同、工资流水、社保/个税记录。"]
  },
  {
    role: "lawyer",
    speaker: "律师",
    time: "00:48",
    text: "公司有没有给过你书面解除通知？有没有让你签过绩效考核结果，或者绩效改进计划？",
    tags: ["律师追问", "解除通知", "绩效材料", "改进计划"],
    focus: "追问解除程序核心材料",
    focusDesc: "律师追问方向正确：绩效解除通常要看制度、考核、沟通、改进和解除通知。",
    questions: ["是否有 HR 微信通知？", "是否被移出工作群或停用账号？", "是否签过任何离职或结算文件？"],
    laws: [
      {
        title: "可能相关规则：绩效解除的证明责任",
        body: "为什么推送：律师正在追问绩效材料。适用前提：需核验公司制度、考核依据、员工知悉和改进过程。",
        status: "模拟卡片 · 不输出确定结论"
      }
    ],
    plan: ["方案更新：以解除程序合法性为主线。", "暂不建议直接评价胜算，先确认绩效和解除材料。"]
  },
  {
    role: "client",
    speaker: "客户",
    time: "01:15",
    text: "没有书面的解除通知，就是主管微信跟我说这个月不用来了。绩效结果也没让我签过，之前开会说过我数据不好，但没有什么改进计划。",
    tags: ["解除通知: 微信", "绩效结果: 未签", "改进计划: 未提供"],
    focus: "证据状态和材料缺口",
    focusDesc: "客户陈述显示解除通知和绩效流程可能存在缺口，但需查看微信原文和公司制度后再判断。",
    facts: {
      入职时间: "2023 年 3 月",
      工资标准: "12000 元/月",
      解除方式: "主管微信通知",
      现有证据: "劳动合同、工资流水、主管微信"
    },
    questions: ["微信原话能否截图，保留上下文？", "主管是否有解除权限？", "公司是否发过邮件或系统通知？", "账号、门禁、工作群是否已停用？"],
    laws: [
      {
        title: "可能相关规则：解除通知与解除事实",
        body: "为什么推送：客户提到微信通知不用来了。适用前提：需判断该微信是否明确解除、发送人权限及是否有后续实际停工安排。",
        status: "模拟卡片 · 需核验聊天记录"
      }
    ],
    plan: ["当前判断：存在违法解除审查空间。", "证据重点：主管微信、绩效材料缺失、账号停用或工作交接记录。", "对外话术：目前只能说“存在风险”，不能说“一定违法”。"]
  },
  {
    role: "client",
    speaker: "客户",
    time: "01:43",
    text: "我还有点想问加班和年假。我平时活动上线经常加班，领导都在群里催，但我们没有加班审批。年假我也没怎么休过。",
    tags: ["诉求: 加班费", "诉求: 年假工资", "证据: 工作群"],
    focus: "区分主线请求和补充请求",
    focusDesc: "加班费和年假工资可以纳入评估，但证据要求不同，不宜和违法解除混成一个判断。",
    questions: ["工作群是否能证明具体加班日期和领导安排？", "是否有打卡、系统提交、活动上线时间记录？", "年假系统能否导出？", "入职前累计工作年限是多少？"],
    laws: [
      {
        title: "可能相关规则：加班费与年假工资",
        body: "为什么推送：客户提出加班和年假诉求。适用前提：加班需证明加班事实和单位安排，年假需确认应休、已休和安排情况。",
        status: "模拟卡片 · 证据要求需律师确认"
      }
    ],
    plan: ["方案更新：违法解除作为主线；加班费、年假工资作为补充请求评估。", "优先补强解除证据，再整理加班和年假证据。"]
  },
  {
    role: "lawyer",
    speaker: "律师",
    time: "02:12",
    text: "目前先不要急着跟公司争论金额。你先把劳动合同、工资流水、主管微信、绩效相关材料、考勤和工作群记录整理给我，我再帮你判断仲裁请求怎么列。",
    tags: ["律师方案", "补材料", "仲裁请求"],
    focus: "形成可执行方案",
    focusDesc: "咨询已进入方案收敛阶段：先补材料，再判断违法解除和其他请求是否一并主张。",
    questions: ["客户能否当天提供材料？", "是否需要先发给客户一份补材料清单？", "是否需要约付费复盘材料？"],
    laws: [],
    plan: ["最终方案草稿：1. 固定劳动关系和工资标准；2. 核验绩效解除依据和程序；3. 补强解除、加班、年假证据；4. 材料复核后决定仲裁请求。", "暂不建议承诺赔偿金额。"]
  },
  {
    role: "client",
    speaker: "客户",
    time: "02:35",
    text: "可以，我今晚把合同和微信截图都发你。那你看完之后能不能帮我出一个书面的东西，我想知道大概怎么处理。",
    tags: ["诉求: 赔偿金", "诉求: 年假工资", "诉求: 加班费"],
    focus: "触发会后产物",
    focusDesc: "客户明确希望获得书面处理方案，可在咨询结束后生成纪要、材料清单、方案摘要和模拟意见书格式样例。",
    questions: ["书面材料是给客户内部理解，还是要对公司发送？", "是否需要律师正式审核后再出具？", "是否按付费法律意见书处理？"],
    laws: [
      {
        title: "可能相关规则：书面意见边界",
        body: "为什么推送：客户要求书面处理方案。适用前提：正式法律意见需律师审核事实、证据和依据，AI 只能生成草稿或格式样例。",
        status: "模拟卡片 · 强制律师确认"
      }
    ],
    plan: ["会后产物：咨询纪要、材料清单、方案摘要。", "法律意见书仅作为格式样例，需律师审核后才能对外发送。"]
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
const feedbackRows = document.querySelectorAll(".feedback-row");

let index = 0;
let seconds = 0;
let timerId = null;
let streamId = null;
let hasEnded = false;
const feedbackState = {
  question: null,
  law: null,
  plan: null
};

const outputDocs = {
  minutes: {
    title: "咨询纪要",
    body: `
      <h3>一、客户主要诉求</h3>
      <p>客户希望判断公司以绩效不达标为由要求其离开是否合法，并希望了解违法解除赔偿金、未休年假工资、加班费是否可以主张。</p>
      <h3>二、关键事实</h3>
      <ul>
        <li>客户于 2023 年 3 月入职某科技公司，岗位为运营，月工资 12000 元。</li>
        <li>公司通过主管微信告知客户不用再到岗，客户称未收到正式书面解除通知。</li>
        <li>客户称未签署绩效改进计划，现有劳动合同、工资流水、主管微信和部分工作群记录。</li>
      </ul>
      <h3>三、待确认事项</h3>
      <p>需进一步确认主管微信原文、解除通知、绩效考核材料、离职结算文件、完整考勤和加班证据。</p>
    `
  },
  materials: {
    title: "材料清单",
    body: `
      <h3>必须补充</h3>
      <ul>
        <li>劳动合同</li>
        <li>工资流水</li>
        <li>主管微信通知原文及上下文截图</li>
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
        <li>先固定劳动关系、工资标准和主管微信解除事实。</li>
        <li>重点核验公司绩效解除依据、考核过程和解除程序。</li>
        <li>补强绩效材料、考勤、工作群和年假证据。</li>
        <li>将违法解除作为主线，加班费和年假工资作为补充请求评估。</li>
        <li>材料复核后决定是否启动劳动仲裁。</li>
      </ol>
      <p class="doc-warning">对外表达建议使用“存在被认定为违法解除的风险”，避免承诺确定结果。</p>
    `
  },
  opinion: {
    title: "模拟法律意见书格式样例",
    body: `
      <p class="doc-warning">模拟格式样例，仅用于向律师确认结构。未经律师审核，不可发送客户。法条与结论均需进一步核验。</p>
      <h3>一、基本事实</h3>
      <p>根据客户陈述，其于 2023 年 3 月入职某科技公司，岗位为运营，月工资 12000 元。公司近期由主管通过微信告知客户不用再到岗，理由涉及绩效不达标。客户称未收到正式书面解除通知，亦未签署绩效改进计划。</p>
      <h3>二、咨询问题</h3>
      <ul>
        <li>公司以绩效不达标为由解除劳动关系是否合法。</li>
        <li>客户能否主张违法解除赔偿金。</li>
        <li>客户能否一并主张未休年假工资和加班费。</li>
      </ul>
      <h3>三、初步分析</h3>
      <p>公司以绩效不达标解除劳动关系，需进一步核验绩效制度、考核结果、改进安排、解除权限及解除程序。若公司无法证明解除依据和程序合法，存在被认定为违法解除的风险。</p>
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
feedbackRows.forEach((row) => row.addEventListener("click", handleFeedbackClick));

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
  streamId = window.setInterval(playNext, 1500);
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
  pulseCard(currentFocus.closest(".assist-card"));

  if (step.facts) {
    factGrid.innerHTML = Object.entries(step.facts)
      .map(([key, value]) => `<div><span>${key}</span><strong>${value}</strong></div>`)
      .join("");
    pulseCard(factGrid.closest(".assist-card"));
  }

  if (step.questions?.length) {
    questionList.innerHTML = step.questions.map((item) => `<li>${item}</li>`).join("");
    pulseCard(questionList.closest(".assist-card"));
  }

  if (step.laws?.length) {
    lawCards.innerHTML = step.laws.map((law) => `
      <div class="law-card">
        <strong>${law.title}</strong>
        <p>${law.body}</p>
        <em>${law.status}</em>
      </div>
    `).join("");
    pulseCard(lawCards.closest(".assist-card"));
  }

  if (step.plan?.length) {
    planDraft.innerHTML = `<ul>${step.plan.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    pulseCard(planDraft.closest(".assist-card"));
  }
}

function pulseCard(card) {
  if (!card) return;
  card.classList.remove("updated");
  window.requestAnimationFrame(() => {
    card.classList.add("updated");
    window.setTimeout(() => card.classList.remove("updated"), 900);
  });
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
  pulseCard(outputs.closest(".assist-card"));
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

function handleFeedbackClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const row = target.closest(".feedback-row");
  if (!row) return;
  const key = row.dataset.feedback;
  if (!key) return;
  feedbackState[key] = target.textContent;
  row.querySelectorAll("button").forEach((button) => button.classList.remove("selected"));
  target.classList.add("selected");
  appendFeedbackNote(key, target.textContent);
}

function appendFeedbackNote(key, value) {
  const labels = {
    question: "追问建议",
    law: "模拟法条卡",
    plan: "方案草稿"
  };
  const article = document.createElement("article");
  article.className = "utterance ai feedback-note";
  article.innerHTML = `
    <div class="utterance-head">
      <span class="speaker">律师反馈记录</span>
      <span class="time">${formatTime(seconds)}</span>
    </div>
    <p>${labels[key]}：${value}</p>
  `;
  liveFeed.appendChild(article);
  article.scrollIntoView({ behavior: "smooth", block: "end" });
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
  Object.keys(feedbackState).forEach((key) => {
    feedbackState[key] = null;
  });
  feedbackRows.forEach((row) => {
    row.querySelectorAll("button").forEach((button) => button.classList.remove("selected"));
  });
}

function formatTime(value) {
  const min = String(Math.floor(value / 60)).padStart(2, "0");
  const sec = String(value % 60).padStart(2, "0");
  return `${min}:${sec}`;
}
