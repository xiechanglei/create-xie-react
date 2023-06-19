import {createSlice} from "@reduxjs/toolkit"
import {creatActionsHook, createSelectorHook} from "@/store/handler"

const initialState = {value: 0}

const {actions, reducer, name} = createSlice({
    name: "test",
    initialState,
    reducers: {
        incremented: state => {
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

//提供给store用以注册reducer
export const TestReducer = {[name]: reducer}

//提供给组件用以快捷的获取dispatchAction
export const useTestActions = creatActionsHook(actions)

//描述多一炮action

//提供给组件用于快捷的获取state
export const useTestSelector = createSelectorHook<typeof initialState>(name)