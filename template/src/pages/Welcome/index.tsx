import {useMount} from "@/common/react.hooks"
import {notify} from "@/components/NotificationCenter/handler"
import {useTestActions, useTestSelector} from "@/store/test.store"

export const Welcome = () => {
    const {incremented, decremented} = useTestActions()
    const user = useTestSelector()
    useMount(() => notify("welcome to use xie-react to create react + ts project"))
    return <div>
        <div>welcome to use xie-react to create react + ts project</div>
        <div> test value:{user.value}</div>
        <button onClick={() => incremented()}>click for increment</button>
        <button onClick={() => decremented()}>click for decremented</button>
    </div>
}