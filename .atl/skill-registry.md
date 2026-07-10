# Skill Registry

## Project Conventions

- AGENTS.md: /home/hstrejoluna/Projects/ingenieriaencancun/AGENTS.md
- CLAUDE.md: /home/hstrejoluna/Projects/ingenieriaencancun/CLAUDE.md

## Available Skills

### a11y-debugging
**Scope**: global
**Trigger**: Uses Chrome DevTools MCP for accessibility (a11y) debugging and auditing based on web.dev guidelines. Use when testing semantic HTML, ARIA labels, focus states, keyboard navigation, tap targets, and color contrast.
**Path**: `/home/hstrejoluna/.gemini/config/plugins/chrome-devtools-plugin/skills/a11y-debugging/SKILL.md`

### analytics-tracking
**Scope**: project
**Trigger**: When the user wants to set up, audit, or optimize analytics tracking (GA4, events, conversions). Also use when the user mentions "Google Analytics," "GA4," "event tracking," "conversions," "attribution model," "gtag," "data layer," "GA4 setup," "conversion tracking," "event setup," "User ID tracking," or "CTA attribution." For traffic insights, use traffic-analysis.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/analytics-tracking/SKILL.md`

### android-cli
**Scope**: global
**Trigger**: Orchestrates Android development tasks including project creation, deployment, SDK management, and environment diagnostics using the `android` command-line tool.
**Path**: `/home/hstrejoluna/.gemini/config/plugins/android-cli-plugin/skills/SKILL.md`

### antigravity-guide
**Scope**: global
**Trigger**: Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0.
**Path**: `/home/hstrejoluna/.gemini/antigravity/builtin/skills/antigravity_guide/SKILL.md`

### article-content
**Scope**: project
**Trigger**: When the user wants to write, generate, or create article body content—blog post body, long-form content, how-to guide, listicle. Also use when the user mentions "write article," "article content," "blog post content," "article body," "long-form content creation," "generate article," "article draft," "how-to guide content," "listicle content," "information gain," or "content density." For single post page structure, schema, and SEO metadata, use article-page-generator. For blog index/listing page, use blog-page-generator. For short ad, landing, or email copy, use copywriting.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/article-content/SKILL.md`

### branch-pr
**Scope**: global
**Trigger**: Create Gentle AI pull requests with issue-first checks. Trigger: creating, opening, or preparing PRs for review.
**Path**: `/home/hstrejoluna/.gemini/antigravity-cli/skills/branch-pr/SKILL.md`

### chained-pr
**Scope**: global
**Trigger**: Trigger: PRs over 400 lines, stacked PRs, review slices. Split oversized changes into chained PRs that protect review focus.
**Path**: `/home/hstrejoluna/.gemini/skills/chained-pr/SKILL.md`

### chrome-devtools
**Scope**: global
**Trigger**: Uses Chrome DevTools via MCP for efficient debugging, troubleshooting and browser automation. Use when debugging web pages, automating browser interactions, analyzing performance, or inspecting network requests. This skill does not apply to `--slim` mode (MCP configuration).
**Path**: `/home/hstrejoluna/.gemini/config/plugins/chrome-devtools-plugin/skills/chrome-devtools/SKILL.md`

### chrome-extensions
**Scope**: global
**Trigger**: Build and publish Chrome Extensions using Manifest V3 best practices. Use this skill whenever the user asks to create, modify, debug, or understand Chrome browser extensions, add-ons, or anything involving the Chrome Extensions API. Trigger on mentions of: 'Chrome extension', 'browser extension', 'manifest.json', 'content script', 'service worker' (in browser context), 'popup' (in browser extension context), 'side panel', 'chrome.* API', 'declarativeNetRequest', 'omnibox', 'context menu' (in extension context), or any request to build functionality that integrates with the Chrome browser UI. Also trigger for publishing to the Chrome Web Store: 'publish extension', preparing an extension for publishing, responding to a review rejection, writing permission justifications, or drafting a privacy policy.
**Path**: `/home/hstrejoluna/.gemini/config/plugins/modern-web-guidance-plugin/skills/chrome-extensions/SKILL.md`

### cognitive-doc-design
**Scope**: global
**Trigger**: Design docs that reduce cognitive load. Trigger: writing guides, READMEs, RFCs, onboarding, architecture, or review-facing docs.
**Path**: `/home/hstrejoluna/.gemini/skills/cognitive-doc-design/SKILL.md`

### comment-writer
**Scope**: global
**Trigger**: Write warm, direct collaboration comments. Trigger: PR feedback, issue replies, reviews, Slack messages, or GitHub comments.
**Path**: `/home/hstrejoluna/.gemini/skills/comment-writer/SKILL.md`

