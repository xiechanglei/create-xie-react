import styled from "styled-px2vw-plugin"
import {ThemeColor} from "@/ui/color/ThemeColor"

export const noticeShowTime = 200

type NoticeWrapperProps = {
    themeColor:ThemeColor
}
export const NoticeWrapper = styled.div<NoticeWrapperProps>`
  padding: 15px;
  margin: 10px;
  font-size: 13px;
  pointer-events: all;
  display: flex;
  align-items: flex-start;
  border-radius: 3px;
  opacity: 0;
  transition: all ${noticeShowTime}ms ease-in-out;
  max-width: 300px;
  background: ${({themeColor}: NoticeWrapperProps) => themeColor.soft};
  color: ${({themeColor}: NoticeWrapperProps) => themeColor.hell};

  svg {
    color: ${({themeColor}: NoticeWrapperProps) => themeColor}
  }

  &.show {
    opacity: 1;
  }
`

export const NoticeContent = styled.div`
  margin-left: 5px;
  line-height: 20px;
`
