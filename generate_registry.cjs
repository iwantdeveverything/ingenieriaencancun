const fs = require("fs");
const path = require("path");

const skills = `
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/jira-epic/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/jira-task/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/nextjs-15/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/playwright/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/pytest/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/react-19/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/skill-creator/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/tailwind-4/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/typescript/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/zod-4/SKILL.md
/home/hstrejoluna/.gemini/skills/gentleman-skills/curated/zustand-5/SKILL.md
/home/hstrejoluna/.gemini/skills/chained-pr/SKILL.md
/home/hstrejoluna/.gemini/skills/cognitive-doc-design/SKILL.md
/home/hstrejoluna/.gemini/skills/comment-writer/SKILL.md
/home/hstrejoluna/.gemini/skills/work-unit-commits/SKILL.md
/home/hstrejoluna/.gemini/skills/skill-improver/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/judgment-day/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/go-testing/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/skill-creator/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/skill-improver/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/branch-pr/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/issue-creation/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/chained-pr/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/cognitive-doc-design/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/comment-writer/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/work-unit-commits/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/pr-governance/SKILL.md
/home/hstrejoluna/.gemini/antigravity-cli/skills/frontend-design/SKILL.md
`.trim().split("\n");

const projectDir = "/home/hstrejoluna/Projects/ingenieriaencancun";
const registry = {};

for (const spath of skills) {
    if (spath.includes("sdd-") || spath.includes("_shared") || spath.includes("skill-registry")) continue;
    try {
        const content = fs.readFileSync(spath, "utf8");
        const match = content.match(/^---\n([\s\S]*?)\n---/);
        if (match) {
            const fm = match[1];
            const nameMatch = fm.match(/^name:\s*(.+)$/m);
            const descMatch = fm.match(/^description:\s*(.+)$/m);
            if (nameMatch) {
                let name = nameMatch[1].replace(/["']/g, "");
                let desc = descMatch ? descMatch[1].replace(/["']/g, "") : "";
                let scope = spath.startsWith(projectDir) ? "project" : "global";
                
                if (!registry[name] || scope === "project") {
                    registry[name] = { name, desc, path: spath, scope };
                }
            }
        }
    } catch (e) {}
}

const conventions = [];
["agents.md", "AGENTS.md", "CLAUDE.md", ".cursorrules", "GEMINI.md", "copilot-instructions.md"].forEach(conv => {
    const cpath = path.join(projectDir, conv);
    if (fs.existsSync(cpath)) {
        conventions.push(`- ${conv}: ${cpath}`);
    }
});

let out = ["# Skill Registry\n"];
if (conventions.length > 0) {
    out.push("## Project Conventions\n");
    out.push(conventions.join("\n"));
    out.push("\n");
}

out.push("## Available Skills\n");
Object.keys(registry).sort().forEach(name => {
    const d = registry[name];
    out.push(`### ${name}`);
    out.push(`**Scope**: ${d.scope}`);
    out.push(`**Trigger**: ${d.desc}`);
    out.push(`**Path**: \`${d.path}\`\n`);
});

fs.mkdirSync(path.join(projectDir, ".atl"), { recursive: true });
fs.writeFileSync(path.join(projectDir, ".atl/skill-registry.md"), out.join("\n"));
console.log("Skill registry generated.");
