import styled from "styled-px2vw-plugin"

const D1 = styled.div`
  font-size: 30px;
  font-weight: 300;
`

const text: string = " Coding is fun! @2023"
export const FontPreview = () => {
    return (
        <div>
            I choose Roboto font for this project ,you can change it in src\ui\font\font.css
            <D1>
                {text}
            </D1>
        </div>
    )
}