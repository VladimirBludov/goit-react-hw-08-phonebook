import { Container } from "./Contacts.styles";
import ContactsItem from "../ContactsItem";
import Loader from "../Loader";
import { useGetContactsQuery } from "redux/contacts/contactsApi";
import {
  getFilter,
  getVisibleContacts,
} from "redux/contacts/contacts-selectors";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function Contacts() {
  const filter = useSelector(getFilter);

  const { contacts, isFetching } = useGetContactsQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => ({
      contacts: data ? getVisibleContacts(data, filter) : [],
      isFetching,
    }),
  });

  const contactsElements = useMemo(
    () =>
      contacts.map(({ id, name, number }) => {
        return <ContactsItem key={id} id={id} name={name} number={number} />;
      }),
    [contacts]
  );

  return (
    <>
      <Container>{contactsElements}</Container>
      {isFetching && <Loader />}
    </>
  );
}
