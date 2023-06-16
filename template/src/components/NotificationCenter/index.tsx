import {FC, useEffect, useId} from "react"
import {register, unRegister} from "./handler"
import {NotificationWrapper} from "./style"
import {Notice} from "./Notice"
import {useNoticeReducer} from "./data"

export type PositionValues = "top" | "bottom" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom"
export const NotificationCenter: FC<{ position?: PositionValues }> = ({position = "rightBottom"}) => {
    const notificationId = useId()
    const {notices, addNotice, removeNotice} = useNoticeReducer()

    useEffect(() => {
        register(notificationId, addNotice)
        return () => unRegister(notificationId)
    }, [notices])
    return <NotificationWrapper className={position}>
        {notices.map(notice => <Notice notice={notice} key={notice.id} onRemoved={() => removeNotice(notice)}/>)}
    </NotificationWrapper>
}