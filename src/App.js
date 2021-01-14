import React from 'react'
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
// import { tsconfig } from './assets/tsparticles_conf';

const App = (props)=> {

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
      <ParticlesBg style={styles.particles} type="color" bg={true} config={config}/>
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
