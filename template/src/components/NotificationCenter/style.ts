import styled from "styled-px2vw-plugin"
import {errorColor, infoColor, successColor, warnColor} from "@/ui/config";

export const NotificationWrapper = styled.div`
  position: absolute;

  &.leftTop, &.leftBottom {
    left: 0;
  }

  &.rightTop, &.rightBottom {
    right: 0;
  }

  &.top, &.rightTop, &.leftTop {
    top: 0;
  }

  &.bottom, &.rightBottom, &.leftBottom {
    bottom: 0;
  }

  &.top, &.bottom {
    left: 50%;
    transform: rotateX(-50%);
  }
`
export const NoticeWrapper = styled.div`
  padding: 15px;
  margin: 20px;
  font-size: 13px;
  pointer-events: all;
  display: flex;
  justify-content: center;

  &.info {
    background: ${infoColor.background};
    color: ${infoColor.text};
    svg{
      color:${infoColor.icon};
    }
  }

  &.success {
    background: ${successColor.background};
    color: ${successColor.text};
    svg{
      color:${successColor.icon};
    }
  }

  &.warn {
    background: ${warnColor.background};
    color: ${warnColor.text};
    svg{
      color:${warnColor.icon};
    }
  }

  &.error {
    background: ${errorColor.background};
    color: ${errorColor.text};
    svg{
      color:${errorColor.icon};
    }
  }

`
