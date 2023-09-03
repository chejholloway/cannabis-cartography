/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';

export const SolidLock = ({ height, width, fill }) => (
  <svg
    className="wm-icon-solid-lock"
    width={height}
    height={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.268 18.408c.196.19.45.294.715.294.265 0 .519-.105.715-.294l3.612-3.496c.469-.454.469-1.25 0-1.704a1.025 1.025 0 0 0-.715-.294c-.265 0-.52.105-.715.294l-2.672 2.587a.306.306 0 0 1-.45 0l-.702-.68a1.025 1.025 0 0 0-.715-.293c-.266 0-.52.104-.715.293l-.092.09v.012a1.21 1.21 0 0 0 .092 1.602l1.642 1.59zM5.7 19.551h12.6v-7.423H5.7v7.423zM8.246 9.48V7.803c0-1.9 1.633-3.446 3.64-3.446 2.006 0 3.639 1.546 3.639 3.446v1.68c0 .132.024.259.067.378H8.18c.042-.119.066-.246.066-.378zm11.384.379h-1.683c.042-.119.066-.246.066-.378v-1.68c0-3.2-2.749-5.802-6.127-5.802-3.379 0-6.128 2.603-6.128 5.802v1.68c0 .132.024.259.067.378H4.307C3.585 9.86 3 10.414 3 11.097v9.495c0 .683.585 1.237 1.307 1.237H19.63c.72 0 1.306-.554 1.306-1.237v-9.495c0-.683-.585-1.237-1.306-1.237z"
      overflow="visible"
      fill={fill}
    />
  </svg>
);

SolidLock.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
};

SolidLock.defaultProps = {
  height: '20px',
  width: '20px',
  fill: '#fff',
};

export default SolidLock;
