/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import PropTypes from 'prop-types';

export const Atm = ({ height, width, fill }) => (
  <svg
    className="wm-icon-atm"
    width={height}
    height={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.844 10.914c-.625 0-1.133-.527-1.133-1.178V6.524H4.266v3.212c0 .65-.507 1.178-1.133 1.178S2 10.387 2 9.736v-4.39c0-.651.507-1.179 1.133-1.179h17.711c.626 0 1.133.528 1.133 1.178v4.39c0 .652-.507 1.179-1.133 1.179zM17.147 20H6.853c-.596 0-1.08-.504-1.08-1.124V8.018h2.16v9.734h8.134V8h2.16v10.876c0 .62-.484 1.124-1.08 1.124zm-2.01-12c0 1.767-1.378 3.2-3.078 3.2S8.981 9.767 8.981 8h6.156z"
      overflow="visible"
      fill={fill}
    />
  </svg>
);

Atm.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
};

Atm.defaultProps = {
  height: '20px',
  width: '20px',
  fill: '#fff',
};

export default Atm;
