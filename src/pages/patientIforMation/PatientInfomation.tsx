import Split from 'react-split';
import '../navBar/NavBar.scss';

import PaternBottomLeft from '../../layout/homePage/PaternBottomLeft';
import PaternBottomRight from '../../layout/homePage/PaternBottomRight';
import PaternTopRight from '../../layout/homePage/PaternTopRight';
import PaternTopLeft from '../../layout/homePage/PaternTopLeft';
import data from '../../mocks/dataTopLeft.json';
import { useState, useEffect } from 'react';
type Props = {};
const backGroundColor = '#9996ad';
const stikyColor = '#e3e2ec';
const gutterSize = 5;
const colorIcon = '#222223';
const PatientInfomation = ({}: Props) => {
  const [user, setUser] = useState<any>();
  const [listUser, setListUser] = useState<any>([]);
  const [listShow, setListShow] = useState<any>([
    { id: 0, content: '##', checked: true },
    { id: 1, content: 'Time Example', checked: true },
    { id: 2, content: 'Modality', checked: true },
    { id: 3, content: 'Code', checked: true },
    { id: 4, content: 'visit code', checked: true },
    { id: 5, content: 'Patient Name', checked: true },
    { id: 6, content: 'Age', checked: true },
    { id: 7, content: 'Gender', checked: true },
    { id: 8, content: 'Body Part', checked: true },
    { id: 9, content: 'Diagnose (CDI)', checked: true },
    { id: 10, content: 'Department', checked: true },
    { id: 11, content: 'Doctor', checked: true },
    { id: 12, content: 'Doctor edit/approve', checked: true },
    { id: 13, content: 'Indication', checked: true },
    { id: 14, content: 'Executor', checked: true },
  ]);
  const doSomethingWithParam = (param: any) => {
    setUser(param);
  };
  const resetListShow = (index: number) => {
    const a = [...listShow];
    a[index].checked = !a[index].checked;
    setListShow(a);
  };
  useEffect(() => {
    const x: Array<any> = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i] && data[i].patientID && user && user.patientID && data[i].patientID === user.patientID) {
        x.push(data[i]);
      }
    }
    setListUser(x);
  }, []);
  return (
    <Split
      sizes={[70, 30]}
      minSize={100}
      expandToMin={false}
      gutterSize={gutterSize}
      gutterAlign='center'
      snapOffset={30}
      dragInterval={1}
      direction='horizontal'
      cursor='row-resize'
      style={{
        backgroundColor: backGroundColor,
        width: 'calc(100vw - 240px)',
        position: 'absolute',
        bottom: '0',
        right: '0',
        overflow: 'hidden',
        display: 'flex',
        zIndex: '1',
      }}
      className='Patient-Tren Height-Patient'
      id='xuongLuon'
    >
      <Split
        sizes={[75, 25]}
        minSize={100}
        expandToMin={false}
        gutterSize={gutterSize}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='vertical'
        cursor='col-resize'
        style={{ width: '100%', backgroundColor: backGroundColor, height: '100%', zIndex: '2' }}
        className='PatientInfomation-Split'
      >
        <PaternTopLeft />
        <PaternBottomLeft
          data={listUser}
          colorIcon={colorIcon}
          setDulieu={doSomethingWithParam}
          listShow={listShow}
          resetListShow={resetListShow}
        />
      </Split>
      <Split
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterSize={gutterSize}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        direction='vertical'
        cursor='col-resize'
        style={{ width: '100%', backgroundColor: backGroundColor, height: '100%' }}
        className='PatientInfomation-Split'
      >
        <PaternTopRight data={user} colorIcon={colorIcon} stikyColor={stikyColor} />
        <PaternBottomRight data={user} colorIcon={colorIcon} stikyColor={stikyColor} />
      </Split>
    </Split>
  );
};

export default PatientInfomation;
