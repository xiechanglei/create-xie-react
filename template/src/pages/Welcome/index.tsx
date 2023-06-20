import {useMount} from "@/common/react.hooks"
import {notify} from "@/components/NotificationCenter/handler"
import {useTestActions, useTestSelector} from "@/store/test.store"
import {Button} from "@/ui/button"

export const Welcome = () => {
    const {incremented, decremented} = useTestActions()
    const user = useTestSelector()
    useMount(() => notify("welcome to use xie-react to create react + ts project"))
    return <div>
        <div>welcome to use xie-react to create react + ts project</div>
        <div> test value:{user.value}</div>

        add<Button onClick={() => incremented()} text="Add"/>

        sub<Button onClick={() => decremented()} text="Sub"/>
    </div>
}