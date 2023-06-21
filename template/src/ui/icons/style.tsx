import styled from "styled-px2vw-plugin"
import {FC, PropsWithChildren} from "react"

export type IconProps = {
    color?: string
}
export const SvgWrapper = styled.svg<IconProps>`
  height: 1em;
  flex-grow: 0;
  flex-shrink: 0;
  color: ${(props: IconProps) => props.color};

  & path {
    fill: currentColor;
  }
`


export const SvgIcon: FC<IconProps & PropsWithChildren> = (props) => {
    return <SvgWrapper {...props} viewBox="0 0 24 24" className="xie-react-icon"></SvgWrapper>
}