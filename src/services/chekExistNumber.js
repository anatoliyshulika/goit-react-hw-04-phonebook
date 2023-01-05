export default function chekExistNumber(number, contacts) {
  const existingContacts = contacts.filter(
    contact => contact.number === number
  );

  if (existingContacts.length) {
    return true;
  } else {
    return false;
  }
}
