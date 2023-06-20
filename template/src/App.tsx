import styled from "styled-px2vw-plugin"
import {RouterProvider} from "react-router-dom"
import {Provider} from "react-redux"
import {NotificationCenter} from "@/components/NotificationCenter"
import {router} from "@/router/router"
import {store} from "@/store"

const AppWrapper = styled.div`
  font-size: 14px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
const MarginDisappear = styled.div`
  height: 0;
  margin: 0;
  overflow: hidden;
  content: "";
`

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

export const App = () => {
    return <AppWrapper>
        <MarginDisappear/>
        <NotificationCenter/>
        <PageContainer>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </PageContainer>
    </AppWrapper>
}
export default App