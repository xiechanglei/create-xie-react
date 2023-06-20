import styled from "styled-px2vw-plugin"
import {ThemeColor} from "@/ui/color/ThemeColor"

export type ButtonStyleProps = {
    shape?: "circle" | "round" | "rect";
    provide?: "soft" | "outline" | "mimicry";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    color?: ThemeColor;
}
const buildBorderRadius = (props: ButtonStyleProps) => {
    switch (props.shape) {
        case "circle":
            return "3px"
        case "round":
            return "55px"
        default:
            return "none"
    }
}

const buildBoxShadow = (props: ButtonStyleProps) => {
    switch (props.provide) {
        case "mimicry":
            return `0 1px 3px 0 ${props.color}66`
        default:
            return "none"
    }
}

const buildBorder = (props: ButtonStyleProps) => {
    switch (props.provide) {
        case "soft":
            return "none"
        default:
            return `1px solid ${props.color}`
    }
}

const buildBackground = (props: ButtonStyleProps) => {
    switch (props.provide) {
        case "mimicry":
            return props.color
        default:
            return props.color?.soft
    }
}

const buildTextColor = (props: ButtonStyleProps) => {
    switch (props.provide) {
        case "mimicry":
            return "#fff"
        default:
            return props.color
    }
}

const buildHoverColor = (props: ButtonStyleProps) => {
    if (!props.disabled) {
        switch (props.provide) {
            case "mimicry":
                return `&:hover {
                background: ${props.color?.dark};
            }`
            default:
                return `&:hover {
                background: ${props.color};
                color: #fff;
            }`
        }
    }
}

const buildOpacity = (props: ButtonStyleProps) => {
    if (props.disabled) {
        return `opacity: 0.5;
        cursor: not-allowed;`
    }
}


export const ButtonWrapper = styled.div<ButtonStyleProps>`
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  padding: 0 0.5em;
  display: inline-flex;
  align-items: center;

  & .button-text {
    margin-left: 0.5em;
  }

  &.small {
    font-size: 12px;
  }

  &.medium {
    font-size: 14px;
  }

  &.large {
    font-size: 16px;
  }

  & > .xie-react-icon {
    height: 1.2em;
    margin: 0.5em 0;
  }

  line-height: 2.5;
  border-radius: ${buildBorderRadius};
  box-shadow: ${buildBoxShadow};
  border: ${buildBorder};
  background: ${buildBackground};
  color: ${buildTextColor};
  ${buildOpacity}
  ${buildHoverColor}
`

export const RipperElement = styled.div`
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  z-index: 99;
  background: #fff;
  transform: translate(-50%, -50%) scale(0.2);
  opacity: 0;


  @keyframes ripper {
    0% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(0.2);
    }
    50% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1.25);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.25);
    }
  }

  &.active {
    animation: ripper 500ms ease-in-out;
  }
`