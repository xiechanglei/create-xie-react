import {StyleBase} from "@/ui/layout/stylebase.ts"

class PositionStyle extends StyleBase {
    constructor(position?: string) {
        super()
        position && this.style('position', position)
    }

    absolute = () => this.style('position', 'absolute')

    relative = () => this.style('position', 'relative')

    fixed = () => this.style('position', 'fixed')

    sticky = () => this.style('position', 'sticky')

    top = (value: string | number = 0) => this.style('top', value)

    bottom = (value: string | number = 0) => this.style('bottom', value)

    left = (value: string | number = 0) => this.style('left', value)

    right = (value: string | number = 0) => this.style('right', value)

    zIndex = (value: string | number = 0) => this.style('z-index', value)

}

export const position = () => new PositionStyle()

export const absolute = () => new PositionStyle('absolute')

export const relative = () => new PositionStyle('relative')

export const fixed = () => new PositionStyle('fixed')

export const sticky = () => new PositionStyle('sticky')