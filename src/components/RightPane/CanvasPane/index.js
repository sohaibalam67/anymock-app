import React from 'react';

// components
import InputBox from '../../commons/InputBox';
import SectionTitle from '../../commons/SectionTitle';

const CanvasPane = () => (
  <>
    <div className="p-3">
      <SectionTitle>CANVAS SETTINGS</SectionTitle>
      <div className="grid grid-cols-2 gap-3 mt-3">
        <InputBox leftModifier="W" />
        <InputBox leftModifier="H" />
      </div>
    </div>
    <div className="p-3">
      <SectionTitle>CANVAS BACKGROUND</SectionTitle>
    </div>
  </>
);

export default CanvasPane;
