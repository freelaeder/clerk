import Main from "../pages/main";
import Services from "../pages/services";
import Doctors from "../pages/doctors";
import About from "../pages/about";
import Contacts from "../pages/contacts";
import SignUp from "../components/signup/signup";
import DoctorDisplay from "../components/doctors";
import ServicesPage from "../components/services";
import SignIn from "../components/signin";

export default [
    {
        path: '/',
        element: <Main/>,
    },
    {
        path: '/services',
        element: <Services/>
    },
    {
        path: '/services/:id',
        element: <ServicesPage />
    },
    {
        path: '/doctors',
        element: <Doctors/>
    },
    {
        path: '/doctors/:id',
        element: <DoctorDisplay/>
    },

    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contacts',
        element: <Contacts/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path:'/signin',
        element: <SignIn />
    }
    // {
    //     path:'/',
    //     element: <Navigate to='/home'/>
    // }
]