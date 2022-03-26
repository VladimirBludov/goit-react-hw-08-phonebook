export const getFilter = state => state.filter.value;

export const getVisibleContacts = (contacts, filter) => {
  const optimizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(optimizedFilter)
  );

  const sortedContacts = filteredContacts.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  return sortedContacts;
};

export const checkContact = (contacts, newName, newNumber) => {
  const normalizedName = newName.toLowerCase();

  return contacts.find(
    ({ name, number }) =>
      name.toLowerCase() === normalizedName && number === newNumber
  );
};
