import {IconProps, SvgIcon} from "../style"
import {FC} from "react"

export const ExpandLessIcon: FC<IconProps> = (props) => {
    return <SvgIcon {...props} >
        <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
    </SvgIcon>
}

export const ExpandMoreIcon: FC<IconProps> = (props) => {
    return <SvgIcon {...props}>
        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </SvgIcon>
}