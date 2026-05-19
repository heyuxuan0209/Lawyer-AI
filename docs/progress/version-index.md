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

状态：当前版本

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

下一版本建议：

- v0.5-feedback-loop：加入律师反馈标注：可用 / 需修改 / 有风险。
- v0.6-real-generation：接入真实模型调用或本地生成脚本。

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
