import PropTypes, { element } from 'prop-types';
import Box from 'components/Box/Box';

export default function Section({ title, children }) {
  return (
    <Box as="section" m="0 auto" pl={6} mt={4}>
      <h2>{title}</h2>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(element),
    PropTypes.element,
  ]),
};
