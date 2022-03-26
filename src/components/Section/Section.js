import PropTypes from "prop-types";
import { SectionContainer, TitleStyled } from "./Section.styles";

export default function Section({ title, children }) {
  return (
    <SectionContainer>
      {title && <TitleStyled>{title}</TitleStyled>}
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
