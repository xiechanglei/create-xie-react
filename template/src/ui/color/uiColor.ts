import {Color} from "@/common/color/color.ts";

export class UiColor {
    public icon: string;
    public background: string;
    public text: string;

    constructor(hexColor: string) {
        this.icon = hexColor
        this.background = Color.of(hexColor).bright(90).hex()
        this.text = Color.of(hexColor).bright(-40).hex()
    }

    static of(hexColor: string) {
        return new UiColor(hexColor)
    }
}