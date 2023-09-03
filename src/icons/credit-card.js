/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';

export const CreditCard = ({ height, width, fill }) => (
  <svg
    className="wm-icon-credit-card"
    width={height}
    height={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.907 16.762a.647.647 0 0 1-.643-.651v-4.59h15.472v4.59c0 .36-.289.651-.643.651H4.907zm14.186-9.46c.354 0 .643.291.643.65v1.364H4.264V7.952c0-.359.288-.65.643-.65h14.186zM19.07 5H4.93C3.312 5 2 6.328 2 7.965v7.893c0 1.64 1.312 2.966 2.93 2.966h14.14c1.618 0 2.93-1.328 2.93-2.966V7.965C22 6.325 20.688 5 19.07 5"
      overflow="visible"
      fill={fill}
    />
  </svg>
);

CreditCard.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
};

CreditCard.defaultProps = {
  height: '20px',
  width: '20px',
  fill: '#fff',
};

export default CreditCard;
