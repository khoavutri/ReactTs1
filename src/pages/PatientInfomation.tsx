import Split from 'react-split'
type Props = {};
const backGroundColor = 'white';
const PatientInfomation = ({}: Props) => {
  return <Split sizes={[25, 75]}
    minSize={400}
    expandToMin={false}
    gutterSize={10}
    gutterAlign="center"
    snapOffset={30}
    dragInterval={1}
    direction="horizontal"
    cursor="col-resize"
    style={{backgroundColor: backGroundColor,height: '100vh'}}>
        <div>khoa</div>
        <div>khoa</div>
    </Split>;
};

export default PatientInfomation;
