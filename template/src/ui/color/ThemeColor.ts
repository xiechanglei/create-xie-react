import {Color} from "@/common/color/color";

export class ThemeColor {
    color: string;//原色
    soft: string;//相对于原色来说浅一点，可以作为前景色为字体颜色时的背景色
    dark: string;//相对于原色来说深一点，可以用来做active之类的
    hell: string;//几乎快要贴近黑色了，可以用作当背景色为soft时的字体颜色


    constructor(hexColor: string) {
        this.color = hexColor
        this.soft = Color.of(hexColor).bright(90).hex()
        this.dark = Color.of(hexColor).bright(-10).hex()
        this.hell = Color.of(hexColor).bright(-40).hex()
    }

    toString(): string {
        return this.color;
    }

    static of(hexColor: string) {
        return new ThemeColor(hexColor)
    }

}