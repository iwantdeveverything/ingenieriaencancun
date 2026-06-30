import os
import re
import yaml

skills = """
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
""".strip().split()

project_dir = "/home/hstrejoluna/Projects/ingenieriaencancun"

def parse_frontmatter(path):
    try:
        with open(path, 'r') as f:
            content = f.read()
        match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
        if match:
            return yaml.safe_load(match.group(1))
    except:
        pass
    return None

registry = {}
for path in skills:
    if "sdd-" in path or "_shared" in path or "skill-registry" in path:
        continue
    fm = parse_frontmatter(path)
    if not fm or 'name' not in fm:
        continue
    
    name = fm['name']
    desc = fm.get('description', '')
    scope = 'project' if path.startswith(project_dir) else 'global'
    
    if name not in registry or scope == 'project':
        registry[name] = {
            'name': name,
            'description': desc,
            'path': path,
            'scope': scope
        }

conventions = []
for conv in ['agents.md', 'AGENTS.md', 'CLAUDE.md', '.cursorrules', 'GEMINI.md', 'copilot-instructions.md']:
    conv_path = os.path.join(project_dir, conv)
    if os.path.exists(conv_path):
        conventions.append(f"- {conv}: {conv_path}")

out = ["# Skill Registry\n"]
if conventions:
    out.append("## Project Conventions\n")
    out.extend(conventions)
    out.append("\n")

out.append("## Available Skills\n")
for name, data in sorted(registry.items()):
    out.append(f"### {name}")
    out.append(f"**Scope**: {data['scope']}")
    out.append(f"**Trigger**: {data['description']}")
    out.append(f"**Path**: `{data['path']}`\n")

os.makedirs(os.path.join(project_dir, ".atl"), exist_ok=True)
with open(os.path.join(project_dir, ".atl/skill-registry.md"), 'w') as f:
    f.write("\n".join(out))

print("Registry created")
