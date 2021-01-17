import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import styles from '../assets/skillsStyles';
import Desktopdev from '../components/desktopdev';
import Mobiledev from '../components/mobiledev';
import Otherdev from '../components/otherDev';
import Webdev from '../components/webdev'
const Skils = ()=>{

    const [view,setView] = useState(1);
    const RootState = useSelector(dRed=>dRed.defaultReducer);
    const changeView = ()=>{
        if (view >= 4) {
            setView(1);
        }else{
            setView(view+1);
        }
    }
    const selectView = ()=>{
        switch (view) {
            case 1:
                return <Webdev theme={RootState.theme}/>
            case 2:
                return <Desktopdev theme={RootState.theme}/>
            case 3:
                return <Mobiledev theme={RootState.theme}/>
            case 4:
                return <Otherdev theme={RootState.theme}/>
            default:
                break;
        }
    }
    
    return(
        <div style={styles.main}>
            {selectView()}
            <Icon style={localStyles.icone} name="arrow right" onClick={changeView}/>
        </div>
    )
}
const localStyles = {
    icone:{
        fontSize:'2rem',
        cursor:'pointer',
        marginTop:'1rem'
    }
}
export default Skils;