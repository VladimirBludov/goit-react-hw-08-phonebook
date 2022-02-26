import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { Container } from './Contacts.styles';
import ContactsItem from '../ContactsItem';

export default function Contacts() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const deleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <Container>
      {visibleContacts.map(({ id, name, number }, index) => {
        return (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            index={index}
            deleteContact={() => deleteContact(id)}
          />
        );
      })}
    </Container>
  );
}
