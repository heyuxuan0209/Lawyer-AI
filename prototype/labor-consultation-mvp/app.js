const sampleText = `客户张某，2023年3月入职某科技公司，岗位为运营，月工资12000元。2026年4月公司以“绩效不达标”为由口头通知解除劳动关系。客户表示没有收到书面解除通知，也没有签过绩效改进计划。公司只支付到4月底工资，未支付经济补偿。客户有劳动合同、工资流水、部分微信沟通记录，但没有完整考勤记录。客户希望了解能否主张违法解除赔偿金、未休年假工资和加班费。`;

const flowOutputs = [
  {
    type: "ai",
    title: "Step 1 咨询纪要",
    subtitle: "基于 consultation-minutes.prompt",
    html: `
      <h3>客户主要诉求</h3>
      <ul>
        <li>判断公司以“绩效不达标”为由解除劳动关系是否合法。</li>
        <li>判断是否可以主张违法解除赔偿金。</li>
        <li>判断是否可以一并主张未休年假工资和加班费。</li>
      </ul>
      <h3>需律师复核</h3>
      <p>绩效解除是否合法不能直接下结论，需结合公司制度、考核依据和解除程序核验。</p>
    `
  },
  {
    type: "ai",
    title: "Step 2 案情结构化",
    subtitle: "基于 case-structure.prompt",
    html: `
      <div class="mini-grid">
        <div><label>劳动者</label><strong>张某</strong></div>
        <div><label>用人单位</label><strong>某科技公司</strong></div>
        <div><label>入职时间</label><strong>2023 年 3 月</strong></div>
        <div><label>解除时间</label><strong>2026 年 4 月</strong></div>
      </div>
      <p class="risk-note">争议焦点：绩效解除依据是否充分、解除程序是否合法、加班和年假证据是否足够。</p>
    `
  },
  {
    type: "ai",
    title: "Step 3 待补材料清单",
    subtitle: "基于 material-checklist.prompt",
    html: `
      <h3>必须补充</h3>
      <ul>
        <li>劳动合同、工资流水、解除通知或解除沟通记录。</li>
        <li>绩效考核制度、考核结果、绩效沟通、改进计划。</li>
        <li>关键微信、邮件、工作软件沟通记录。</li>
      </ul>
      <h3>客户发送说明</h3>
      <p>若部分材料暂时无法提供，可以先说明原因，或提供替代材料。涉及隐私内容可以先做适当遮盖。</p>
    `
  },
  {
    type: "ai",
    title: "Step 4 初步法律分析",
    subtitle: "基于 initial-legal-analysis.prompt",
    html: `
      <h3>初步判断</h3>
      <p>如公司仅作出口头解除，且无法证明解除依据和程序合法，存在被认定为违法解除的风险。</p>
      <h3>风险</h3>
      <ul>
        <li>加班费主张证据要求较高，仅有口头陈述不足。</li>
        <li>若公司能提供完整绩效制度、考核记录、改进过程和解除程序，判断可能发生变化。</li>
      </ul>
    `
  },
  {
    type: "ai",
    title: "Step 5 法律意见书草稿",
    subtitle: "基于 legal-opinion-draft.prompt",
    html: `
      <h3>处理建议</h3>
      <ul>
        <li>优先整理劳动合同、工资流水、解除沟通记录、绩效相关材料。</li>
        <li>材料补齐后，由律师进一步判断违法解除主张的可行性。</li>
        <li>协商不成时，可考虑准备劳动仲裁申请材料。</li>
      </ul>
      <p class="risk-note">本文件为 AI 辅助生成草稿，需律师修改、核验和确认，不构成未经律师审核的正式法律意见。</p>
    `
  }
];

