import Contact from "../pages/Contact";
import Landing from "../pages/Landing";
import Register from "../pages/Register";


export interface routeInterface {
  path: string
  component?: any
  breadcrumb?: Record<string, string>[]
  children?: Array<routeInterface>
}

export const contactRoutes: routeInterface[] = [
  {
    path: "/contact-us",
    component: Contact,
    breadcrumb: [{ title: "Contact Us", route: "/contact-us" }],
  },
];

export const registerRoutes: routeInterface[] = [
  {
    path: "/register",
    component: Register,
    breadcrumb: [{ title: "Register", route: "/register" }],
  },
];

export const landingRoutes: routeInterface[] = [
  {
    path: "/",
    component: Landing,
    breadcrumb: [{ title: "Landing", route: "/" }],
  },
];