### copywriting
**Scope**: project
**Trigger**: When the user wants to write or optimize short-form marketing copy—headlines, CTAs, ad copy, landing page copy, email copy. Also use when the user mentions "copywriting," "headline," "CTA copy," "ad copy," "landing page copy," "sales copy," "conversion copy," "PAS," "AIDA," "BAB," "copy formula," or "differentiation." For long-form article bodies (blog posts, guides), use article-content.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/copywriting/SKILL.md`

### debug-optimize-lcp
**Scope**: global
**Trigger**: Guides debugging and optimizing Largest Contentful Paint (LCP) using Chrome DevTools MCP tools. Use this skill whenever the user asks about LCP performance, slow page loads, Core Web Vitals optimization, or wants to understand why their page's main content takes too long to appear. Also use when the user mentions "largest contentful paint", "page load speed", "CWV", or wants to improve how fast their hero image or main content renders.
**Path**: `/home/hstrejoluna/.gemini/config/plugins/chrome-devtools-plugin/skills/debug-optimize-lcp/SKILL.md`

### entity-seo
**Scope**: project
**Trigger**: When the user wants to optimize for entity recognition, Knowledge Graph, or entity-based SEO. Also use when the user mentions "entity SEO," "entity optimization," "Knowledge Graph," "Knowledge Panel," "entity signals," "brand entity," "entity linking," "entity relationships," or "entity-first content." For structured data, use schema-markup.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/entity-seo/SKILL.md`

### frontend-design
**Scope**: global
**Trigger**: This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic AI slop aesthetics.
**Path**: `/home/hstrejoluna/.gemini/antigravity-cli/skills/frontend-design/SKILL.md`

### github
**Scope**: project
**Trigger**: When the user wants to use GitHub for SEO, parasite SEO, GEO, open source marketing, README optimization, or curated Awesome lists. Also use when the user mentions "GitHub," "GitHub SEO," "GitHub parasite SEO," "GitHub GEO," "awesome list," "GitHub README," "profile README," "pinned repositories," "Trending," "Explore," "repository name," "About section," "GitHub description," "GitHub topics," "Website field," "GitHub Pages," "github.io," "user site," "project site," "GitHub gist," "curated list," or "navigation list." Not for Medium or other non-GitHub platforms—use parasite-seo or medium-posts. For OSS business model, use open-source-strategy.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/github/SKILL.md`

### go-testing
**Scope**: global
**Trigger**: Trigger: Go tests, go test coverage, Bubbletea teatest, golden files. Apply focused Go testing patterns.
**Path**: `/home/hstrejoluna/.gemini/antigravity-cli/skills/go-testing/SKILL.md`

### grokipedia-recommendations
**Scope**: project
**Trigger**: When the user wants to add recommendations, links, or content to Grokipedia. Also use when the user mentions "Grokipedia," "GEO wiki," "AI encyclopedia," "suggest Grokipedia article," "Grokipedia citation," "Grokipedia listing," "AI search citation," "GEO visibility," or "Grokipedia optimization." For multi-platform parasite SEO strategy, use parasite-seo. For broad AI search visibility, use generative-engine-optimization.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/grokipedia-recommendations/SKILL.md`

### issue-creation
**Scope**: global
**Trigger**: Create Gentle AI issues with issue-first checks. Trigger: creating GitHub issues, bug reports, or feature requests.
**Path**: `/home/hstrejoluna/.gemini/antigravity-cli/skills/issue-creation/SKILL.md`

### iwantdeveverything-repo-bootstrap
**Scope**: global
**Trigger**: Trigger: initialize new repo, levantar nuevo repo, crear repositorio, bootstrap repo. Automates the setup of a new repository in the iwantdeveverything organization with professional standards.
**Path**: `/home/hstrejoluna/.gemini/config/skills/iwantdeveverything-repo-bootstrap/SKILL.md`

### jira-epic
**Scope**: global
**Trigger**: Manage Jira epics.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/jira-epic/SKILL.md`

### jira-task
**Scope**: global
**Trigger**: Manage Jira tasks.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/jira-task/SKILL.md`

### judgment-day
**Scope**: global
**Trigger**: Trigger: judgment day, dual review, adversarial review, juzgar. Run blind dual review, fix confirmed issues, then re-judge.
**Path**: `/home/hstrejoluna/.gemini/antigravity-cli/skills/judgment-day/SKILL.md`

