import React from "react";
import { HeadSection } from "./HeadSection";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Opportunities from "../Opportunity";
import Learning from "./Learning";
import Course from "./Course";
import Category from "./Category";
import Signin from "./Signin";
import Teachers from "./Teacher";
import Comment from "./Comment";
import News from "./News";
const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col ">
      <Navbar/>
      <HeadSection />
     <Opportunities/>
       <Learning />
       <Course/>
       <Category/>
       <Signin/>
       <Teachers/>
       <Comment/>
       <News/>
      <Footer />
    </div>
  );
};
export default Home;
