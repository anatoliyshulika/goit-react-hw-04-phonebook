import PropTypes from 'prop-types';
import { ListItem, Button } from './Contact.styled';
import Box from 'components/Box/Box';

export default function Contact({ contact, onDelete }) {
  const { id, name, number } = contact;
  return (
    <ListItem>
      <div>{name}:</div>
      <Box
        width={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {number}
        <Button type="button" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </Box>
    </ListItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
