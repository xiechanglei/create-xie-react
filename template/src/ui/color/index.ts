import {ThemeColor} from "./ThemeColor"

const colorMap = new Map<string, ThemeColor>()

const registerColor = (name: string, hexColor: string) => {
    const themeColor = ThemeColor.of(hexColor)
    colorMap.set(name, themeColor)
    return themeColor
}
export const getThemeColor = (name: string) => colorMap.get(name)

export const successColor = registerColor("success", "#2e7d32")

export const infoColor = registerColor("info", "#0288d1")

export const warnColor = registerColor("warn", "#ed6c02")

export const errorColor = registerColor("error", "#d32f2f")
