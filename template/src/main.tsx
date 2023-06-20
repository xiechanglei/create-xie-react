import {createRoot} from 'react-dom/client'
import {initStyledComponent} from "@/ui"

/**
 * 动态加载App.tsx 之后再渲染react,否则设置的px2vw插件不会生效
 */
const initApp = async () => {
    const App = (await import('./App.tsx')).default
    createRoot(document.getElementById('root') as HTMLElement).render(<App/>)
}

initStyledComponent()
initApp()