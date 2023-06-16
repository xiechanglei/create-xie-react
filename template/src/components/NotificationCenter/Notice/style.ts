import styled from "styled-px2vw-plugin"
import {errorColor, infoColor, successColor, warnColor} from "@/ui/config";

export const noticeShowTime = 200
export const NoticeWrapper = styled.div`
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

  &.show {
    opacity: 1;
  }

  &.info {
    background: ${infoColor.background};
    color: ${infoColor.text};

    svg {
      color: ${infoColor.icon};
    }
  }

  &.success {
    background: ${successColor.background};
    color: ${successColor.text};

    svg {
      color: ${successColor.icon};
    }
  }

  &.warn {
    background: ${warnColor.background};
    color: ${warnColor.text};

    svg {
      color: ${warnColor.icon};
    }
  }

  &.error {
    background: ${errorColor.background};
    color: ${errorColor.text};

    svg {
      color: ${errorColor.icon};
    }
  }
`

export const NoticeContent = styled.div`
  margin-left: 5px;
  line-height: 20px;
`
