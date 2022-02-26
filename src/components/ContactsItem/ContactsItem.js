import PropTypes from 'prop-types';
import {
  ButtonDelete,
  IndexNumber,
  Container,
  Name,
  Number,
} from './ContactsItem.styles';

export default function ContactsItem({ name, number, index, deleteContact }) {
  return (
    <Container>
      <IndexNumber>{`${index + 1}.`}</IndexNumber>
      <Name>{name}: </Name>
      <Number>{number}</Number>
      <ButtonDelete onClick={deleteContact}>Delete</ButtonDelete>
    </Container>
  );
}

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
