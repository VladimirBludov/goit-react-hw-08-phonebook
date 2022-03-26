import { useEffect } from "react";
import PropTypes from "prop-types";
import { Backdrop, ModalWindow } from "./Modal.styles";
import { createPortal } from "react-dom";
import Title from "antd/lib/typography/Title";
// import Loader from 'components/Loader';

const modalRoot = document.querySelector("#modal-root");
const html = document.querySelector("html");

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({ title, children, onClose }) {
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handelKeyDownEsc = e => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handelKeyDownEsc);
    html.classList.add("disable-scroll");

    return () => {
      window.removeEventListener("keydown", handelKeyDownEsc);
      html.classList.remove("disable-scroll");
    };
  }, [onClose]);

  const handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handelBackdropClick}>
      <ModalWindow>
        <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
          {title}
        </Title>
        {children}
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
}
