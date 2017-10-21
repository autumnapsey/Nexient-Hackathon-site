import React from 'react';
import PropTypes from 'prop-types';

const Member = ({ onClick, name, rank }) => (
  <li
    onClick={onClick}
  >
    {name} - {rank}
  </li>
);

Member.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
};

export default Member;
