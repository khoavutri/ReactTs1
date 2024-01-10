import { useEffect } from "react";
import "../PatientInfomation.scss"
import { memo } from "react";

type Props = {data:any;colorIcon: string; stikyColor: string};

const PaternBottomRight = ({data,colorIcon,stikyColor}: Props) => {
    useEffect(()=>{
        console.log(data)
        console.log(colorIcon)
        console.log(stikyColor)
    },[])
  return  (<div style={{ width: '100%', backgroundColor: 'green' }} >
    
  </div>);
}

export default memo(PaternBottomRight);
