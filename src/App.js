import SignInForm from "./component/forms/Sign-in-form";
import SignUp from "./component/forms/SignUp";
import Adminlogin from './component/AdminDeshboard/Adminlogin';
// import Forget from "./component/forms/Forget";
// import Change from "./component/forms/Change";
import Deshborddd from './component/Deshboard';

// users import section start

import Deshbord from "./component/userdeshboard/deshbord";
import Createcomp from './component/userdeshboard/Createcomp';
import Allcomp from './component/userdeshboard/AllComp';
import Success from './component/userdeshboard/successcomp';
import Unsuccess from './component/userdeshboard/unsuccesscomp';
import About from './component/reused-component/About';
import Contact from './component/reused-component/Contact';

// users import section end

// teacher import section start

import Teacherdeshboard from './component/TeacherDeshboard/Teacherdeshboard';
import Complant from './component/TeacherDeshboard/Complant';
import Handlecompt from './component/TeacherDeshboard/Handlecomp';
import Managecompt from './component/TeacherDeshboard/Managecomp';
import Messagecomp from './component/TeacherDeshboard/Messagecomp';

// teacher import section end

// Admin import section start
  import Admindesh from './component/AdminDeshboard/Admindesh';
  import AllAdmincomp from './component/AdminDeshboard/AllAdmincomp';
  import Handlecompa from './component/AdminDeshboard/Handlecomp';
  import Managecompa from './component/AdminDeshboard/Managecomp';
  import Teachersignup from './component/AdminDeshboard/Teachersignup';

// Admin import section end
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return ( <>
<Router>
  <Routes>

    {/* // users rout start */}
    
  <Route path="/Home" element = {<Deshbord />}  />
  <Route path="/Createcomp" element = {<Createcomp />}  />
  <Route path="/Allcomp" element = {<Allcomp />}  />
  <Route path="/successcomp" element = {<Success />}  />
  <Route path="/unsuccesscomp" element = {<Unsuccess />}  />
  <Route path="/About" element = {<About path = {"/Home"} path1 = {"/About"} path2 = {"/Contact"} />}  />
  <Route path="/Contact" element = {<Contact path = {"/Home"} path1 = {"/About"} path2 = {"/Contact"} />}  />

{/* // users rout end */}

{/* // Teachers rout start */}

<Route path="/HomeT" element = {<Teacherdeshboard />}  /> 
<Route path="/AboutT" element = {<About path = {"/HomeT"} path1 = {"/AboutT"} path2 = {"/ContactT"}  />}  /> 
<Route path="/ContactT" element = {<Contact path = {"/HomeT"} path1 = {"/AboutT"} path2 = {"/ContactT"} />}  /> 
<Route path="/ComplantT" element = {<Complant />}  /> 
<Route path="/HandlecompT" element = {<Handlecompt />}  /> 
<Route path="/ManagecompT" element = {<Managecompt />}  /> 
<Route path="/MessagecompT" element = {<Messagecomp />}  /> 


{/* // Teachers rout end */}

{/* // admin rout start */}
<Route path="/HomeA" element = {<Admindesh />}  /> 
<Route path="/AboutA" element = {<About path = {"/HomeA"} path1 = {"/AboutA"} path2 = {"/ContactA"} />}  /> 
<Route path="/ContactA" element = {<Contact path = {"/HomeA"} path1 = {"/AboutA"} path2 = {"/ContactA"}/>}  /> 
<Route path="/ComplantA" element = {<AllAdmincomp />}  /> 
<Route path="/HandlecompA" element = {<Handlecompa />}  /> 
<Route path="/ManagecompA" element = {<Managecompa />}  /> 
<Route path="/Teachersignup" element = {<Teachersignup />}  /> 

{/* // admin rout end */}


{/* // form rout start */}
<Route path="/" element = {<Deshborddd />}  />
<Route path="/signin" element = {<SignInForm />}  />
<Route path="/signup" element = {<SignUp />}  />
<Route path="/Asignin" element = {<Adminlogin />}  />
{/* // form rout end */}

  </Routes>
</Router>
</>
  );
}

export default App;
 