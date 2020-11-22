import React from 'react';

// components
import ObjectButton from './ObjectButton';

// assets
import Browser from '../../assets/images/icons/browser';
import Phone from '../../assets/images/icons/phone';
import Laptop from '../../assets/images/icons/laptop';
import Tablet from '../../assets/images/icons/tablet';
import Watch from '../../assets/images/icons/watch';
import Display from '../../assets/images/icons/display';
import Text from '../../assets/images/icons/text';
import Image from '../../assets/images/icons/image';
import Shape from '../../assets/images/icons/shape';

const LeftPane = () => (
  <div
    className="h-screen w-64 text-gray-800 dark:text-white bg-panel-light dark:bg-panel-dark"
    style={{height: 'calc(100vh - 4rem)'}}
  >
    <div className="grid grid-cols-3 gap-3 p-3">
      <ObjectButton icon={<Browser height={22} width={22} />} title="Browser" />
      <ObjectButton icon={<Phone height={22} width={22} />} title="Phone" />
      <ObjectButton icon={<Laptop height={22} width={22} />} title="Laptop" />
      <ObjectButton icon={<Tablet height={22} width={22} />} title="Tablet" />
      <ObjectButton icon={<Watch height={22} width={22} />} title="Watch" />
      <ObjectButton icon={<Display height={22} width={22} />} title="Display" />
      <ObjectButton icon={<Text height={22} width={22} />} title="Text" />
      <ObjectButton icon={<Image height={22} width={22} />} title="Image" />
      <ObjectButton icon={<Shape height={22} width={22} />} title="Shape" />
    </div>
  </div>
);

export default LeftPane;