const feed = document.querySelector("#feed");
const consultInput = document.querySelector("#consultInput");
const fillSampleBtn = document.querySelector("#fillSampleBtn");
const generateBtn = document.querySelector("#generateBtn");
const confirmBtn = document.querySelector("#confirmBtn");
const newConsultBtn = document.querySelector("#newConsultBtn");
const feedbackLog = document.querySelector("#feedbackLog");
const feedbackCounts = {
  "可用": 0,
  "需修改": 0,
  "有风险": 0
};

function addMessage(type, title, subtitle, html) {
  const article = document.createElement("article");
  article.className = `message ${type}`;
  if (type === "ai" && title.startsWith("Step")) {
    article.dataset.feedbackCard = title.replace(/^Step \d+\s*/, "");
  }
  article.innerHTML = `
    <div class="message-head">
      <span>${title}</span>
      <em>${subtitle}</em>
    </div>
    ${html}
    ${type === "ai" && title.startsWith("Step") ? renderFeedbackBar() : ""}
  `;
  feed.appendChild(article);
  article.scrollIntoView({ behavior: "smooth", block: "end" });
}

function renderFeedbackBar() {
  return `
    <div class="feedback-bar">
      <span>律师反馈</span>
      <button data-feedback="可用">可用</button>
      <button data-feedback="需修改">需修改</button>
      <button data-feedback="有风险">有风险</button>
    </div>
  `;
}

fillSampleBtn.addEventListener("click", () => {
  consultInput.value = sampleText;
  consultInput.focus();
});

generateBtn.addEventListener("click", () => {
  const text = consultInput.value.trim();
  if (!text) {
    consultInput.value = sampleText;
    return;
  }

  addMessage(
    "raw",
    "新增咨询记录",
    "律师粘贴输入",
    `<p>${escapeHtml(text)}</p>`
  );

  addMessage(
    "ai",
    "五步生成流程启动",
    "v0.4 demo flow",
    `
      <h3>将按 5 个 Prompt 生成完整咨询产物</h3>
      <ul>
        <li>Step 1：咨询纪要</li>
        <li>Step 2：案情结构化</li>
        <li>Step 3：待补材料清单</li>
        <li>Step 4：初步法律分析</li>
        <li>Step 5：法律意见书草稿</li>
      </ul>
      <p class="risk-note">当前使用脱敏样本的完整 demo 输出，用于验证产物顺序和律师反馈。</p>
    `
  );

  flowOutputs.forEach((item, index) => {
    window.setTimeout(() => addMessage(item.type, item.title, item.subtitle, item.html), 180 * (index + 1));
  });

  consultInput.value = "";
});

confirmBtn.addEventListener("click", () => {
  confirmBtn.textContent = "已确认";
  confirmBtn.disabled = true;
  addMessage(
    "lawyer",
    "律师确认",
    "状态更新",
    `<p>律师已确认当前法律意见书草稿可作为内部底稿，需补齐材料后再形成对外版本。</p>`
  );
});

newConsultBtn.addEventListener("click", () => {
  consultInput.value = "";
  consultInput.placeholder = "新建咨询：请粘贴劳动争议咨询记录...";
  consultInput.focus();
});

document.querySelectorAll(".thread-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".thread-card").forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const feedback = target.dataset.feedback;
  if (!feedback) return;

  const card = target.closest("[data-feedback-card]");
  const cardName = card?.dataset.feedbackCard || "未命名产物";
  const bar = target.closest(".feedback-bar");
  bar?.querySelectorAll("button").forEach((button) => button.classList.remove("selected"));
  target.classList.add("selected");

  if (feedbackCounts[feedback] !== undefined) {
    feedbackCounts[feedback] += 1;
  }
  updateFeedbackSummary(cardName, feedback);
});

function updateFeedbackSummary(cardName, feedback) {
  document.querySelector("#usableCount").textContent = String(feedbackCounts["可用"]);
  document.querySelector("#reviseCount").textContent = String(feedbackCounts["需修改"]);
  document.querySelector("#riskCount").textContent = String(feedbackCounts["有风险"]);
  feedbackLog.textContent = `最近反馈：${cardName} -> ${feedback}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
