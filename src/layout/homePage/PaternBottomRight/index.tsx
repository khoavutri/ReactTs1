import { useEffect, memo } from 'react';
import '../../../pages/patientIforMation/PatientInfomation.scss';
import { FiEdit } from 'react-icons/fi';
import { IoPrintOutline } from 'react-icons/io5';
import { FaRegSquareCheck } from 'react-icons/fa6';

type Props = { data: any; colorIcon: string; stikyColor: string };

const PaternBottomRight = ({ data, colorIcon, stikyColor }: Props) => {
  useEffect(() => {
    console.log(data);
    console.log(colorIcon);
    console.log(stikyColor);
  }, [data]);
  return (
    <div style={{ width: '100%', backgroundColor: 'white', overflow: 'auto' }} className='PatientBottomRight'>
      <div style={{ width: '100%', backgroundColor: 'white', display: data ? '' : 'none' }}>
        <div
          style={{
            backgroundColor: stikyColor,
            width: '100%',
            height: '35px',
            color: colorIcon,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            padding: '0 10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button className='PatientBottomRight-button' style={{ backgroundColor: 'red' }}>
              <FiEdit style={{ marginRight: '5px' }} />
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Đọc kết quả</div>
            </button>
            <button className='PatientBottomRight-button' style={{ backgroundColor: '#1890ff' }}>
              <FiEdit style={{ marginRight: '5px' }} />
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Hội chẩn</div>
            </button>
            <button className='PatientBottomRight-button' style={{ backgroundColor: '#00af00' }}>
              <FiEdit style={{ marginRight: '5px' }} />
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Duyệt kết quả</div>
            </button>
          </div>
          <div style={{ display: 'flex' }}>
            <label
              style={{
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                marginRight: '5px',
                whiteSpace: 'nowrap',
              }}
            >
              <input type='checkbox' /> In đã có chữ ký
            </label>
            <button className='PatientBottomRight-button' style={{ backgroundColor: '#1890ff' }}>
              <IoPrintOutline style={{ marginRight: '5px' }} />
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Print</div>
            </button>
            <button className='PatientBottomRight-button' style={{ backgroundColor: '#1890ff' }}>
              <FaRegSquareCheck />
              <div style={{ fontSize: '14px', fontWeight: 'bold' }} />
            </button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '0 10px',
            color: 'black',
            fontSize: '14px',
          }}
        >
          <br />
          <h3 style={{ color: 'red', fontWeight: 'bold' }}>Chỉ định:</h3>
          <div style={{ marginLeft: '50px' }}>{'sdsdsd'}</div>
          <br />
          <h3 style={{ color: 'red', fontWeight: 'bold' }}>Kỹ thuật:</h3>
          <div style={{ marginLeft: '50px' }}>{'khoa vip'}</div>
          <br />
          <h3 style={{ color: 'red', fontWeight: 'bold' }}>Mô tả:</h3>
          <div style={{ marginLeft: '50px' }}>{'mô tả'}</div>
          <br />
          <h3 style={{ color: 'red', fontWeight: 'bold' }}>Kết luận:</h3>
          <div style={{ marginLeft: '50px' }}>{'khó chịu'}</div>
          <br />
          <h3 style={{ color: 'red', fontWeight: 'bold' }}>Khuyến nghị:</h3>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p>klkckxckxc</p>
            <p>doctor</p>
            <p>MR .adm</p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '30px',
            color: colorIcon,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            bottom: 0,
            padding: '0 0px',
          }}
        >
          <button
            style={{
              backgroundColor: '#fff7e6',
              height: '100%',
              border: '0.1px #ffd591 solid',
              color: '#fa8c16',
              cursor: 'pointer',
            }}
          >
            Dr. Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(PaternBottomRight);
