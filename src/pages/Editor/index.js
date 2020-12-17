import React from 'react';

// redux
import {connect} from 'react-redux';

// components
import Topbar from '../../components/Topbar';
import LeftPane from '../../components/LeftPane';
import WorkArea from '../../components/WorkArea';
import RightPane from '../../components/RightPane';

const Editor = ({isDarkModeActive = false}) => (
  <div
    className={`w-screen h-screen bg-white flex flex-col ${
      isDarkModeActive ? 'dark' : ''
    }`}
  >
    <Topbar />
    <div className="flex z-0">
      <LeftPane />
      <WorkArea />
      <RightPane />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  isDarkModeActive: state.settings.isDarkModeActive,
});

export default connect(mapStateToProps)(Editor);
