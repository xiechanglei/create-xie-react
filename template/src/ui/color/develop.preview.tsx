import styled from "styled-px2vw-plugin"
import {ThemeColor} from "./ThemeColor"
import {colorMap} from "@/ui/color/index.ts"
import {ReactElement} from "react"

const ColorBlock = styled.div<{ color: ThemeColor }>`
  width: 10em;
  height: 3em;
  display: inline-block;
  background-color: ${(props: { color: ThemeColor }) => props.color};
  color: white;
  text-align: center;
  line-height: 3em;
`
export const ColorPreview = () => {
    const colorBlocks: ReactElement[] = []
    colorMap.forEach((value, key) => {
        colorBlocks.push(<ColorBlock color={value} key={key}>{key}</ColorBlock>)
    })
    return <div>
        {colorBlocks}
    </div>
}