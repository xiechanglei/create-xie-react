import {HslColor} from "./HslColor";

export class RgbColor {
    /**
     * 颜色的红色分量，0-255
     */
    red = 255;
    /**
     * 颜色的绿色分量，0-255
     */
    green = 255;
    /**
     * 颜色的蓝色分量，0-255
     */
    blue = 255;
    /**
     * 颜色的透明度，0-1
     */
    alpha = 1;

    constructor(value = "") {
        if (value.startsWith('#')) {
            this.parseColorHex(value);
        } else if (value.startsWith('rgb') || value.startsWith('rgba')) {
            this.parseColorRgb(value)
        }
    }

    /**
     * 解析16进制颜色值
     */
    parseColorHex(value: string) {
        value = value.replace('#', '');
        if (value.length === 3 || value.length === 4) {
            value = value.split('').map((item) => item.repeat(2)).join('');
        }
        this.red = parseInt(value.slice(0, 2), 16);
        this.green = parseInt(value.slice(2, 4), 16);
        this.blue = parseInt(value.slice(4, 6), 16);
        this.alpha = value.length === 8 ? parseInt(value.slice(6, 8), 16) / 255 : 1;
    }

    /**
     * 解析rgb颜色值
     */
    parseColorRgb(value: string) {
        value = value.replace('rgb(', '').replace('rgba(', '').replace(')', '');
        const [red, green, blue, alpha] = value.split(',').map((item) => parseInt(item));
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha ?? 1
    }


    /**
     * 转换成16进制颜色值
     */
    toHexString() {
        const red = Math.round(this.red).toString(16).padStart(2, '0');
        const green = Math.round(this.green).toString(16).padStart(2, '0');
        const blue = Math.round(this.blue).toString(16).padStart(2, '0');
        if (this.alpha === 1) {
            return `#${red}${green}${blue}`.toUpperCase();
        }
        const alpha = Math.round(this.alpha * 255).toString(16).padStart(2, '0');
        return `#${red}${green}${blue}${alpha}`.toUpperCase();
    }

    /**
     * 转换成rgb颜色值
     */
    toRgbString() {
        if (this.alpha === 1) {
            return `rgb(${this.red},${this.green},${this.blue})`;
        }
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    }

    /**
     * 转换成hsl颜色值
     */
    toHslColor() {
        const red = this.red / 255;
        const green = this.green / 255;
        const blue = this.blue / 255;
        const max = Math.max(red, green, blue);
        const min = Math.min(red, green, blue);
        let hue = 0;
        let saturation;
        const lightness = (max + min) / 2;
        if (max === min) {
            hue = saturation = 0;
        } else {
            const d = max - min;
            saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case red:
                    hue = (green - blue) / d + (green < blue ? 6 : 0);
                    break;
                case green:
                    hue = (blue - red) / d + 2;
                    break;
                case blue:
                    hue = (red - green) / d + 4;
                    break;
            }
            hue /= 6;
        }
        const hc = new HslColor();
        Object.assign(hc, {
            hue: hue * 360,
            saturation: saturation * 100,
            lightness: lightness * 100,
            alpha: this.alpha
        });
        return hc;
    }

}