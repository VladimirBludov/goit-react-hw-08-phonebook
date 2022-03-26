import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth-selectors';

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  navigateTo: PropTypes.string,
};

export default function PrivateRoute({ component, navigateTo = '/' }) {
  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn ? component : <Navigate to={navigateTo} />;
}
