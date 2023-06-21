import styled from "styled-px2vw-plugin"
import {absolute, background} from "@/ui/layout"

type FullBackImageProps = {
    image: string;
    zIndex: number;
}
export const FullBackImage = styled.div<FullBackImageProps>`
  ${absolute().left().top()};
  width: 100%;
  height: 100%;
  ${(props: FullBackImageProps) => props.image && background().image(props.image).cover().noRepeat()};
  ${(props: FullBackImageProps) => props.zIndex && `z-index: ${props.zIndex}`}
`