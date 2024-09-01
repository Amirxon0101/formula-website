import { lazy, LazyExoticComponent } from "react";

const Home = lazy(() => import("../component/Home/index"));




const About = lazy(() => import("../component/About"));

const Register = lazy(() => import("../component/Contact"));
const Login = lazy(() => import("../component/Login"));
const Profil = lazy(() => import("../component/Profil"));
const Teachers  = lazy(()=>import("../component/Teachers"))
const TeachersDetails = lazy(()=>import('../component/Teachers/Teacherdetails'))
const Blogs  = lazy(()=>import("../component/Blogs"))
const Blogsdeatils  = lazy(()=>import("../component/Blogs/Blogdetails"))
const Courses  = lazy(()=>import("../component/Courses"))
const Contact  = lazy(()=>import("../component/Contact"));
const SingIn = lazy(()=>import('../component/SignIn'));
const SignUp = lazy(() => import('../component/SignUp'))
const CourseDetails = lazy(() => import('../component/Courses/CourseDetails'))

interface RouteData {
  id: number;
  path: string;
  component: LazyExoticComponent<React.ComponentType<any>>;
}

export const Data: RouteData[] = [
  {
    id: 1,
    path: "/",
    component: Home,
  },

 


  {
    id: 12,
    path: "/About",
    component: About,
  },

  {
    id: 14,
    path: "/register",
    component: Register,
  },
  {
    id: 15,
    path: "/login",
    component: Login,
  },

  {
    id: 17,
    path: "/profil",
    component: Profil,
  },
  {
    id: 18,
    path: "/profil/sozlamalar",
    component: Profil,
  },
  {
    id: 18,
    path: "/profil/taklif",
    component: Profil,
  },
  {
    id: 19,
    path: "/profil/barcha-murojatlar",
    component: Profil,
  },
  {
    id: 20,
    path: "/profil/imkoniyat-buyicha-murojatlar",
    component: Profil,
  },
  {
    id:21,
    path:"/Teachers",
    component:Teachers
  },
  {
    id:22,
    path:"/Teachers/details",
    component:TeachersDetails
  },
  {
    id:26,
    path:"/Blogs",
    component:Blogs
  },
  {
    id:27,
    path:"/Blogs/details",
    component:Blogsdeatils
  },
  {
    id:77,
    path:"/Courses",
    component:Courses
  },
  {
    id:78,
    path:"/details",
    component:CourseDetails
  },
    {id:23,
    path:"/Contact",
    component:Contact
  },
  {
    id:24,
    path:"/SignIn",
    component: SingIn
  },
  {
    id:25,
    path:"/SignUp",
    component: SignUp
  },
  


];
