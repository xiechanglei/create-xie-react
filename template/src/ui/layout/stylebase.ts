type StylePropertyValue = string | number | undefined

export class StyleBase {
    public styles: Map<string, StylePropertyValue> = new Map<string, StylePropertyValue>()

    style(style: string, value: StylePropertyValue) {
        if (value !== undefined) {
            this.styles.set(style, value)
        }
        return this
    }

    toString() {
        return Array.from(this.styles.keys()).map(key => `${key}:${this.styles.get(key)}`).join(";")
    }
}