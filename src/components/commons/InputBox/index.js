import React, {useRef, useState, useEffect} from 'react';

function InputBox({
  value = '',
  placeholder = '',
  leftModifier = '',
  rightModifier = '',
  onChange = (f) => f,
}) {
  const [_value, setValue] = useState('');

  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      // Mount logic
      mounted.current = true;
      setValue(value);
    } else {
      // Update logic
      setValue(value);
    }
  }, [value]);

  return (
    <div className="relative w-full bg-gray-200 rounded dark:bg-gray-800">
      <span className="absolute block top-0 left-0 text-xs font-medium w-6 h-8 leading-8 text-center text-gray-500 dark:text-gray-400">
        {leftModifier}
      </span>
      <span className="absolute block top-0 right-0 text-xs font-medium w-6 h-8 leading-8 text-center text-gray-500 dark:text-gray-400">
        {rightModifier}
      </span>
      <input
        className="relative block top-0 left-0 float-left border-0 m-0 pl-6 pr-6 py-4 w-full text-xs font-medium bg-transparent box-border h-7 dark:text-gray-50"
        onChange={(event) => {
          onChange(event.target.value);
          setValue(event.target.value);
        }}
        onFocus={(event) => {
          event.target.select();
        }}
        onBlur={() => {
          onChange(_value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            onChange(_value);
          }
        }}
        placeholder={placeholder}
        value={_value}
      />
    </div>
  );
}
export default InputBox;
