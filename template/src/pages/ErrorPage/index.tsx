import {useRouteError} from "react-router-dom"

export const ErrorPage = () => {
    const {status} = useRouteError() as never
    if (status === 404) {
        return <div>404</div>
    }
    return <div>unknown error</div>
}