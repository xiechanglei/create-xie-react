import {IconProps, SvgIcon} from "../style"
import {FC} from "react"

export const AddIcon: FC<IconProps> = (props) => {
    return <SvgIcon {...props}>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
    </SvgIcon>
}