import styled from "styled-px2vw-plugin"
import {ThemeColor} from "@/ui/color/ThemeColor"

export const noticeShowTime = 200

type NoticeWrapperProps = {
  themeColor:ThemeColor
}
export const NoticeWrapper = styled.div<NoticeWrapperProps>`
  padding: 1em;
  margin: 0.5em;
  font-size: 13px;
  pointer-events: all;
  display: flex;
  align-items: flex-start;
  border-radius: 3px;
  opacity: 0;
  transition: all ${noticeShowTime}ms ease-in-out;
  max-width: 30em;
  background: ${({themeColor}: NoticeWrapperProps) => themeColor.soft};
  color: ${({themeColor}: NoticeWrapperProps) => themeColor.hell};
  font-weight: 500;

  & .icon {
    color: ${({themeColor}: NoticeWrapperProps) => themeColor};
    font-size: 1.2em;
  }

  &.show {
    opacity: 1;
  }
`

export const NoticeContent = styled.div`
  margin-left: 0.5em;
`
