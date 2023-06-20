import styled from "styled-px2vw-plugin"

export type IconProps = {
    size?: number,
    color?: string
}
export const SvgWrapper = styled.svg<IconProps>`
  height: ${(props: IconProps) => props.size ? props.size + "px" : "1em"};
  flex-grow: 0;
  flex-shrink: 0;
  color: ${(props: IconProps) => props.color};

  & path {
    fill: currentColor;
  }
`