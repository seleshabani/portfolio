import React from 'react'
import RealCard from '../components/RealCard'
import {useSelector} from 'react-redux'
const Realisations = ()=>{
    const reducerState = useSelector(dr=>dr.defaultReducer);
    return(
        <div>
            <RealCard themeStyle={reducerState.theme==='light'?styles.cardLight:styles.cardDark}/>
        </div>
    )
}
const styles = {
    main:{
        display:'flex',
        fontFamily:'Nerko One'
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