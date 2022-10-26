import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://tech-educa-three.vercel.app/courses')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://tech-educa-three.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`https://tech-educa-three.vercel.app/courses/${params.id}`)
            },
        ]
    }
]);
