import {StyleBase} from "@/ui/layout/stylebase.ts"

class BackgroundStyle extends StyleBase {

    image = (url: string) => this.style('background-image', `url(${url})`)

    cover = () => this.style('background-size', 'cover')

    color = (color: string) => this.style('background-color', color)

    contain = () => this.style('background-size', 'contain')


    center = () => this.style('background-position', 'center')

    left = () => this.style('background-position', 'left')

    right = () => this.style('background-position', 'right')

    top = () => this.style('background-position', 'top')

    bottom = () => this.style('background-position', 'bottom')

    repeat = () => this.style('background-repeat', 'repeat')

    noRepeat = () => this.style('background-repeat', 'no-repeat')

    repeatX = () => this.style('background-repeat', 'repeat-x')

    repeatY = () => this.style('background-repeat', 'repeat-y')


}

export const background = () => new BackgroundStyle()
