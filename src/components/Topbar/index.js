import React from 'react';

// redux
import {connect} from 'react-redux';
import {setDarkMode} from '../../store/actions/setting';

// components
import MenuItem from './MenuItem';

// assets
import Sun from '../../assets/images/icons/sun';
import Moon from '../../assets/images/icons/moon';
import SaveFile from '../../assets/images/icons/save';
import Refresh from '../../assets/images/icons/refresh';
import ImportFile from '../../assets/images/icons/import';
import QuestionMark from '../../assets/images/icons/questionMark';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';

const Topbar = ({isDarkModeActive = false, setDarkMode = (f) => f}) => (
  <div className="h-16 w-full flex items-center justify-between bg-panel-light shadow-thin-b-light dark:bg-panel-dark dark:shadow-thin-b-dark z-10">
    <div className="ml-4 mr-12 w-12 flex items-center justify-center">
      <Logo height={32} width={32} />
    </div>
    <div className="grid grid-cols-5 gap-4">
      <MenuItem icon={<ImportFile height={18} width={18} />} title="Import" />
      <MenuItem icon={<SaveFile height={18} width={18} />} title="Save" />
      <MenuItem icon={<Refresh height={18} width={18} />} title="Reset" />
      <MenuItem
        icon={<QuestionMark height={18} width={18} />}
        title="Hotkeys"
      />
      <MenuItem
        icon={
          isDarkModeActive ? (
            <Sun height={18} width={18} />
          ) : (
            <Moon height={18} width={18} />
          )
        }
        title={isDarkModeActive ? 'Light' : 'Dark'}
        onClick={() => {
          setDarkMode(!isDarkModeActive);
        }}
      />
    </div>
    <div className="mr-4">
      <button className="text-white text-xs font-bold bg-blue-600 px-8 py-2 rounded-md focus:outline-none">
        Export
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  isDarkModeActive: state.settings.isDarkModeActive,
});

const mapDispatchToProps = (dispatch) => ({
  setDarkMode: (value) => dispatch(setDarkMode(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
