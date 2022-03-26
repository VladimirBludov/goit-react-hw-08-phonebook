import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth-selectors';

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  navigateTo: PropTypes.string,
  restricted: PropTypes.bool,
};

export default function PublicRoute({
  component,
  navigateTo = '/',
  restricted = false,
}) {
  const isLoggedIn = useSelector(getLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;

  return !shouldNavigate ? component : <Navigate to={navigateTo} />;
}
