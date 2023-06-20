import {StyleBase} from "@/ui/layout/stylebase"

type DirectionProps = "row" | "column" | "row-reverse" | "column-reverse"
type JustifyContentProps = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
type AlignItemProps = "stretch" | "center" | "flex-start" | "flex-end" | "baseline"
type AlignContentProps = "stretch" | "center" | "flex-start" | "flex-end" | "space-between" | "space-around"

class FlexContainerStyle extends StyleBase {
    /**
     * flex容器主轴方向上的排列方向
     * row（默认值）：主轴为水平方向，起点在左端。
     * row-reverse：主轴为水平方向，起点在右端。
     * column：主轴为垂直方向，起点在上沿。
     * column-reverse：主轴为垂直方向，起点在下沿。
     */
    direction = (direction: DirectionProps) => this.style('flex-direction', direction)
    /**
     * flex容器内各项在主轴方向上的对齐方式
     * flex-start（默认值）：左对齐
     * flex-end：右对齐
     * center： 居中
     * space-between：两端对齐，项目之间的间隔都相等。
     * space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
     * space-evenly：待测试
     */
    justifyContent = (justifyContent: JustifyContentProps) => this.style('justify-content', justifyContent)
    /**
     * flex容器内各项在交叉轴方向上的对齐方式
     * flex-start：交叉轴的起点对齐。
     * flex-end：交叉轴的终点对齐。
     * center：交叉轴的中点对齐。
     * baseline: 项目的第一行文字的基线对齐。
     * stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
     */
    alignItems = (alignItems: AlignItemProps) => this.style('align-items', alignItems)

    /**
     * 多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
     * flex-start：与交叉轴的起点对齐。
     * flex-end：与交叉轴的终点对齐。
     * center：与交叉轴的中点对齐。
     * space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
     * space-around：每根轴线两侧的间隔都相等。
     * stretch（默认值）：轴线占满整个交叉轴。
     */
    alignContent = (alignContent: AlignContentProps) => this.style('align-content', alignContent)
    /**
     * flex容器内的子元素是否换行显示
     */
    wrap = () => this.style('flex-wrap', 'wrap')
    nowrap = () => this.style('flex-wrap', 'nowrap')

    constructor(direction?: DirectionProps) {
        super()
        this.styles.set('display', "flex")
        direction && this.direction(direction)
    }
}

/**
 * 以api的像是创建一个flex容器的样式表字符串，给styled-component使用
 * 如：
 *  1.styled.div`${flex("row");}`
 *
 *  2.styled.div`${flex("row").justify("center");}`
 *
 *  3.const flexCenterStyle = flex("column").justify("center").alignItems("center")
 *    styled.div`${flexCenterStyle};`
 *
 * @param direction
 */
export const flex = (direction?: DirectionProps) => new FlexContainerStyle(direction)

class FlexItemStyle extends StyleBase {
    /**
     * flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
     */
    grow = (grow: number) => this.style('flex-grow', grow)
    /**
     * flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
     */
    shrink = (shrink: number) => this.style('flex-shrink', shrink)
    /**
     * flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
     */
    basis = (basis: string) => this.style('flex-basis', basis)

    constructor(grow?: number, shrink?: number, basis?: string) {
        super()
        grow && this.grow(grow)
        shrink && this.shrink(shrink)
        basis && this.basis(basis)
    }
}

export const flexItem = (grow?: number, shrink?: number, basis?: string) => new FlexItemStyle(grow, shrink, basis)