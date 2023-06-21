import {initStyledConfig} from 'styled-px2vw-plugin'
import "./reset.css"
import "./font/Roboto/Roboto.css"
import "./font/font.css"

/**
 * 通过initStyledConfig去动态设置 styled-px2vw-plugin的配置
 * 一般情况下，我们都是按照设计图的尺寸去实现代码
 */

//http://view.jqueryfuns.com/2023/3/6/499645bc04e396f0b7bf573bdbe46f0d/ui-buttons.html
export const initStyledComponent = () => {
    const windowWidth = document.body.clientWidth
    // initStyledConfig({viewportWidth: windowWidth, ignoreAttrs: []})
    const ignoreAttrs = ["font-size"]
    const viewportWidth = windowWidth < 1366 ? 750 : 1920
    initStyledConfig({viewportWidth, ignoreAttrs})
}
