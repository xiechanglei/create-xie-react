import {IconProps, SvgIcon} from "../style"
import {FC} from "react"

export const NavigateBackIcon: FC<IconProps> = (props) => {
    return <SvgIcon {...props}>
        <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
    </SvgIcon>
}

export const NavigateForwardIcon: FC<IconProps> = (props) => {
    return <SvgIcon {...props}>
        <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
    </SvgIcon>
}