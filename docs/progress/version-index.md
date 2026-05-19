# 版本索引

## v0.2-output-templates

日期：2026-05-19

状态：当前版本

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

下一版本建议：

- v0.3-static-prototype：做三栏式静态产品原型。
- v0.4-demo-flow：支持粘贴咨询记录并生成模拟结果。

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
