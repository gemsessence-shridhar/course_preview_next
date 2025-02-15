import React from 'react';
import PropTypes from 'prop-types';

const RoundedChevronRight = ({ fillColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={fillColor}><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"/></svg>
);

RoundedChevronRight.propTypes = {
  fillColor: PropTypes.string,
};

RoundedChevronRight.defaultProps = {
  fillColor: '#007bff',
};

export default RoundedChevronRight;
