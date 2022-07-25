import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/" replace />;
};
export default PrivateRoute;