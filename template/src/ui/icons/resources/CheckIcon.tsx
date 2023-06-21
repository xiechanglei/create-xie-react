import {IconProps, SvgIcon} from "../style"
import {FC} from "react"

export const CheckIcon: FC<IconProps> = (props) => {
    return <SvgIcon {...props}>
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
    </SvgIcon>
}