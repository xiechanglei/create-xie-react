import {RgbColor} from "./RgbColor";

const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}

const numberLimit = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max)
}

/**
 * Hsl
 */
export class HslColor {
    hue = 0;
    saturation = 0;
    lightness = 0;
    alpha = 1;

    /**
     * 旋转色相
     */
    rotateHue(deg: number) {
        this.hue = (this.hue + deg) % 360;
        return this
    }

    /**
     * 增加饱和度
     * @param percent -100 ~ 100
     */
    addSaturation(percent: number) {
        percent = numberLimit(percent, -100, 100) / 100;
        if (percent < 0) {
            this.saturation += this.saturation * percent;
        } else {
            this.saturation += (100 - this.saturation) * percent;
        }
        return this
    }

    /**
     * 增加亮度
     * @param percent 0-100
     */
    addLightness(percent: number) {
        percent = numberLimit(percent, -100, 100) / 100;
        if (percent < 0) {
            this.lightness += this.lightness * percent;
        } else {
            this.lightness += (100 - this.lightness) * percent;
        }
        return this
    }


    constructor(value?: string) {
        value !== undefined && this.parseColorHsl(value)
    }

    /**
     * 解析hsl颜色值
     */
    parseColorHsl(value: string) {
        value = value.replace('hsl(', '').replace('hsla(', '').replace(')', '');
        const [hue, saturation, lightness, alpha] = value.split(',').map((item) => parseInt(item));
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha ?? 1;
    }

    /**
     * 转换为rgb颜色
     */
    toRgbColor() {
        let red, green, blue;
        const hue = this.hue / 360;
        const saturation = this.saturation / 100;
        const lightness = this.lightness / 100;
        if (saturation === 0) {
            red = green = blue = lightness;
        } else {
            const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
            const p = 2 * lightness - q;
            red = hue2rgb(p, q, hue + 1 / 3);
            green = hue2rgb(p, q, hue);
            blue = hue2rgb(p, q, hue - 1 / 3);
        }
        const rc = new RgbColor()
        Object.assign(rc, {
            red: Math.round(red * 255),
            green: Math.round(green * 255),
            blue: Math.round(blue * 255),
            alpha: this.alpha
        })
        return rc;
    }


    /**
     * 转换为字符串
     */
    toString() {
        const [hue, saturation, lightness] = [this.hue, this.saturation, this.lightness].map(Math.round)
        if (this.alpha === 1) {
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        }
        return `hsla(${hue}, ${saturation}%, ${lightness}%, ${this.alpha})`;
    }
}