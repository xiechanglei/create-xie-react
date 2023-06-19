import styled from "styled-px2vw-plugin"
import {createPortal} from "react-dom"
import {RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"
import {NotificationCenter} from "@/components/NotificationCenter"
import {router} from "@/router/router"
import {store} from "@/store"

const AppWrapper = styled.div`
  font-size: 14px;
  width: 100%;
  height: 100vh;
`
const MarginDisappear = styled.div`
  height: 0;
  margin: 0;
  overflow: hidden;
  content: "";
`

export const App = () => {
    return <AppWrapper>
        <MarginDisappear/>
        {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
        {createPortal(<NotificationCenter/>, document.getElementById("messageContainer")!)}
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </AppWrapper>
}
export default App