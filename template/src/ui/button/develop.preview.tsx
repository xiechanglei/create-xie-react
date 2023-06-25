import {Button} from "./index"
import styled from "styled-px2vw-plugin"
import {useRef, useState} from "react"
import {CloseIcon, ErrorIcon, InfoIcon, SuccessIcon, WarnIcon} from "@/ui/icons"
import {BoltIcon} from "@/ui/icons/resources/BoltIcon.tsx"

const ButtonGroup = styled.div`
  margin-bottom: 1em;
  margin-top: 1em;

  & > * {
    margin-left: 1em;
  }
`
/**
 * shape?: "circle" | "round" | "rect";
 *     provide?: "soft" | "outline" | "mimicry";
 *     size?: "small" | "medium" | "large";
 * @constructor
 */
export const ButtonPreview = () => {
    const shapeRef = useRef<HTMLSelectElement>(null)
    const provideRef = useRef<HTMLSelectElement>(null)
    const sizeRef = useRef<HTMLSelectElement>(null)
    const disabledRef = useRef<HTMLSelectElement>(null)
    const iconRef = useRef<HTMLSelectElement>(null)
    const textRef = useRef<HTMLSelectElement>(null)

    const [shape, setShape] = useState<any>()
    const [provide, setProvide] = useState<any>()
    const [size, setSize] = useState<any>()
    const [disabled, setDisabled] = useState<boolean>(false)
    const [showIcon, setShowIcon] = useState<boolean>(true)
    const [showText, setShowText] = useState<boolean>(true)

    const reload = () => {
        setShape(shapeRef.current?.value)
        setProvide(provideRef.current?.value)
        setSize(sizeRef.current?.value)
        setDisabled(disabledRef.current?.value === "true")
        setShowIcon(iconRef.current?.value === "true")
        setShowText(textRef.current?.value === "true")
    }
    return <div>
        button shape:<select ref={shapeRef} onChange={reload}>
        <option value="circle">circle(default)</option>
        <option value="rect">rect</option>
        <option value="round">round</option>
    </select>

        button provide:<select ref={provideRef} onChange={reload}>
        <option value="mimicry">mimicry(default)</option>
        <option value="outline">outline</option>
        <option value="soft">soft</option>
    </select>

        button size:<select ref={sizeRef} onChange={reload}>
        <option value="medium">medium(default)</option>
        <option value="small">small</option>
        <option value="large">large</option>
    </select>

        button disabled:<select ref={disabledRef} onChange={reload}>
        <option value="false">false(default)</option>
        <option value="true">true</option>
    </select>

        button icon:<select ref={iconRef} onChange={reload}>
        <option value="true">true(default)</option>
        <option value="false">false</option>
    </select>

        button text:<select ref={textRef} onChange={reload}>
        <option value="true">true(default)</option>
        <option value="false">false</option>
    </select>
        <ButtonGroup>
            <Button icon={showIcon ? <BoltIcon/> : undefined} text={showText ? "primary" : ""} type="primary"
                    shape={shape}
                    provide={provide}
                    size={size}
                    disabled={disabled}/>
            <Button icon={showIcon ? <BoltIcon/> : undefined} text={showText ? "secondary" : ""} type="secondary"
                    shape={shape}
                    provide={provide}
                    size={size}
                    disabled={disabled}/>
            <Button icon={showIcon ? <SuccessIcon/> : undefined} text={showText ? "success" : ""} type="success"
                    shape={shape}
                    provide={provide} size={size}
                    disabled={disabled}/>
            <Button icon={showIcon ? <InfoIcon/> : undefined} text={showText ? "info" : ""} type="info" shape={shape}
                    provide={provide}
                    size={size}
                    disabled={disabled}/>
            <Button icon={showIcon ? <WarnIcon/> : undefined} text={showText ? "warn" : ""} type="warn" shape={shape}
                    provide={provide}
                    size={size}
                    disabled={disabled}/>
            <Button icon={showIcon ? <ErrorIcon/> : undefined} text={showText ? "error" : ""} type="error" shape={shape}
                    provide={provide}
                    size={size}
                    disabled={disabled}/>
            <Button icon={showIcon ? <CloseIcon/> : undefined} text={showText ? "disabled" : ""} type="disabled"
                    shape={shape}
                    provide={provide} size={size}
                    disabled={disabled}/>
            <Button icon={showIcon ? <CloseIcon/> : undefined} text={showText ? "dark" : ""} type="dark"
                    shape={shape}
                    provide={provide} size={size}
                    disabled={disabled}/>
        </ButtonGroup>

    </div>
}