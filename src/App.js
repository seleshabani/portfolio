import React, { useEffect, useRef } from 'react'
import ParticlesBg from 'particles-bg'
import {config} from './particles_config';
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
    <div className="App">
      <NavMenu/>
      <Switch>
        <Route path={'/'} exact component={About}/>
        <Route path={'/about-me'} exact component={About}/>
        <Route path={'/skils'} exact component={Skils}/>
        <Route path={'/realisations'} exact component={Realisations}/>
        <Route path={'/certifications'} exact component={Certifications}/>
        <Route path={'*'} component={To404}/>
      </Switch>
      <ParticlesBg ref={particleRef} style={styles.particles} color={reducerState.theme==='light'?'#ffffff':'#000000'} type="lines" bg={true}/>
    </div>
  );
}
const styles = {
  menuItem:{
    fontFamily:'Nerko One',
    fontSize:'1.3rem'
  },
  particles:{
    backgroundColor:'black'
  }
}

const THEMES = {
  dark:{
    backgroundColor:'black',
    color:'white'
  },
  light:{
    backgroundColor:'white',
    color:'black'
  }
}
export default App;
