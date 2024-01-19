
import { useState } from 'react';
import { Dropdown } from 'antd';
// import type { MenuProps } from 'antd';

import { IoMdSettings } from 'react-icons/io';
type Props = {};

const items = [
  {
    key: 1,
    label: (
      <div style={{ display: 'flex', alignItems: 'center',height:'20px',marginRight:'10px' }}>
        <input type='checkbox' style={{ height: '16px', width: '16px', marginRight: '10px' }} />
        <span style={{ fontSize: '20', fontWeight: 'bold', color: '#222223' }}>{''}icon1</span>
      </div>
    ),
  },
  {
    key: 2,
    label: (
      <div style={{ display: 'flex', alignItems: 'center',height:'20px',marginRight:'10px' }}>
        <input type='checkbox' style={{ height: '16px', width: '16px', marginRight: '10px' }} />
        <span style={{ fontSize: '20', fontWeight: 'bold', color: '#222223' }}>{''}icon1</span>
      </div>
    ),
  },
   {
    key: 3,
    label: (
      <div style={{ display: 'flex', alignItems: 'center',height:'20px',marginRight:'10px' }}>
        <input type='checkbox' style={{ height: '16px', width: '16px', marginRight: '10px' }} />
        <span style={{ fontSize: '20', fontWeight: 'bold', color: '#222223' }}>{''}icon1</span>
      </div>
    ),
  },
];

const MenuItemBottom: React.FC<Props> = ({}) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Dropdown menu={{ items }} 
                placement='bottom' 
                trigger={['hover', 'click']} 
                visible={visible} 
                onVisibleChange={(newVisible) => setVisible(newVisible)}
                arrow={true}
                >
        <IoMdSettings />
      </Dropdown>
    </>
  );
};

export default MenuItemBottom;
