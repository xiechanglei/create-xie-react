#!/usr/bin/env node

const {exec, cd} = require('shelljs');
const fs = require('fs');
const path = require('path');

const defaultAppName = "my-react-app"
/**
 * 创建一个react项目,并且初始化一些自定义的配置
 * yarn create react-app my-app
 */
//获取命令行参数
const [, , projectName = defaultAppName] = process.argv;
console.log('开始自动化创建 react+typescript 项目,项目名称为:', projectName);
//判断对应文件夹是否存在
const projectPath = path.resolve(projectName);
console.log('项目路径为:', projectPath);
const isExist = fs.existsSync(projectPath);
if (isExist) {
    console.log('项目已经存在,请更换项目名称');
    return;
}
//使用vite创建react项目
const isYarn = exec('yarn -v', {silent: true}).code === 0;
if (isYarn) {
    console.log('使用yarn创建项目');
    exec(`yarn create vite ${projectName} --template react-ts`, {silent: true});
} else {
    console.log('使用npm创建项目');
    exec(`npm create vite@latest ${projectName} -- --template react-ts`, {silent: true});
}

cd(projectName);

//安装依赖
console.log('安装默认依赖...');
// exec('yarn');

//修改tsconfig.json
let tsconfigContent = fs.readFileSync('./tsconfig.json', 'utf-8');//删除注释,防止报错
tsconfigContent = tsconfigContent.split('\n').filter(item => !item.trim().startsWith('/*')).join('\n');
let tsconfig = JSON.parse(tsconfigContent);
tsconfig = {
    ...tsconfig,
    "baseUrl": "./src",
    "paths": {
        "@/*": ["./src/*"]
    },
    "exclude": ["node_modules", "dist"]
}
fs.writeFileSync('./tsconfig.json', JSON.stringify(tsconfig, null, 2));

//删除不需要的文件
console.log('删除不需要的文件...');
fs.unlinkSync("src/App.css")
fs.unlinkSync("src/index.css")
fs.rmSync("public", {recursive: true})
fs.rmSync("src/assets", {recursive: true})


//重写index.html
console.log('重写index.html...');
const index_html_content = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>xie-react-app</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
fs.writeFileSync('./index.html', index_html_content);

//重写main.tsx
console.log('重写main.tsx...');
const main_tsx_content = `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`
fs.writeFileSync('./src/main.tsx', main_tsx_content);

//重写App.tsx
console.log('重写App.tsx...');
const app_tsx_content = `export const App = () => {
  return <div>hello xie-react-app</div>;
}`
fs.writeFileSync('./src/App.tsx', app_tsx_content);

