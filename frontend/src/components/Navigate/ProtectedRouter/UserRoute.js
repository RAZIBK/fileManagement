
import {Navigate} from 'react-router-dom';

const  UserRoute = ({children}) => {
  const user = localStorage.getItem("userToken");
  if(!user){
    return <Navigate to = '/login' replace/>
  }
    return children;
};

export default UserRoute;