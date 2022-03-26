import Title from "antd/lib/typography/Title";
import Container from "components/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLoggedIn } from "redux/auth/auth-selectors";

export default function HomePage() {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <Container>
      <div
        style={{
          textAlign: "center",
          fontSize: "30px",
          marginTop: "50px",
        }}
      >
        <Title>Welcome to Phonebook</Title>
        <p>
          Phonebook is a great application for storing contacts that you want to
          hide from prying eyes.
        </p>
        {!isLoggedIn && (
          <p>
            If you want to use the application,
            <Link to="/register"> register </Link> or
            <Link to="/login"> log in </Link>
            with your account.
          </p>
        )}
      </div>
    </Container>
  );
}
