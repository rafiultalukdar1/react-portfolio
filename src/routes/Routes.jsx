import { createBrowserRouter } from "react-router";
import Root from "../components/Layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/services',
                Component: Services
            },
            {
                path: '/projects',
                Component: Projects
            },
            {
                path: '/contact',
                Component: Contact
            },
            
        ]
    }
]);