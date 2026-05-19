# 版本索引

## v0.2-output-templates

日期：2026-05-19

状态：已完成

目标：

- 补齐劳动争议 MVP 的核心 Prompt。
- 明确咨询纪要、案情结构化、材料清单、初步法律分析、法律意见书草稿的输出格式。
- 为下一步三栏式静态原型提供可直接展示的内容结构。

包含文档：

- `docs/04-prompts/labor-dispute/consultation-minutes.prompt.md`
- `docs/04-prompts/labor-dispute/case-structure.prompt.md`
- `docs/04-prompts/labor-dispute/material-checklist.prompt.md`
- `docs/04-prompts/labor-dispute/initial-legal-analysis.prompt.md`
- `docs/04-prompts/labor-dispute/legal-opinion-draft.prompt.md`
- `docs/04-prompts/labor-dispute/output-templates.md`

核心结论：

```text
MVP 的核心不是泛法律问答，而是稳定生成 5 类律师可复核产物。
每类产物都必须保留不确定信息和律师确认边界。
```

下一版本建议：已进入 v0.3-static-prototype。

## v0.3-static-prototype

日期：2026-05-19

状态：已完成

目标：

- 做一个无需安装依赖、可直接打开的三栏式静态 MVP。
- 用劳动争议示例咨询展示“原始记录 -> 咨询纪要 -> 案情结构化 -> 法律意见书草稿 -> 律师确认”的工作流。
- 作为给律师朋友演示和收集反馈的敲门砖。

包含文件：

- `prototype/labor-consultation-mvp/index.html`
- `prototype/labor-consultation-mvp/styles.css`
- `prototype/labor-consultation-mvp/app.js`
- `prototype/labor-consultation-mvp/README.md`

核心结论：

```text
MVP 第一版优先验证三栏工作台和输出结构是否符合律师咨询后整理习惯。
当前原型使用模拟生成结果，下一版再接入真实 Prompt/模型调用。
```

下一版本建议：已进入 v0.4-demo-flow。

## v0.4-demo-flow

日期：2026-05-19

状态：已完成

目标：

- 用一条脱敏劳动争议咨询样本跑通五步产物链路。
- 将咨询样本、五类输出和静态原型串起来。
- 让律师朋友能直接评价完整产物，而不是只看界面。

包含文件：

- `data/sanitized/labor-dispute-sample-001.md`
- `data/outputs/labor-dispute-sample-001-consultation-minutes.md`
- `data/outputs/labor-dispute-sample-001-case-structure.md`
- `data/outputs/labor-dispute-sample-001-material-checklist.md`
- `data/outputs/labor-dispute-sample-001-initial-legal-analysis.md`
- `data/outputs/labor-dispute-sample-001-legal-opinion-draft.md`
- `docs/02-product/current/demo-flow-v0.4.md`

核心结论：

```text
演示重点从“页面长什么样”升级为“咨询记录能否稳定转成五类律师可复核产物”。
v0.4 仍不接外部 API，先用固定脱敏样本验证产物链路和律师反馈。
```

下一版本建议：已进入 v0.5-feedback-loop。

## v0.5-feedback-loop

日期：2026-05-19

状态：已完成

目标：

- 给每个 AI 产物增加律师反馈按钮。
- 用“可用 / 需修改 / 有风险”收集结构化反馈。
- 在右侧增加反馈汇总，方便演示时快速看到评价结果。

包含文件：

- `docs/02-product/current/feedback-loop-v0.5.md`
- `prototype/labor-consultation-mvp/index.html`
- `prototype/labor-consultation-mvp/app.js`
- `prototype/labor-consultation-mvp/styles.css`

核心结论：

```text
下一轮和律师朋友沟通时，不只问产品有没有用，而是让对方逐个产物标注“可用 / 需修改 / 有风险”。
这能直接反推 Prompt、字段和风险边界的迭代优先级。
```

下一版本建议：已进入 v0.6-live-workspace-plan。

## v0.6-live-workspace-plan

日期：2026-05-19

状态：待用户确认

目标：

- 修正产品主线，从“咨询后整理”转为“实时谈案 Copilot”。
- 明确语音转记、实时追问、法条推送、方案草稿的 MVP 规划。
- 暂不开发新原型，先等待用户确认整体规划。

包含文件：

- `docs/02-product/current/pivot-live-consultation-copilot.md`
- `docs/02-product/current/live-consultation-copilot-prd-v0.6.md`
- `docs/progress/decision-log.md`

核心结论：

```text
律师真正想要的是咨询过程中的实时辅助：语音转记、抓重点、推送法条、形成方案。
旧版咨询后整理能力保留，但降级为会后沉淀模块。
```

下一版本建议：

- v0.7-live-static-prototype：开发实时转记 + 右侧辅助面板的静态演示原型。

## v0.1-docs-scaffold

日期：2026-05-19

状态：已完成

目标：

- 建立 Lawyer-AI 产品仓库结构。
- 沉淀客户咨询助手产品方向。
- 明确第一个 MVP 聚焦劳动争议付费咨询后整理。

包含文档：

- `README.md`
- `docs/02-product/current/product-plan-consultation-assistant.md`
- `docs/02-product/current/mvp-prd-labor-dispute-consultation-assistant.md`
- `docs/progress/decision-log.md`
- `docs/progress/changelog.md`

核心结论：

```text
先做劳动争议付费咨询助手 MVP。
不是替律师直接回答客户，而是帮律师做咨询后整理、案情结构化、材料清单、初步法律分析和意见书草稿。
```

下一版本建议：已进入 v0.2-output-templates。
