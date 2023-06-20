import {FC, MouseEventHandler, ReactElement, useRef} from "react"
import {ButtonStyleProps, ButtonWrapper, RipperElement} from "./style"
import {getThemeColor} from "@/ui/color"

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLElement>;
    type?: "primary" | "success" | "info" | "warn" | "error" | "disabled";
    text?: string;
    icon?: ReactElement;
} & Pick<ButtonStyleProps, "shape" | "provide" | "size" | "disabled">
export const Button: FC<ButtonProps> = (props) => {
    const derivativeProps: ButtonStyleProps = {}
    const ripperRef = useRef<HTMLDivElement>()
    const wrapperRef = useRef<HTMLDivElement>()
    derivativeProps.shape = props.shape || "circle"
    derivativeProps.provide = props.provide || "mimicry"
    derivativeProps.size = props.size || "medium"
    derivativeProps.disabled = props.disabled || false
    derivativeProps.color = getThemeColor(props.type || "primary")

    const clickHandler: MouseEventHandler<HTMLElement> = (event) => {
        props.onClick !== undefined && !props.disabled && props.onClick(event)
        if (ripperRef.current && !props.disabled) {
            const left = event.clientX - event.currentTarget.getBoundingClientRect().left
            const top = event.clientY - event.currentTarget.getBoundingClientRect().top
            const width = wrapperRef.current?.getBoundingClientRect().width ?? 0
            const height = wrapperRef.current?.getBoundingClientRect().height ?? 0
            const size = Math.max(width - left, left, height - top, top)
            ripperRef.current.style.left = `${left}px`
            ripperRef.current.style.top = `${top}px`
            ripperRef.current.style.width = `${size * 2.5}px`
            ripperRef.current.style.height = `${size * 2.5}px`
            ripperRef.current.classList.remove("active")
            requestAnimationFrame(() => ripperRef.current?.classList.add("active"))
        }
    }

    return <ButtonWrapper {...derivativeProps} className={derivativeProps.size} onClick={clickHandler} ref={wrapperRef}>
        {props.icon ? props.icon : null}
        {props.text && props.text !== "" && props.icon ? <span className="button-text">{props.text}</span> : props.text}
        <RipperElement ref={ripperRef}/>
    </ButtonWrapper>
}