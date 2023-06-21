import {createRoot} from "react-dom/client"
import * as allIcons from "@/ui/icons/"
import {Button} from "@/ui/button"
import "@/ui/reset.css"
import "@/ui/font/font.css"
import styled from "styled-components"

const IconGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin: 0.5em;
  }
`
const IconPreview = () => {
    const iconNames = Object.keys(allIcons)
    return <IconGroupWrapper>
        {iconNames.map((iconName) => {
            // @ts-ignore
            const Icon = allIcons[iconName]
            return <Button key={iconName} icon={<Icon/>} text={iconName}/>
        })}
    </IconGroupWrapper>
}


createRoot(document.getElementById("root")!).render(<IconPreview/>)