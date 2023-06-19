#!/usr/bin/env node

const {exec, cp, cd} = require('shelljs');
const fs = require('fs');
const path = require('path');

//输入一个空行，与yarn隔开
console.log("")
const COLOR = {
    RED: 31, GREEN: 32, BLUE: 34, YELLOW: 33, ORANGE: 35,
}


//指定颜色输出
const colorPrint = (str, color = COLOR.ORANGE) => {
    console.log(`\x1b[${color}m${str}\x1b[0m`);
}

const defaultAppName = "my-react-app"
const [, , projectName = defaultAppName] = process.argv;
//获取当前版本号
const binPath = path.resolve(__dirname, '../');
colorPrint(`开始自动化创建 react+typescript 项目,项目名称为: ${projectName}`);
//判断对应文件夹是否存在
const projectPath = path.resolve(projectName);
colorPrint(`项目路径为:${projectPath}`);
const isExist = fs.existsSync(projectPath);
if (isExist) {
    colorPrint('项目已经存在,请更换项目名称', COLOR.RED);
    return;
}
//复制template目录下的所有文件到项目目录下
exec(`mkdir ${projectPath}`);
//复制template目录下的所有文件到项目目录下
cp('-Rf', `${binPath}/template/*`, projectPath);
//以.开头的文件好像没有被辅助过去，应该手动复制一下
cp('-Rf', `${binPath}/template/.[!.]*`, projectPath);
cd(projectName)

//重写index.html
const index_html_content = fs.readFileSync('./index.html', 'utf-8').replace(/{{projectName}}/g, projectName)
fs.writeFileSync(`./index.html`, index_html_content);

//重写package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
packageJson.name = projectName
fs.writeFileSync(`./package.json`, JSON.stringify(packageJson, null, 2))

const isYarn = exec('yarn -v', {silent: true}).code === 0;
colorPrint('创建完成', COLOR.GREEN);
colorPrint('您可能需要使用以下命令：', COLOR.GREEN);
if (isYarn) {
    colorPrint(`\tcd ${projectName} | yarn (如果依赖在本地都是被缓存过的，可以使用yarn --offline 来增加安装速度)`, COLOR.GREEN);
} else {
    colorPrint(`\tcd ${projectName} | npm i`, COLOR.GREEN);
}

