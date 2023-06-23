import {useTestActionsWithNoParams, useTestSelector} from "./test.store"

export const ReduxStorePreview = () => {
    const value = useTestSelector(state => state.value)
    const {incremented, decremented} = useTestActionsWithNoParams()
    return <div>
        <span>the value in test store:{value} </span>
        <button onClick={incremented}>increment</button>
        <button onClick={decremented}>decrement</button>
    </div>
}