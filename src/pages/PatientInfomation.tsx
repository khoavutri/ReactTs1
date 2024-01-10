import Split from 'react-split';
import './PatientInfomation.scss';

import PaternBottomLeft from './PaternBottomLeft';
import PaternBottomRight from './PaternBottomRight';
import PaternTopRight from './PaternTopRight';
import PaternTopLeft from './PaternTopLeft';
import data from "../mocks/dataTopLeft.json"
import { useState,useEffect } from 'react';

type Props = {};
const backGroundColor = '#9996ad';
const stikyColor = '#e3e2ec';
const gutterSize = 5;
const colorIcon = '#222223';
const PatientInfomation = ({}: Props) => {
  const [user, setUser] = useState<any>();
  const [listUser,setListUser] = useState<any>([]);
   const doSomethingWithParam = (param:any) => {
      setUser(param);
  };
  useEffect(()=>{
    const x:any[] = [];
    for (let i=0;i<data.length;i++){
      if (data[i]&&data[i].patientID&&user&&user.patientID&&data[i].patientID===user.patientID){
        x.push(data[i]);
      }
    }
    setListUser(x);
  },[user,listUser])
  return (
    <Split
      sizes={[50, 50]}
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
        height: 'calc(100vh - 40px)',
        width: 'calc(100vw - 240px)',
        position: 'absolute',
        bottom: '0',
        right: '0',
        overflow: 'hidden',
        display: 'flex',
      }}
      className='Patient-Tren'
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
        style={{ width: '100%', backgroundColor: backGroundColor, height: '100%' }}
        className='PatientInfomation-Split'
      >
        <PaternTopLeft data={data} colorIcon={colorIcon} setDulieu={doSomethingWithParam} />
        <PaternBottomLeft data={listUser} colorIcon={colorIcon} setDulieu={doSomethingWithParam}/>
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
        <PaternBottomRight data={""} colorIcon={colorIcon} stikyColor={stikyColor}/>
      </Split>
    </Split>
  );
};

export default PatientInfomation;
