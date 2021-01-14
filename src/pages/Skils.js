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
                return <Webdev/>
            case 2:
                return <Desktopdev/>
            case 3:
                return <Mobiledev/>
            case 4:
                return <Otherdev/>
            default:
                break;
        }
    }
    useEffect(()=>{
        let cards = document.querySelectorAll('.ui.card');
        if (RootState.theme==='dark') {
            cards.forEach(card=>{
                card.style.backgroundColor = 'black';
            })
        }else{
            cards.forEach(card=>{
                card.style.backgroundColor = 'white';
            })
        }
    },[view,RootState.theme])
    
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