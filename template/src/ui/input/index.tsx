import styled from "styled-px2vw-plugin"
import {primaryColor} from "@/ui/color"

/**
 * 文本输入框，密码输入框（显示密码），下拉选择框，textarea，colorPick,date,datetime,time,range,icon input,radio,checkbox,switch
 * disabled：disabled or not
 * status: normal | fail | success
 * size：small | medium | large
 * icon: icon name
 */
export const Input = styled.input`
  border: 1px solid #ccc;
  background: #f8f9fa;
  outline: none;
  border-radius: 0.3em;
  font-size: 14px;
  line-height: 2.5;
  padding: 0 0.8em;
  width: 100%;
  transition: all 0.1s;

  &:focus {
    border-color: ${primaryColor}99;
  }
`