import {FC, useState} from "react"
import {NoticeMessage} from "../handler.tsx"
import {NoticeWrapper, NoticeContent, noticeShowTime} from "./style"
import {ErrorIcon, WarnIcon, InfoIcon, SuccessIcon} from "@/ui/icons"
import {useMount} from "@/common/react.hooks"
import {getThemeColor} from "@/ui/color"

export const Notice: FC<{ notice: NoticeMessage, onRemoved: () => void }> = ({notice, onRemoved}) => {
    //是否显示
    const [isShow, setIsShow] = useState(false)
    //挂载之后，注册时间，先显示，然后在设置的duration之后隐藏并且销毁
    useMount(() => {
        setIsShow(true)
        const timer = setTimeout(() => {
            setIsShow(false)
            setTimeout(onRemoved, noticeShowTime)
        }, notice.duration)
        return () => clearTimeout(timer)
    })
    return <NoticeWrapper themeColor={getThemeColor(notice.type)} className={isShow ? 'show' : ''}>
        <div className="icon">
            {notice.type === 'error' && <ErrorIcon/>}
            {notice.type === 'warn' && <WarnIcon/>}
            {notice.type === 'info' && <InfoIcon/>}
            {notice.type === 'success' && <SuccessIcon/>}
        </div>
        <NoticeContent>{notice.content}</NoticeContent>
    </NoticeWrapper>
}