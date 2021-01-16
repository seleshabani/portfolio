import React, { useEffect, useRef } from 'react'
import ParticlesBg from 'particles-bg'
// import Particles from "react-tsparticles";
import {Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Skils from './pages/Skils';
import Realisations from './pages/Realisatons';
import Certifications from './pages/Certifications';
import To404 from './components/To404';
import NavMenu from './components/Menu';
import './App.css';
import { useSelector } from 'react-redux';
// import { tsconfig } from './assets/tsparticles_conf';

const App = (props)=> {

  const reducerState = useSelector(dr=>dr.defaultReducer)
  const particleRef = useRef();

  return (
    <div className="App" style={reducerState.theme==='light'?{color:'black'}:{color:'white'}}>
      <NavMenu menuStyle={reducerState.theme==='light'?styles.menuLight:styles.menuDark} 
      menuItemStyle={reducerState.theme==='light'?styles.menuItemLight:styles.menuItemDark}/>
      <Switch>
        <Route path={'/'} exact component={About}/>
        <Route path={'/about-me'} exact component={About}/>
        <Route path={'/skils'} exact component={Skils}/>
        <Route path={'/realisations'} exact component={Realisations}/>
        <Route path={'/certifications'} exact component={Certifications}/>
        <Route path={'*'} component={To404}/>
      </Switch>
      <ParticlesBg ref={particleRef} color={reducerState.theme==='light'?'#ffffff':'#000000'} type="lines" bg={true}/>
    </div>
  );
}
const styles = {
  menuItemDark:{
    fontFamily:'Nerko One',
    fontSize:'1.3rem',
    color:'#ffffff'
  },
  menuItemLight:{
    fontFamily:'Nerko One',
    fontSize:'1.3rem',
    color:'#000000'
  },
  menuLight:{
  },
  menuDark:{
    borderColor:'white'
  }
}
export default App;
