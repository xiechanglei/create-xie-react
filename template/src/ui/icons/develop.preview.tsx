import * as icons from "./"
import styled from "styled-px2vw-plugin"
import {Button} from "@/ui/button"

const IconWrapper = styled.div`
  display: inline-block;

  & > div {
    margin: 0.5em;
  }
`
export const IconsPreview = () => {
    return <div>
        {Object.keys(icons).map((key) => {
                // @ts-ignore
                const Icon = icons[key]
                return <IconWrapper key={key}>
                    <Button icon={<Icon/>} text={key} provide="soft" type="primary"/>
                </IconWrapper>
            }
        )}
    </div>
}