## 项目创建
- `npx create-react-app wenjuan-fe --template typescript`
- `npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -save-dev`
- `npx eslint --init `
在 `package.json` 中增加 scripts `"lint": " eslint 'src/**/*.+(js|ts|jsx|tsx)' "` 
- `npm install prettier eslint-config-prettier eslint-plugin-prettier -save-dev`
在 `package.json` 中增加 scripts `"format": " prettier --write 'src/**/*.+(js|ts|jsx|tsx)' "`

## 流程控制
### husky
- `npm install husky -save-dev`
- ` npm pkg set scripts.prepare="husky install"`
- `npm run prepare`
- `npx husky add .husky/pre-commit "npm run lint"`
- `npx husky add .husky/pre-commit "npm run format"`
- `npx husky add .husky/pre-commit "npm run git add ."`
### commitlint
- `npm i -D @commitlint/config-conventional @commitlint/cli`