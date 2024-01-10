import { useState } from 'react';
import '../PatientInfomation.scss';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineInsertPageBreak } from 'react-icons/md';

type Props = { data: any, colorIcon: string,setDulieu:any };

const PaternTopLeft = ({ data, colorIcon,setDulieu }: Props) => {
    const [indam,setIndam] = useState(-1);

  return (
    <div style={{ width: '100%', overflow: 'auto', backgroundColor: 'white', color: 'black' }} className='Patient-ngangvip'>
      <table className='PaternTopLeft-table'>
        <thead style={{ position: 'sticky', top: '0' }}>
          <tr>
            <th>
              <span color={colorIcon}>
                <IoMdSettings style={{ marginRight: '5px' }} />
                <MdOutlineInsertPageBreak />
              </span>
            </th>
            <th style={{ maxWidth: '110px' }}>##</th>
            <th>Time Example</th>
            <th>Modality</th>
            <th>Code</th>
            <th>visit code</th>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Body Part</th>
            <th>Diagnose (CDI)</th>
            <th>Department</th>
            <th>Doctor</th>
            <th>Doctor edit/approve</th>
            <th>Indication</th>
            <th>Executor</th>
          </tr>
        </thead>
        <tbody>
          {data&&Array.isArray(data) &&data.map((ob: any, index: any) => (
            <tr key={index} 
                className={indam===index?'PaternTopLeft_table-tr-deu':'PaternTopLeft_table-tr'}
                onClick={()=> {setIndam(index);setDulieu(ob)}}>
              <td>{index + 1}</td>
              <td style={{ maxWidth: '110px' }}>-------</td>
              <td>{ob.timeEx && new Date(ob.timeEx).toLocaleString()}</td>
              <td>{ob.serverName && ob.serverName}</td>
              <td>{ob.pCode && ob.pCode}</td>
              <td></td>
              <td>
                <span style={{ color: colorIcon, fontWeight: 'bold',marginRight:'10px' }}>{ob.pName && ob.pName}</span>
                <button style={{height:'25px',
                                width:'15px',
                                backgroundColor:'white',
                                border:'none',
                                cursor:'pointer',
                                borderRadius:'3px'
                            }}
                        onClick={(event)=>{event.stopPropagation();setIndam(-1)}}></button>
              </td>
              <td>{ob.pAge && ob.pAge}</td>
              <td>{ob.pGender && ob.pGender === 'M' ? 'Nam' : 'Nữ'}</td>
              <td>
                {ob.modality && ob.modality + ' - '}
                {ob.bodypart && ob.bodypart}
              </td>
              <td>{ob.clinicalDiagnosis && ob.clinicalDiagnosis}</td>
              <td>{ob.assDepartment && ob.assDepartment}</td>
              <td>{ob.doctorAss && ob.doctorAss}</td>
              <td>{ob.editByDrName && ob.editByDrName}</td>
              <td>{ob.serviceName && ob.serviceName}</td>
              <td>{ob.executor && ob.executor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaternTopLeft;
