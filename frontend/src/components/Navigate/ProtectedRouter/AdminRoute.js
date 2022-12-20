
import {Navigate} from 'react-router-dom';



const  AdminRoute = ({children}) => {
  const client = localStorage.getItem("adminToken");
  if(!client){
    return <Navigate to = '/login' replace/>
  }
    return children;
};

export default AdminRoute;