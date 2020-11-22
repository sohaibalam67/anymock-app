import React from 'react';

// components
import Topbar from '../../components/Topbar';
import LeftPane from '../../components/LeftPane';
import WorkArea from '../../components/WorkArea';
import RightPane from '../../components/RightPane';

const Editor = () => (
  <div className="w-screen h-screen bg-white flex flex-col">
    <Topbar />
    <div className="flex z-0">
      <LeftPane />
      <WorkArea />
      <RightPane />
    </div>
  </div>
);

export default Editor;
