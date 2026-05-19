# Changelog

## 2026-05-19

### Added in v0.9-lawyer-feedback-demo

- 实时谈案页面新增追问建议、模拟法条卡、方案草稿的律师反馈按钮。
- 右侧辅助卡片更新时增加高亮反馈。
- 页面内新增“给律师看的验证问题”。

### Changed in v0.9-lawyer-feedback-demo

- 修正材料清单里的重复项。
- 原型 README 明确当前版本用于验证实时辅助价值，而非验证正式文书生成。

### Added in v0.8-polish-for-lawyer-demo

- 新增律师演示验证清单。
- 会后产物区增加说明，明确结束咨询后点击产物按钮查看内容。

### Changed in v0.8-polish-for-lawyer-demo

- 优化实时咨询脚本，让客户表达更接近真实咨询场景。
- 法条卡文案改为更克制的“可能相关规则”表达。
- 方案草稿随对话推进更明显。

### Added in v0.7-live-static-prototype

- 新增实时谈案 Copilot 静态原型。
- 支持劳动争议客户 / 律师分角色模拟转写。
- 右侧实时更新案情要点、追问建议、模拟法条卡和方案草稿。
- 咨询结束后生成咨询纪要、材料清单、方案摘要和模拟法律意见书格式样例。
- 新增 `live-static-prototype-v0.7.md`。

### Changed in v0.7-live-static-prototype

- 更新版本索引，将当前版本推进到 `v0.7-live-static-prototype`。
- 法律意见书明确定位为模拟格式样例，未经律师审核不可发送客户。
- 整理原型入口，`prototype/index.html` 成为唯一演示页面，旧版本移动到 `prototype/archive/`。

### Added in v0.6-live-workspace-plan

- 新增产品方向修正文档：`pivot-live-consultation-copilot.md`。
- 新增实时谈案 Copilot PRD：`live-consultation-copilot-prd-v0.6.md`。
- 更新决策日志，记录从咨询后整理转向实时谈案 Copilot 的原因。

### Changed in v0.6-live-workspace-plan

- 旧版咨询后整理能力降级为咨询结束后的沉淀模块。
- 新主线调整为：语音转记、实时案情要点、追问建议、法条推送、方案草稿。

### Added in v0.5-feedback-loop

- 原型每个 AI 产物增加律师反馈按钮：可用 / 需修改 / 有风险。
- 右侧增加反馈汇总和最近反馈记录。
- 新增 `feedback-loop-v0.5.md`，记录反馈闭环设计。

### Changed in v0.5-feedback-loop

- 更新版本索引，将当前版本推进到 `v0.5-feedback-loop`。
- 更新原型 README，补充律师反馈验证问题。

### Added in v0.4-demo-flow

- 新增脱敏劳动争议咨询样本。
- 新增 5 个 demo 输出：咨询纪要、案情结构化、待补材料清单、初步法律分析、法律意见书草稿。
- 新增 `demo-flow-v0.4.md`，记录五步生成流程。
- 原型按钮改为按 5 个 Prompt 步骤展示 demo 输出。

### Changed in v0.4-demo-flow

- 更新 `.gitignore`，允许精选 demo 输出进入版本管理。
- 更新版本索引，将当前版本推进到 `v0.4-demo-flow`。

### Added in v0.3-static-prototype

- 新增劳动争议咨询助手静态 MVP。
- 新增三栏式工作台页面：咨询线程、咨询处理流、案情结构化和交付件。
- 新增内置劳动争议示例咨询。
- 新增粘贴咨询文本并生成模拟输出的前端交互。

### Changed in v0.3-static-prototype

- 更新版本索引，将当前版本推进到 `v0.3-static-prototype`。

### Added in v0.2-output-templates

- 新增劳动争议咨询纪要 Prompt。
- 新增劳动争议案情结构化 Prompt。
- 新增劳动争议待补材料清单 Prompt。
- 新增劳动争议初步法律分析 Prompt。
- 新增劳动争议法律意见书草稿 Prompt。
- 新增 MVP 输出模板汇总。

### Changed in v0.2-output-templates

- 更新版本索引，将当前版本推进到 `v0.2-output-templates`。
- 更新劳动争议 Prompt 目录说明。

### Added

- 初始化 Lawyer-AI 产品仓库结构。
- 新增产品总方案。
- 新增劳动争议咨询助手 MVP PRD。
- 新增版本索引、决策日志和变更记录。

### Current Focus

- 实时谈案 Copilot。
- 语音转写、案情要点、追问建议、模拟法条卡、方案草稿。
- 先用模拟流验证律师是否认可现场辅助价值，再接入真实转写。
