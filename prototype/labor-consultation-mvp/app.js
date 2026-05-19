const sampleText = `客户张某，2023年3月入职某科技公司，岗位为运营，月工资12000元。2026年4月公司以“绩效不达标”为由口头通知解除劳动关系。客户表示没有收到书面解除通知，也没有签过绩效改进计划。公司只支付到4月底工资，未支付经济补偿。客户有劳动合同、工资流水、部分微信沟通记录，但没有完整考勤记录。客户希望了解能否主张违法解除赔偿金、未休年假工资和加班费。`;

const feed = document.querySelector("#feed");
const consultInput = document.querySelector("#consultInput");
const fillSampleBtn = document.querySelector("#fillSampleBtn");
const generateBtn = document.querySelector("#generateBtn");
const confirmBtn = document.querySelector("#confirmBtn");
const newConsultBtn = document.querySelector("#newConsultBtn");

function addMessage(type, title, subtitle, html) {
  const article = document.createElement("article");
  article.className = `message ${type}`;
  article.innerHTML = `
    <div class="message-head">
      <span>${title}</span>
      <em>${subtitle}</em>
    </div>
    ${html}
  `;
  feed.appendChild(article);
  article.scrollIntoView({ behavior: "smooth", block: "end" });
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
    "AI 生成结果",
    "模拟输出 · v0.3 静态原型",
    `
      <h3>自动生成的咨询产物</h3>
      <ul>
        <li>咨询纪要：已识别客户诉求、事实经过、现有材料和待补事项。</li>
        <li>案情结构化：已提取入职时间、工资标准、解除原因和证据缺口。</li>
        <li>待补材料：建议优先补充解除通知、绩效考核材料、工资流水和考勤记录。</li>
        <li>法律意见书草稿：建议使用“存在被认定为违法解除的风险”，避免确定性承诺。</li>
      </ul>
      <p class="risk-note">下一版将接入真实 Prompt 输出，目前用于演示工作流和页面结构。</p>
    `
  );

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

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
