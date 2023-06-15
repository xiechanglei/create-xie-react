import {NotificationCenter} from "@/components/NotificationCenter"
import {createPortal} from "react-dom"
import {Welcome} from "@/components/Welcome"


export const App = () => {
    return <>
        <Welcome/>
        {createPortal(<NotificationCenter/>, document.getElementById("messageContainer")!)}
    </>;
}
export default App