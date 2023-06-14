import React from 'react'
import {createRoot} from 'react-dom/client'
import "./global-style/base.css"
import "./global-style/font.css"

import {initStyledConfig} from 'styled-px2vw-plugin'
import {viewWidth} from "@/config"
import {log} from "@/common/log"

/**
 * 通过initStyledConfig去设置 styled-px2vw-plugin的配置
 */
initStyledConfig({viewportWidth: viewWidth, ignoreAttrs: []})

/**
 * 动态加载App.tsx 之后再渲染react
 */
const initApp = async () => {
    const App = (await import('./App')).default
    createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
        <App/>
    </React.StrictMode>)
}

initApp().then(() => log("start-log", "app start success"))