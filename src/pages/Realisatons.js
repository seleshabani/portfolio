import React from 'react'
import RealCard from '../components/RealCard'
import {useSelector} from 'react-redux'
const Realisations = ()=>{
    const reducerState = useSelector(dr=>dr.defaultReducer);
    return(
        <div style={styles.main}>
            <RealCard themeStyle={reducerState.theme==='light'?styles.cardLight:styles.cardDark}/>
            <RealCard themeStyle={reducerState.theme==='light'?styles.cardLight:styles.cardDark}/>
            <RealCard themeStyle={reducerState.theme==='light'?styles.cardLight:styles.cardDark}/>
        </div>
    )
}
const styles = {
    main:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'baseline',
        fontFamily:'Nerko One',
    },
    cardLight:{
        color:'black',
        fontFamily:'Nerko One',
    },
    cardDark:{
        color:'white',
        fontFamily:'Nerko One',
        backgroundColor:'black'
    }
}
export default Realisations;