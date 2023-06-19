import styled from "styled-px2vw-plugin";

export type IconProps = {
    size?: number,
    color?: string
}
export const SvgWrapper = styled.svg<IconProps>`
  width: ${(props: IconProps) => props.size ? props.size + "px" : "20px"};
  flex-grow: 0;
  flex-shrink: 0;
  color: ${(props: IconProps) => props.color ? props.color : "#777"};

  & path {
    fill: currentColor;
  }
`