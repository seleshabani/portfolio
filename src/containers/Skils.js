import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react';
import styles from '../assets/skillsStyles';
import Desktopdev from '../components/desktopdev';
import Mobiledev from '../components/mobiledev';
import Webdev from '../components/webdev'
const Skils = ()=>{
    const [view,setView] = useState(1);

    const changeView = ()=>{
        if (view >= 3) {
            setView(1);
            console.log(view)
        }else{
            setView(view+1);
        }
    }
    const selectView = ()=>{
        switch (view) {
            case 1:
                return <Webdev/>
            case 2:
                return <Desktopdev/>
            case 3:
                return <Mobiledev/>
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