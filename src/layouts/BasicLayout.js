import React from 'react';
import PropTypes from 'prop-types';

const BasicLayout = ({ children }) => (
  <div>
    BasicLayout
    {children}
  </div>
);

BasicLayout.propTypes = {
  children: PropTypes.node,
};

BasicLayout.defaultProps = {
  children: null,
};

export default BasicLayout;
