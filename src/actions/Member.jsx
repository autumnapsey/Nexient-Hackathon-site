import React from 'react';
import PropTypes from 'prop-types';

const member = ({ onClick, name, rank }) => (
  <li
    onClick={onClick}
  >
    {name} - {rank}
  </li>
);

member.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
};

export default memberActions;
