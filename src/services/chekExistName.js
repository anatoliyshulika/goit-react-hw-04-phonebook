export default function chekExistName(name, contacts) {
  const normalizeName = name.toLowerCase();
  const existingContacts = contacts.filter(
    contact => contact.name.toLowerCase() === normalizeName
  );

  if (existingContacts.length) {
    return true;
  } else {
    return false;
  }
}
