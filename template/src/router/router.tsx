import {createHashRouter, RouteObject} from "react-router-dom"
import {Welcome} from "@/pages/Welcome"
import {ErrorPage} from "@/pages/ErrorPage"

const routerOptions: RouteObject[] = [{
    path: "/",
    element: <Welcome/>,
    errorElement: <ErrorPage/>
}]

export const router = createHashRouter(routerOptions)