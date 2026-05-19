# Lawyer-AI

面向律师客户咨询场景的 AI 产品探索仓库。

当前主线：先做 **劳动争议付费咨询助手 MVP**，验证 AI 是否能把混乱的客户咨询记录整理成律师可修改、可确认、可交付的工作底稿。

## 当前产品判断

第一阶段不做面向客户的自动法律问答机器人，也不做完整办案系统。

当前产品定位：

```text
咨询记录
-> 案情结构化
-> 初步法律分析
-> 待补材料清单
-> 服务方案 / 法律意见书草稿
-> 律师确认
```

MVP 先聚焦：

- 业务场景：劳动争议
- 使用时点：付费咨询后整理，暂不做实时语音
- 核心用户：律师
- 主要价值：记录留痕、减少遗漏、提升咨询后交付效率

## 目录结构

```text
docs/00-context/      背景、历史讨论、竞品借鉴
docs/01-research/     律师访谈、工作流、样本咨询
docs/02-product/      PRD、信息架构、用户流程、产品 backlog
docs/03-design/       线框图、界面参考
docs/04-prompts/      Prompt、输出模板、场景 playbook
docs/05-evaluation/   测试样例、律师反馈、评估标准
docs/progress/        版本索引、决策日志、变更记录
prototype/            后续产品原型代码
data/                 原始、脱敏、输出数据
scripts/              数据处理、评估、生成脚本
```

## 关键文档

- [产品总方案](docs/02-product/current/product-plan-consultation-assistant.md)
- [劳动争议 MVP PRD](docs/02-product/current/mvp-prd-labor-dispute-consultation-assistant.md)
- [版本索引](docs/progress/version-index.md)
- [决策日志](docs/progress/decision-log.md)
- [变更记录](docs/progress/changelog.md)

## Git 约定

建议按一个清晰产品动作一次提交：

```text
docs: add labor dispute MVP PRD
docs: update consultation workflow assumptions
prompt: add labor dispute consultation minutes template
proto: add static three-column workspace
proto: support paste consultation text
```

真实咨询材料必须先脱敏，再进入 `data/sanitized/` 或测试样例。

