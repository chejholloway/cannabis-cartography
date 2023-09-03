/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';

export const Photo = ({ height, width, fill }) => (
  <svg
    className="wm-icon-photo"
    width={height}
    height={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.68 11.828c.93 0 1.683-.697 1.683-1.556 0-.859-.753-1.556-1.682-1.556-.93 0-1.682.697-1.682 1.556 0 .86.753 1.556 1.682 1.556m12.262-4.956v9.085l-4.866-5.045a.93.93 0 0 0-1.299-.016l-3.544 3.472-1.01-.757a.936.936 0 0 0-1.143.026l-4.21 3.491V6.872h16.072zm.738-1.707H3.131c-.623 0-1.13.447-1.13.998v11.663c0 .55.507.998 1.13.998h17.55c.624 0 1.13-.448 1.13-.998V6.163c0-.551-.506-.998-1.13-.998z"
      overflow="visible"
      fill={fill}
    />
  </svg>
);

Photo.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
};

Photo.defaultProps = {
  height: '20px',
  width: '20px',
  fill: '#fff',
};

export default Photo;
