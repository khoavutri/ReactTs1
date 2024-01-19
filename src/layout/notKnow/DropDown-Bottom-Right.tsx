import React from 'react';

import { MenuProps, Dropdown, Space } from 'antd';

import { FaRegUser, FaUser ,FaKey,FaLock,
        FaArtstation,FaBook,FaExclamationCircle  } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { AiFillFile,AiFillFileText  } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";

const items: MenuProps['items'] = [
  {
    label: (
      <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <FaUser style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>Name</div>
      </div>
    ),
    key: '0',
  },
  {
    label: (
      <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <MdLanguage style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>Change Languge</div>
      </div>
    ),
    key: '1',
  },
   {
    label: (
      <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <FaKey style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>Change Languge</div>
      </div>
    ),
    key: '2',
  },
  // {
  //   type: 'divider',
  // },
  {
    label: <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <FaLock style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>Signature register</div>
      </div>,
    key: '3',
  },
   {
    label: <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <AiFillFile style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>Manage sample results</div>
      </div>,
    key: '4',
  },
  {
    label: <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <AiFillFileText style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>Commitment form</div>
      </div>,
    key: '5',
  }, 
   {
    label: <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <FaArtstation style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>Statistical</div>
      </div>,
    key: '6',
  },
  {
    label: <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <FaBook style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>User Manual</div>
      </div>,
    key: '7',
  },
   {
    label: <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <FaExclamationCircle style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>Version info</div>
      </div>,
    key: '8',
  },  
   {
    label: <div style={{ display: 'flex', padding: '0 10px', alignItems: 'center' }}>
        <TbLogout style={{ marginRight: '6px' }} />
        <div style={{ fontWeight: 'bold' }}>Logout</div>
      </div>,
    key: '9',
  },
  
];

const DropDownBottomRight: React.FC = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: '#7c9f60',
            marginRight: '20px',
            borderRadius: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <FaRegUser />
        </div>
      </Space>
    </a>
  </Dropdown>
);

export default DropDownBottomRight;
