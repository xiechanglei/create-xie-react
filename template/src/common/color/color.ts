import {RgbColor} from "./RgbColor";
import {HslColor} from "./HslColor";

/**
 * 闲的无聊，写了一个颜色分析器
 */
export class Color {
    color: RgbColor | HslColor;

    constructor(value: string | RgbColor | HslColor) {
        if (typeof value === "string") {
            if (value.startsWith('#') || value.startsWith('rgb') || value.startsWith('rgba')) {
                this.color = new RgbColor(value);
            } else if (value.startsWith('hsl') || value.startsWith('hsla')) {
                this.color = new HslColor(value);
            } else {
                throw new Error('颜色值格式错误')
            }
        } else {
            this.color = value
        }

    }

    static of(value: string | RgbColor | HslColor) {
        return new Color(value)
    }

    getRgbColor() {
        return this.color instanceof RgbColor ? this.color : this.color.toRgbColor()
    }

    getHslColor() {
        return this.color instanceof HslColor ? this.color : this.color.toHslColor()
    }

    /**
     * 输出16进制颜色
     */
    hex() {
        return this.getRgbColor().toHexString()
    }

    /**
     * 输出rgb颜色值
     */
    rgb() {
        return this.getRgbColor().toRgbString()
    }

    /**
     * 输出hsl颜色
     */
    hsl() {
        return this.getHslColor().toString()
    }

    /**
     * 旋转色相
     * @param deg
     */
    rotate(deg = 20) {
        return new Color(this.getHslColor().rotateHue(deg))
    }

    /**
     * 颜色更加饱和
     * @param percent -100 ~ 100
     */
    saturated(percent = 10) {
        return new Color(this.getHslColor().addSaturation(percent))
    }

    /**
     * 增加亮度
     * @param percent -100 ~ 100
     */
    bright(percent = 10) {
        return new Color(this.getHslColor().addLightness(percent))
    }


}