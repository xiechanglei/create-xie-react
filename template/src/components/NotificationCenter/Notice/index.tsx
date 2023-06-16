import {FC, useState} from "react"
import {NoticeMessage} from "../handler.tsx"
import {NoticeWrapper, NoticeContent, noticeShowTime} from "./style"
import {ErrorIcon, WarnIcon, InfoIcon, SuccessIcon} from "@/ui/icons";
import {useMount} from "@/common/react.hooks"

export const Notice: FC<{ notice: NoticeMessage, onRemoved: () => void }> = ({notice, onRemoved}) => {
    const [isShow, setIsShow] = useState(false)
    useMount(() => {
        setIsShow(true)
        const timer = setTimeout(() => {
            setIsShow(false)
            setTimeout(onRemoved, noticeShowTime)
        }, notice.duration)
        return () => clearTimeout(timer)
    })
    return <NoticeWrapper className={`${notice.type} ${isShow ? 'show' : ''}`}>
        {notice.type === 'error' && <ErrorIcon/>}
        {notice.type === 'warn' && <WarnIcon/>}
        {notice.type === 'info' && <InfoIcon/>}
        {notice.type === 'success' && <SuccessIcon/>}
        <NoticeContent>{notice.content}</NoticeContent>
    </NoticeWrapper>
}