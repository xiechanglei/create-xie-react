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

//修改tsconfig.json
cd(projectName);
let tsconfigContent = fs.readFileSync('./tsconfig.json', 'utf-8');//删除注释,防止报错
tsconfigContent = tsconfigContent.split('\n').filter(item => !item.trim().startsWith('/*')).join('\n');
const tsconfig = JSON.parse(tsconfigContent);
tsconfig.compilerOptions = {
    compilerOptions: {
        ...tsconfig.compilerOptions,
        "moduleResolution": "node"
    },
    "baseUrl": "./src",
    "paths": {
        "@/*": ["./src/*"]
    },
    "exclude": ["node_modules", "dist"]
}
fs.writeFileSync('./tsconfig.json', JSON.stringify(tsconfig, null, 2));
