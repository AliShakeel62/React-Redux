import PrimarySearchAppBar from '../Components/navbar'
import CustomizedTables from '../Components/Table'
import BasicSwitches from '../Components/Switch'
import CheckboxLabels from '../Components/Checkbox'
import RadiosCom from '../Components/Radio'
import GridCom from '../Components/Grid'
import DialogCom from '../Components/Dialogbox'
import BasicAlerts from '../Components/Alert'
export default function Home(){
    return(<>
    <PrimarySearchAppBar value1="Singup" path="/Singup" value2="Login" path2="/Login"/>
    <h1>Home</h1>
    </>)
}