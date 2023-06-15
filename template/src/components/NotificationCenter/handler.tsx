export type NoticeMessage = {
    type: "success" | "error" | "warn" | "info", //消息类型  default is info
    content: string,//消息内容
    duration?: number,// 持续时间(ms) 默认3000
}

const defaultNoticeMessageOptions: NoticeMessage = {type: "info", content: "", duration: 3000}


const receiverCollection = new Map<string, (notice: NoticeMessage) => void>()

/**
 * 注册消息通知
 */
export const register = (id: string, receiver: (notice: NoticeMessage) => void) => receiverCollection.set(id, receiver)

/**
 * 卸载消息通知
 */
export const unRegister = (id: string) => {
    receiverCollection.delete(id)
}

/**
 * 发送消息
 */
export const notify = (notice: string | NoticeMessage) => {
    const finalNotice = typeof notice === "string" ? {
        ...defaultNoticeMessageOptions,
        content: notice
    } : {...defaultNoticeMessageOptions, ...notice}
    receiverCollection.forEach(receiver => receiver(finalNotice))
}


setTimeout(() => notify({type: "success", content: "success message"}), 1000)
setTimeout(() => notify({type: "info", content: "info message"}), 2000)
setTimeout(() => notify({type: "error", content: "error message"}), 3000)
setTimeout(() => notify({type: "warn", content: "warn message"}), 4000)