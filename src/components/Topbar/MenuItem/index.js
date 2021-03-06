import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  let {icon = '💥', title = 'Item', ...rest} = props;
  return (
    <button
      className="w-12 h-12 flex flex-col items-center justify-center font-medium text-gray-600 hover:text-black text-xs focus:outline-none dark:text-gray-400 dark:hover:text-white"
      {...rest}
    >
      {icon}
      {title}
    </button>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object,
  ]),
  title: PropTypes.string,
};

export default MenuItem;
