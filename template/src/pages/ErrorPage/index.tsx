import {useRouteError} from "react-router-dom"
import {ErrorCode} from "./style"

export const ErrorPage = () => {
    const {status} = useRouteError() as never
    if (status === 404) {
        return <ErrorCode>404</ErrorCode>
    }
    return <ErrorCode>unknown error</ErrorCode>
}