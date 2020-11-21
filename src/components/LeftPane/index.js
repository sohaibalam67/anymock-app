import React from 'react';

const LeftPane = () => (
  <div
    className="h-screen w-64 bg-panel-light dark:bg-panel-dark border-r border-panelBorder-light dark:border-panelBorder-dark"
    style={{height: 'calc((100vh - 4rem) - 1px)'}}
  ></div>
);

export default LeftPane;
