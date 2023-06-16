import {randomId} from "@/common/string"

export type NoticeMessage = {
    id?: string,//消息id
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
    finalNotice.id = randomId()
    receiverCollection.forEach(receiver => receiver(finalNotice))
}


setTimeout(() => notify({
    type: "success",
    content: "notification of app start success,this block will  be removed after 3  seconds"
}), 2000)