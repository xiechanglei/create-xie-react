import {NoticeType, notify} from "./handler"

export const NotificationCenterPreview = () => {
    const showNotice = (msg: string, type: NoticeType) => () => notify({content: msg, type})
    return <div>
        <button onClick={showNotice("show info notification message in application ", "info")}>show info</button>
        <button onClick={showNotice("show success notification message in application", "success")}>show success
        </button>
        <button onClick={showNotice("show error notification message in application", "error")}>show error</button>
        <button onClick={showNotice("show warn notification message in application", "warn")}>show warn</button>
    </div>
}