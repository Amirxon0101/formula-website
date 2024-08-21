import { Breadcrumb } from "antd";
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";

const TeachersDetails: React.FC = () => {
const navigate = useNavigate()

  return (
   <div>
    <Navbar/>
    <div>
      <div>
        <div>
        <Breadcrumb
    items={[
      {
        title: 'Home',
        className:'cursor-pointer',
        onClick: () => navigate('/'),
      },
      {
        title: 'Teachers',
        className:'cursor-pointer',
        onClick: () => navigate('/Teachers'),
      },
      {
        title:'Teachers details',
      },
     
    ]}
  />
  <h2>ANJELINE
  JOE</h2>
        </div>
        <div>
          <p>online platforms often offer mico-courses or modules
allowing learners to focus on specific topics of interest and
acquire targeted skills</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default TeachersDetails;
