import Split from 'react-split';
import { FaUser } from "react-icons/fa";
import "./PatientInfomation.scss"
import data from "../mocks/data2.json";
type Props = {};
const backGroundColor = '#9996ad';
const stikyColor = '#e3e2ec';
const gutterSize = 5;
const colorIcon = '#222223';
const PatientInfomation = ({}: Props) => {
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
        <div style={{ width: '100%'}}>
            
        </div>
        <div style={{ width: '100%', backgroundColor: 'blue' }}></div>
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
        <div style={{ width: '100%', backgroundColor: 'white', }}>
            <div style={{backgroundColor:stikyColor,
                        width:'100%',
                        height:'35px',
                        color:colorIcon,
                        display:'flex',
                        alignItems:'center',
                        position:'sticky',
                        top:0,
                        overflow:'auto'}}>
                <FaUser style={{marginLeft:'10px',marginRight:'5px'}}/>
                <span style={{fontSize:'12',fontWeight:'bold'}}>Patient's Infomation</span>
            </div>
            <div style={{margin:'5px 5px',width:'calc(100% - 10px)',backgroundColor:'red',display:'flex',}}>
                <div style={{width:'50%',display:'flex',flexDirection:'column'}}>
                    <p>Name:{" "}{data.pName}</p>
                    <p>Name:{" "}</p>
                    <p>Name:{" "}</p>
                    <p>Name:{" "}</p>
                    <p>Name:{" "}</p>
                    <p>Name:{" "}</p>
                    <p>Name:{" "}</p>
                    <p>Name:{" "}</p>
                </div>
                <div style={{width:'50%'}}></div>
            </div>
        </div>
        <div style={{ width: '100%', backgroundColor: 'green' }}></div>
      </Split>
    </Split>
  );
};

export default PatientInfomation;
