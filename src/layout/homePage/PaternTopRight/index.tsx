// import { useEffect } from 'react';
import '../../../pages/patientIforMation/PatientInfomation.scss';
import { FaUser } from 'react-icons/fa';
import { memo } from 'react';
type Props = { data: any; colorIcon: string; stikyColor: string };

const PaternTopRight = ({ data, colorIcon, stikyColor }: Props) => {
  return (
    <div
      style={{ width: '100%', backgroundColor: 'white', color: 'black', overflowY: 'auto' }}
      className='Patient-Tren'
    >
      <div
        style={{
          backgroundColor: stikyColor,
          width: '100%',
          height: '35px',
          color: colorIcon,
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
        }}
      >
        <FaUser style={{ marginLeft: '10px', marginRight: '5px' }} />
        <span style={{ fontSize: '12', fontWeight: 'bold' }}>Patient's Information</span>
      </div>
      <div
        style={{ margin: '5px 5px', width: 'calc(100% - 10px)', display: data ? 'flex' : 'none', overflow: 'auto' }}
      >
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
          <p>
            <strong style={{ color: colorIcon }}>Name:</strong> {data && data.pName && data.pName}
          </p>
          <p>
            <strong style={{ color: colorIcon }}>Code:</strong> {data && data.pCode ? data.pCode : ''}
          </p>
          <p>
            <strong style={{ color: colorIcon }}>Email:</strong> {data && data.pEmail ? data.pEmail : ''}
          </p>
          <p>
            <strong style={{ color: colorIcon }}>Address:</strong> {data && data.pAddress ? data.pAddress : ''}
          </p>
          <br />
          <p>
            <strong style={{ color: colorIcon }}>Diagnose:</strong> {data && data.diagnose ? data.diagnose : ''}
          </p>
          <p>
            <strong style={{ color: colorIcon }}>Indication:</strong> {data && data.indication ? data.indication : ''}
          </p>
          <p>
            <strong style={{ color: colorIcon }}>Department:</strong>{' '}
            {data && data.assDepartment ? data.assDepartment : ''}
          </p>
          <p>
            <strong style={{ color: colorIcon }}>Technicians:</strong> {data && data.assDoctor && data.assDoctor}
          </p>
        </div>
        <div style={{ width: '50%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>
              <strong style={{ color: colorIcon }}>Age:</strong> {data && data.pAge ? data.pAge : ''}
            </p>
            <p>
              <strong style={{ color: colorIcon }}>Gender:</strong>{' '}
              {data && data.pGender && data.pGender === 'F' ? 'Nữ' : 'Nam'}
            </p>
          </div>
          <p>
            <strong style={{ color: colorIcon }}>Health's Code:</strong> {data && data.pTypeCode ? data.pTypeCode : ''}
          </p>

          <p>
            <strong style={{ color: colorIcon }}>Phone:</strong> {data && data.pPhoneNo ? data.pPhoneNo : ''}
          </p>
          <br />
          <p>
            <strong style={{ color: colorIcon }}>Doctor:</strong> {data && data.assDoctor ? data.assDoctor : ''}
          </p>
          <br />
          <p>
            <strong style={{ color: colorIcon }}>visit code:</strong> {data && data.svId ? data.svId : ''}
          </p>
        </div>
        <div />
      </div>
    </div>
  );
};

export default memo(PaternTopRight);
