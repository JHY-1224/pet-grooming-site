---
name: xuanti-skill
description: Generate Chinese AI-domain content topic ideas and headlines, especially when the user asks for 10 titles, AI领域选题, article/video/social media headline ideas, different headline styles, content angles, or topic brainstorming around artificial intelligence, large models, agents, AI tools, AI products, AI business, AI education, AI research, and AI industry trends.
---

# 选题 Skill

## Core Workflow

Use this skill to generate practical AI-domain topic titles for Chinese content.

1. Infer the content context from the user request: platform, audience, AI subfield, tone, and intended format.
2. If the user gives little context, default to: Chinese language, broad AI field, mixed audience of tech-interested readers and creators, 10 titles, 10 clearly different styles.
3. Produce titles that are immediately usable, specific, and varied. Avoid vague titles such as "AI的未来" unless they include a sharp angle.
4. Add a short style label before each title so the user can see the editorial difference.
5. Keep the output compact unless the user asks for analysis, outlines, or scoring.

## Default Style Set

When the user asks for "十个标题" or "不同风格", generate one title for each style:

1. 新闻快讯: emphasize timeliness, new releases, policy, market moves, or company action.
2. 深度分析: emphasize cause, structure, tradeoffs, and second-order effects.
3. 争议讨论: frame a real debate without clickbait or unsupported claims.
4. 实用教程: promise a concrete method, workflow, checklist, or tool use case.
5. 商业洞察: focus on monetization, product strategy, adoption, cost, or competition.
6. 科普解释: make a technical AI concept accessible and curiosity-driven.
7. 趋势预测: identify near-future shifts with a clear time horizon.
8. 人物/团队: focus on builders, researchers, founders, creators, or operators.
9. 反常识: challenge a common assumption with a defensible angle.
10. 场景案例: anchor the title in a real industry, workflow, or user scenario.

## Quality Rules

- Prefer concrete nouns, visible stakes, and a clear reader benefit.
- Make each title distinct in rhythm and angle; do not only swap adjectives.
- Keep titles natural for Chinese readers. Avoid stiff translationese.
- Avoid fabricated facts, unverifiable statistics, and named company claims unless the user provides them.
- For fast-changing AI news, browse or verify current facts if the title depends on recency.
- If the user specifies a platform, adapt the title shape:
  - 公众号/长文: more analytical and complete.
  - 小红书/短视频: shorter, curiosity-forward, practical.
  - B站/课程: explanatory, structured, and promise-driven.
  - 企业内容/报告: restrained, credible, and business-focused.

## Output Format

Default output:

```markdown
1. 【新闻快讯】标题
2. 【深度分析】标题
3. 【争议讨论】标题
...
```

If useful, add one final line with "可优先打磨" and choose the 1-2 strongest titles.
