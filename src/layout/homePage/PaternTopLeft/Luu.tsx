import { useState } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineInsertPageBreak } from 'react-icons/md';
import { FaRegCalendarCheck, FaRegCalendarXmark } from 'react-icons/fa6';
import { BiLoaderCircle } from 'react-icons/bi';
import '../../../pages/patientIforMation/PatientInfomation.scss';

type Props = { data: any; colorIcon: string; setDulieu: any; listShow: any; resetListShow: any };

const PaternTopLeft = ({ data, colorIcon, setDulieu, listShow, resetListShow }: Props) => {
  const [indam, setIndam] = useState(-1);
  const [cam, setCam] = useState<boolean>(false);
  return (
    <div
      style={{ width: '100%', overflow: 'auto', backgroundColor: 'white', color: 'black' }}
      className='Patient-ngangvip'
    >
      <table className='PaternTopLeft-table'>
        <thead style={{ position: 'sticky', top: '0' }}>
          <tr>
            <th>
              <div color={colorIcon} style={{ display: 'flex' }}>
                <div className='PaternTopLeft_table-setAn'>
                  <IoMdSettings style={{ marginRight: '5px' }} />
                  <div className='PaternTopLeft_table-an' style={{}}>
                    {listShow &&
                      Array.isArray(listShow) &&
                      listShow.map((p) => (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            padding: '5px 10px',
                          }}
                          className='PaternTopLeft_table-an-con'
                          onClick={() => {
                            resetListShow(p.id);
                          }}
                          key={p.id}
                        >
                          <input
                            style={{ width: '18px', height: '18px', marginRight: '8px' }}
                            type='checkbox'
                            checked={p.checked}
                          />
                          <span>{p.content}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <MdOutlineInsertPageBreak
                  onClick={() => {
                    setCam((prev) => !prev);
                  }}
                  style={{ color: cam ? 'red' : colorIcon, transform: cam ? 'scale(1.1)' : 'scale(1)' }}
                />
              </div>
            </th>
            <th style={{ display: listShow[0].checked ? '' : 'none' }}>##</th>
            <th style={{ display: listShow[1].checked ? '' : 'none' }}>Time Example</th>
            <th style={{ display: listShow[2].checked ? '' : 'none' }}>Modality</th>
            <th style={{ display: listShow[3].checked ? '' : 'none' }}>Code</th>
            <th style={{ display: listShow[4].checked ? '' : 'none' }}>visit code</th>
            <th style={{ display: listShow[5].checked ? '' : 'none' }}>Patient Name</th>
            <th style={{ display: listShow[6].checked ? '' : 'none' }}>Age</th>
            <th style={{ display: listShow[7].checked ? '' : 'none' }}>Gender</th>
            <th style={{ display: listShow[8].checked ? '' : 'none' }}>Body Part</th>
            <th style={{ display: listShow[9].checked ? '' : 'none' }}>Diagnose (CDI)</th>
            <th style={{ display: listShow[10].checked ? '' : 'none' }}>Department</th>
            <th style={{ display: listShow[11].checked ? '' : 'none' }}>Doctor</th>
            <th style={{ display: listShow[12].checked ? '' : 'none' }}>Doctor edit/approve</th>
            <th style={{ display: listShow[13].checked ? '' : 'none' }}>Indication</th>
            <th style={{ display: listShow[14].checked ? '' : 'none' }}>Executor</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Array.isArray(data) &&
            data.map((ob: any, index: any) => (
              <tr
                key={index}
                className={indam === index ? 'PaternTopLeft_table-tr-deu' : 'PaternTopLeft_table-tr'}
                onClick={() => {
                  if (!cam) {
                    setIndam(index);
                    setDulieu(ob);
                  }
                }}
              >
                <td>{index + 1}</td>
                <td style={{ maxWidth: '110px', display: listShow[0].checked ? '' : 'none' }}>
                  <span>
                    <FaRegCalendarXmark style={{ color: '#ff0000' }} />
                  </span>
                  <span>
                    <FaRegCalendarCheck style={{ color: '#228b22' }} />
                  </span>
                  <span>
                    <BiLoaderCircle style={{ color: '#ff0000' }} />
                  </span>
                  <span>
                    <BiLoaderCircle style={{ color: '#228b22' }} />
                  </span>
                </td>
                <td style={{ display: listShow[1].checked ? '' : 'none' }}>
                  {ob.timeEx && new Date(ob.timeEx).toLocaleString()}
                </td>
                <td style={{ display: listShow[2].checked ? '' : 'none' }}>{ob.serverName && ob.serverName}</td>
                <td style={{ display: listShow[3].checked ? '' : 'none' }}>{ob.pCode && ob.pCode}</td>
                <td style={{ display: listShow[4].checked ? '' : 'none' }} />
                <td style={{ display: listShow[5].checked ? '' : 'none' }}>
                  <div
                    style={{
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                    }}
                  >
                    <span style={{ color: colorIcon, fontWeight: 'bold', marginRight: '10px' }}>
                      {ob.pName && ob.pName}
                    </span>
                    <button
                      style={{
                        height: '25px',
                        width: '15px',
                        backgroundColor: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '3px',
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                        setIndam(-1);
                      }}
                    />
                  </div>
                </td>
                <td style={{ display: listShow[6].checked ? '' : 'none' }}>{ob.pAge && ob.pAge}</td>
                <td style={{ display: listShow[7].checked ? '' : 'none' }}>
                  {ob.pGender && ob.pGender === 'M' ? 'Nam' : 'Nữ'}
                </td>
                <td style={{ display: listShow[8].checked ? '' : 'none' }}>
                  {ob.modality && ob.modality + ' - '}
                  {ob.bodypart && ob.bodypart}
                </td>
                <td style={{ display: listShow[9].checked ? '' : 'none' }}>
                  {ob.clinicalDiagnosis && ob.clinicalDiagnosis}
                </td>
                <td style={{ display: listShow[10].checked ? '' : 'none' }}>{ob.assDepartment && ob.assDepartment}</td>
                <td style={{ display: listShow[11].checked ? '' : 'none' }}>{ob.doctorAss && ob.doctorAss}</td>
                <td style={{ display: listShow[12].checked ? '' : 'none' }}>{ob.editByDrName && ob.editByDrName}</td>
                <td style={{ display: listShow[13].checked ? '' : 'none' }}>{ob.serviceName && ob.serviceName}</td>
                <td style={{ display: listShow[14].checked ? '' : 'none' }}>{ob.executor && ob.executor}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaternTopLeft;
