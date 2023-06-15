import {FC, useEffect, useId, useState} from "react"
import {
    NoticeMessage,
    register,
    unRegister
} from "./handler"
import {NotificationWrapper} from "./style"
import {Notice} from "./Notice"

export type PositionValues =
    | "top"
    | "bottom"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
export const NotificationCenter: FC<{ position?: PositionValues }> = ({position = "rightTop"}) => {
    const notificationId = useId()
    const [notices, setNotices] = useState<NoticeMessage[]>([]);
    const receiveNotification = (notice: NoticeMessage) => {
        notices.push(notice)
        setNotices([...notices])
    }

    useEffect(() => {
        register(notificationId, receiveNotification)
        return () => unRegister(notificationId)
    }, [notices])
    return <NotificationWrapper className={position}>
        {notices.map((notice, index) => <Notice notice={notice} key={index}/>)}
    </NotificationWrapper>
}