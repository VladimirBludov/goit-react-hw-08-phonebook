import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { Container } from './Contacts.styles';
import ItemContact from './ItemContact';

export default function Contacts() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const deleteContact = id => dispatch(actions.deleteContact(id));

  // const getVisibleContacts = () => {
  //   const optimizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(optimizedFilter)
  //   );
  // };

  return (
    <Container>
      {contacts.map(({ id, name, number }, index) => {
        return (
          <ItemContact
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
