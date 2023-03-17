import Main from "../pages/main";
import Services from "../pages/services";
import Doctors from "../pages/doctors";
import About from "../pages/about";
import Contacts from "../pages/contacts";
import {Navigate} from 'react-router-dom'
export default [
    {
        path:'/',
        element: <Main />,
    },
    {
        path:'/services',
        element: <Services />
    },
    {
        path: '/doctors',
        element: <Doctors />
    },
    {
        path:'/abouts',
        element: <About />
    },
    {
        path:'/contacts',
        element: <Contacts />
    },
    // {
    //     path:'/',
    //     element: <Navigate to='/home'/>
    // }
]