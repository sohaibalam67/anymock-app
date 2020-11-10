import React from "react";

// components
import MenuItem from "./MenuItem";

// assets
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as SaveIcon } from "../../assets/images/icons/app/save.svg";
import { ReactComponent as HotkeysIcon } from "../../assets/images/icons/app/book.svg";
import { ReactComponent as ImportIcon } from "../../assets/images/icons/app/import.svg";
import { ReactComponent as ResetIcon } from "../../assets/images/icons/app/refresh.svg";

const Topbar = () => (
  <div className="h-16 w-full flex items-center justify-between bg-charcoal-dark border-b border-charcoal-light">
    <div className="ml-4 mr-12 w-12 flex items-center justify-center">
      <Logo height={32} width={32} />
    </div>
    <div className="grid grid-cols-4 gap-4">
      <MenuItem icon={<ImportIcon height={16} width={16} />} title="Import" />
      <MenuItem icon={<SaveIcon height={16} width={16} />} title="Save" />
      <MenuItem icon={<ResetIcon height={16} width={16} />} title="Reset" />
      <MenuItem icon={<HotkeysIcon height={16} width={16} />} title="Hotkeys" />
    </div>
    <div className="mr-4">
      <button className="text-white text-sm font-bold bg-indigo-600 px-8 py-2 rounded-full focus:outline-none">
        Export
      </button>
    </div>
  </div>
);

export default Topbar;