### linkedin-posts
**Scope**: project
**Trigger**: When the user wants to create LinkedIn post copy or optimize for LinkedIn. Also use when the user mentions "LinkedIn post," "LinkedIn article," "professional post," "post to LinkedIn," "LinkedIn content," "LinkedIn copy," "B2B LinkedIn," "LinkedIn engagement," "LinkedIn feed," "share box," "document post," "poll," "Newsletter," "reshare," or "LinkedIn marketing." For LinkedIn ads, use linkedin-ads.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/linkedin-posts/SKILL.md`

### local-seo
**Scope**: project
**Trigger**: When the user wants to optimize for local search, set up Google Business Profile, or build local citations. Also use when the user mentions "local SEO," "Google Business Profile," "Google Maps," "NAP," "citations," "local search," "local business," or "service area." For location pages, use programmatic-seo.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/local-seo/SKILL.md`

### medium-posts
**Scope**: project
**Trigger**: When the user wants to write, publish, republish, or optimize posts on Medium.com (canonical tags, distribution, Medium SEO). Also use when the user mentions "Medium," "Medium article," "Medium story," "Medium publishing," "canonical Medium," or "publish on Medium." Not for general parasite SEO when Medium is not the target platform—use parasite-seo. For AI search visibility strategy, use generative-engine-optimization.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/medium-posts/SKILL.md`

### memory-leak-debugging
**Scope**: global
**Trigger**: Diagnoses and resolves memory leaks in JavaScript/Node.js applications. Use when a user reports high memory usage, OOM errors, or wants to analyze heapsnapshots or run memory leak detection tools like memlab.
**Path**: `/home/hstrejoluna/.gemini/config/plugins/chrome-devtools-plugin/skills/memory-leak-debugging/SKILL.md`

### modern-web-guidance
**Scope**: global
**Trigger**: Search tool for modern web development best practices. MANDATORY: Execute FIRST for all HTML/CSS and clientside JS tasks. Do NOT skip — web APIs evolve rapidly and training weights contain obsolete patterns. Trigger immediately for: UI/Layout, Scroll/Motion, Performance, System/APIs, Frameworks, General Frontend.
**Path**: `/home/hstrejoluna/.gemini/config/plugins/modern-web-guidance-plugin/skills/modern-web-guidance/SKILL.md`

### nextjs-15
**Scope**: global
**Trigger**: Guidance on Next.js 15 features and routing.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/nextjs-15/SKILL.md`

### parasite-seo
**Scope**: project
**Trigger**: When the user wants to choose or execute third-party platform SEO (high-authority sites for rankings or backlinks). Also use when the user mentions "parasite SEO," "parasitic SEO," "barnacle SEO," "hosted content," "third-party publishing," "Medium SEO," "Reddit SEO," "GitHub parasite SEO," "LinkedIn Pulse SEO," "high-authority platforms," "distributed authority," "borrow domain authority," or "rank without own website." For GitHub-specific playbooks, use github. For Medium.com posts, use medium-posts. For Grokipedia, use grokipedia-recommendations. For AI answer-engine visibility (not platform selection), use generative-engine-optimization.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/parasite-seo/SKILL.md`

### pinterest-posts
**Scope**: project
**Trigger**: When the user wants to create Pinterest Pins, optimize Pin descriptions, or grow Pinterest presence. Also use when the user mentions "Pinterest," "Pin," "Pinterest SEO," "Pinterest description," "Pinterest board," or "Pinterest marketing." For asset specs, use visual-content.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/pinterest-posts/SKILL.md`

### playwright
**Scope**: global
**Trigger**: Guidance for Playwright testing.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/playwright/SKILL.md`

### podcast-marketing
**Scope**: project
**Trigger**: When the user wants to plan, create, or market a podcast. Also use when the user mentions "podcast," "podcast strategy," "podcast SEO," "show notes," "podcast distribution," "Spotify podcast," "Apple Podcasts," "podcast discoverability," "PodcastEpisode schema," or "podcast repurposing." For show notes, use article-content.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/podcast-marketing/SKILL.md`

### pr-governance
**Scope**: global
**Trigger**: Trigger: issue, PR, pull request, branch, commit, governance, merge, label, semver, conventional. Enforce project governance rules for issues, PRs, commits, and branches.
**Path**: `/home/hstrejoluna/.gemini/antigravity-cli/skills/pr-governance/SKILL.md`

### programmatic-seo
**Scope**: project
**Trigger**: When the user wants to create SEO pages at scale using templates and data—including AI-assisted, grounded copy for per-URL differentiation (vs rigid mail-merge templates). Also use when the user mentions "programmatic SEO," "programmatic SEO pages," "template pages," "scale content," "location pages," "city pages," "comparison pages at scale," "X vs Y pages," "integration pages," "pages from data," "automated landing pages," or "programmatic landing pages." Uses a playbook matrix aligned to skills under skills/pages. For user-facing template galleries or marketplaces (browse → use), use template-page-generator.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/programmatic-seo/SKILL.md`

### pytest
**Scope**: global
**Trigger**: Pytest configuration and guidance.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/pytest/SKILL.md`

