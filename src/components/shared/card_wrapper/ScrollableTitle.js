import React from 'react';
import PropTypes from 'prop-types';

const ScrollableTitle = ({ children }) => (
  <div>
    {children}
  </div>
);

ScrollableTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ScrollableTitle;
