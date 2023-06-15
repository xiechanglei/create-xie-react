import {FC} from "react"
import {NoticeMessage} from "./handler"
import {NoticeWrapper} from "./style"
import {ErrorIcon} from "@/ui/icons/ErrorIcon.tsx";

export const Notice: FC<{ notice: NoticeMessage }> = ({notice}) => {
    return <NoticeWrapper className={notice.type}><ErrorIcon/>{notice.content}</NoticeWrapper>
}