### react-19
**Scope**: global
**Trigger**: React 19 rules and best practices.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/react-19/SKILL.md`

### reddit-posts
**Scope**: project
**Trigger**: When the user wants to create Reddit post copy, comments, or optimize for Reddit. Also use when the user mentions "Reddit post," "subreddit," "r/," "Reddit marketing," "post to Reddit," "Reddit thread," "Reddit comment," "Reddit copy," "Reddit content," or "Reddit engagement." For Reddit ads, use reddit-ads.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/reddit-posts/SKILL.md`

### skill-creator
**Scope**: global
**Trigger**: Authoring new agent skills.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/skill-creator/SKILL.md`

### skill-improver
**Scope**: global
**Trigger**: Trigger: improve skills, audit skills, refactor skills, skill quality. Audit and upgrade existing LLM-first skills.
**Path**: `/home/hstrejoluna/.gemini/skills/skill-improver/SKILL.md`

### tailwind-4
**Scope**: global
**Trigger**: Styling with Tailwind v4.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/tailwind-4/SKILL.md`

### tiktok-captions
**Scope**: project
**Trigger**: When the user wants to create TikTok video captions, scripts, or optimize for TikTok. Also use when the user mentions "TikTok post," "TikTok caption," "TikTok video," "post to TikTok," "TikTok script," "TikTok content," "TikTok copy," "TikTok hashtags," or "TikTok marketing." For TikTok ads, use tiktok-ads.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/tiktok-captions/SKILL.md`

### translation
**Scope**: project
**Trigger**: When the user wants to translate content, create translation workflows, manage terminology, or optimize translation quality. Also use when the user mentions "translate," "translation," "localization copy," "glossary," "terminology," "style guide translation," "machine translation," "human translation," "TMS," or "multilingual content." For strategy, use localization-strategy.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/translation/SKILL.md`

### troubleshooting
**Scope**: global
**Trigger**: Uses Chrome DevTools MCP and documentation to troubleshoot connection and target issues. Trigger this skill when list_pages, new_page, or navigate_page fail, or when the server initialization fails.
**Path**: `/home/hstrejoluna/.gemini/config/plugins/chrome-devtools-plugin/skills/troubleshooting/SKILL.md`

### twitter-x-posts
**Scope**: project
**Trigger**: When the user wants to create X (Twitter) post copy, threads, or optimize for X platform. Also use when the user mentions "X post," "X thread," "Twitter post," "Twitter thread," "tweet," "tweet copy," "thread," "X marketing," "X content," "post to X," "create X post," or "X post copy." For long-form source, use article-content.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/twitter-x-posts/SKILL.md`

### typescript
**Scope**: global
**Trigger**: TypeScript coding standards and compilation rules.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/typescript/SKILL.md`

### video-marketing
**Scope**: project
**Trigger**: When the user wants to plan video marketing, create video scripts, or optimize for short-form or long-form video. Also use when the user mentions "video marketing," "video script," "short-form video," "long-form video," "TikTok script," "Reels script," "YouTube script," "video hook," or "video content strategy." For on-site video SEO, use video-optimization.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/video-marketing/SKILL.md`

### visual-content
**Scope**: project
**Trigger**: When the user wants to plan, create, or repurpose visual content (images, infographics, social post images) across channels. Also use when the user mentions "content images," "social media images," "infographic," "visual content," "post image," "image specs," "visual repurposing," "content visuals," or "image for social post." For Pinterest, use pinterest-posts.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/visual-content/SKILL.md`

### work-unit-commits
**Scope**: global
**Trigger**: Plan commits as reviewable work units. Trigger: implementation, commit splitting, chained PRs, or keeping tests and docs with code.
**Path**: `/home/hstrejoluna/.gemini/skills/work-unit-commits/SKILL.md`

### youtube-seo
**Scope**: project
**Trigger**: When the user wants to optimize YouTube videos for search, create video descriptions, or improve channel visibility. Also use when the user mentions "YouTube SEO," "YouTube description," "YouTube tags," "YouTube thumbnail," "YouTube title," "YouTube channel," or "video SEO." For YouTube ads, use youtube-ads.
**Path**: `/home/hstrejoluna/Projects/ingenieriaencancun/.agents/skills/youtube-seo/SKILL.md`

### zod-4
**Scope**: global
**Trigger**: Validation with Zod v4.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/zod-4/SKILL.md`

### zustand-5
**Scope**: global
**Trigger**: State management with Zustand v5.
**Path**: `/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/zustand-5/SKILL.md`
