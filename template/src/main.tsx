import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import "./global-style/base.css"
import "./global-style/font.css"

import {initStyledConfig} from 'styled-px2vw-plugin'

/**
 * 通过initStyledConfig去动态设置 styled-px2vw-plugin的配置
 * 一般情况下，我们都是按照设计图的尺寸去实现代码
 */
const windowWidth = document.body.clientWidth
if (windowWidth < 1366) {
    initStyledConfig({viewportWidth: 750, ignoreAttrs: []})
} else {
    initStyledConfig({viewportWidth: 1920, ignoreAttrs: []})
}
/**
 * 下面这样设置，可以忽略兼容
 */
// initStyledConfig({viewportWidth: windowWidth, ignoreAttrs: []})

/**
 * 动态加载App.tsx 之后再渲染react,否则上面设置的px2vw插件不会生效
 */
const initApp = async () => {
    const App = (await import('./App')).default
    createRoot(document.getElementById('root') as HTMLElement).render(<StrictMode><App/></StrictMode>)
}

initApp()