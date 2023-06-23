import styled from "styled-px2vw-plugin"

const D1 = styled.div`
  font-size: 30px;
  font-weight: 300;
`
const D2 = styled.div`
  font-size: 30px;
  font-weight: 500;
`

const D3 = styled.div`
  font-size: 30px;
  font-weight: 700;
`

const text: string = " Coding is fun! 编程使我快乐！@2023"
export const FontPreview = () => {
    return (
        <div>
            i use Roboto font for this project ,you can change it in src\ui\font\font.css
            <D1>
                font-weight(300):{text}
            </D1>
            <D2>
                font-weight(500):{text}
            </D2>
            <D3>
                font-weight(700):{text}
            </D3>
        </div>
    )
}