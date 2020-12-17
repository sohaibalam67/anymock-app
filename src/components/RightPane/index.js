import React from 'react';
import CanvasPane from './CanvasPane';

const RightPane = () => (
  <div
    className="w-64 bg-panel-light dark:bg-panel-dark"
    style={{height: 'calc(100vh - 4rem)'}}
  >
    <CanvasPane />
  </div>
);

export default RightPane;
