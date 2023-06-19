import {useMount} from "@/common/react.hooks"
import {notify} from "@/components/NotificationCenter/handler"
import {useTestActions, useTestSelector} from "@/store/test.store"

export const Welcome = () => {
    const {incremented} = useTestActions()
    const user = useTestSelector()
    useMount(() => notify("welcome to use xie-react to create react + ts project"))
    return <div onClick={() => incremented()}>welcome to use xie-react to create react + ts
        project,{user.value}</div>
}