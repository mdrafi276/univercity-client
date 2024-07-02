import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateStudent from "../pages/Student/CreateStudent";
import AdminLayout from "../components/layout/AdminLayout";
import CreateFaculty from "../pages/Faculty/CreateFaculty";

const router = createBrowserRouter([
    {
        path: '/home',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'dashboard',
                element: <AdminDashboard />
            },
            {
                path: 'createStudent',
                element: <CreateStudent />
            },
            {
                path: 'createFaculty',
                element: <CreateFaculty />
            },
        ]
    },

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
])

export default router;