import {createHashRouter, RouteObject} from "react-router-dom"
import {Welcome} from "@/pages/Welcome"

const routerOptions: RouteObject[] = [{
    path: "/",
    element: <Welcome/>
}]

export const router = createHashRouter(routerOptions)