import styled from "styled-px2vw-plugin"
import {flex} from "@/ui/layout"
/**
 * 将组件中的样式部分的数据抽离成style.ts
 */
export const NotificationWrapper = styled.div`
  ${flex("column")};
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 9999;
  pointer-events: none;

  &.leftTop, &.leftBottom {
    left: 0;
    align-items: flex-start;
  }

  &.rightTop, &.rightBottom {
    right: 0;
    align-items: flex-end;
  }

  &.top, &.rightTop, &.leftTop {
    top: 0;
  }

  &.bottom, &.rightBottom, &.leftBottom {
    bottom: 0;
    flex-direction: column-reverse;
  }

  &.top, &.bottom {
    left: 50%;
    align-items: center;
    transform: translateX(-50%);
  }
`