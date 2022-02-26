import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { Label, Filter } from './FindContacts.styles';

export default function FindContacts() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <Label>
      Find contacts by name
      <Filter value={filter} onChange={onChange} />
    </Label>
  );
}
