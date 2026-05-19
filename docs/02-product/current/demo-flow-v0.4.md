# v0.4 Demo Flow：劳动争议五步生成流程

更新时间：2026-05-19

## 目标

将静态 MVP 从“模拟摘要”推进到“完整五步产物演示”。

v0.4 仍不接外部模型 API，而是先用一条脱敏样本跑通产品叙事：

```text
原始咨询记录
-> 咨询纪要
-> 案情结构化
-> 待补材料清单
-> 初步法律分析
-> 法律意见书草稿
-> 律师确认
```

## 样本输入

- `data/sanitized/labor-dispute-sample-001.md`

## 五步输出

- `data/outputs/labor-dispute-sample-001-consultation-minutes.md`
- `data/outputs/labor-dispute-sample-001-case-structure.md`
- `data/outputs/labor-dispute-sample-001-material-checklist.md`
- `data/outputs/labor-dispute-sample-001-initial-legal-analysis.md`
- `data/outputs/labor-dispute-sample-001-legal-opinion-draft.md`

## 原型呈现方式

在 `prototype/labor-consultation-mvp/` 中：

- 默认展示张某劳动争议样本。
- 中间处理流展示五个产物卡片。
- 点击“生成咨询产物”时，不再只展示一句模拟摘要，而是按 5 个步骤插入完整产物摘要。
- 右侧交付件增加“初步法律分析”。

## 给律师朋友的验证问题

1. 这 5 个产物的顺序是否符合你真实咨询后整理习惯？
2. 咨询纪要是否能作为付费咨询留痕？
3. 案情结构化字段是否够用？
4. 待补材料清单是否可以直接发给客户？
5. 初步法律分析有哪些危险表达？
6. 法律意见书草稿是否有修改后交付的价值？

