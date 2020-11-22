import React from 'react';
import PropTypes from 'prop-types';

const ObjectButton = (props) => {
  let {icon = '💥', title = 'Item', ...rest} = props;

  return (
    <button
      className="text-xs font-medium flex flex-col items-center justify-center py-3 focus:outline-none rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
      {...rest}
    >
      {icon}
      <span className="pt-2">{title}</span>
    </button>
  );
};

ObjectButton.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object,
  ]),
  title: PropTypes.string,
};

export default ObjectButton;
