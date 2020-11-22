import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({children}) => {
  return (
    <h2 className="text-xs font-bold text-gray-800 dark:text-white">
      {children}
    </h2>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default SectionTitle;
