import {NoticeMessage} from "./handler"
import {useReducer} from "react"

/**
 * 将组件中的数据管理与操作等逻辑单独抽离成一个data.ts来管理，这里的数据逻辑比较复杂，使用了useReducer管理数据
 */
const ADD_NOTICE = 'ADD_NOTICE'
const REMOVE_NOTICE = 'REMOVE_NOTICE'
const reducer = (state: NoticeMessage[], {type, payload}: { type: string, payload: NoticeMessage }) => {
    switch (type) {
        case ADD_NOTICE:
            return [...state, payload];
        case REMOVE_NOTICE:
            return state.filter(notice => notice.id !== payload.id);
        default:
            return state;
    }
}

export const useNoticeReducer = () => {
    const [notices, dispatch] = useReducer(reducer, []);
    const addNotice = (notice: NoticeMessage) => dispatch({type: ADD_NOTICE, payload: notice});
    const removeNotice = (notice: NoticeMessage) => dispatch({type: REMOVE_NOTICE, payload: notice});
    return {notices, addNotice, removeNotice};
}