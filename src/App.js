import React from 'react'
import ParticlesBg from 'particles-bg'
import {config} from './particles_config';
import {Route, Switch, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from './actions/defaultAction'
import { Menu} from 'semantic-ui-react'
import './App.css';
import Home from './containers/Home';
import About from './containers/About';
import Skils from './containers/Skils';
import Realisations from './containers/Realisatons';
import Certifications from './containers/Certifications';
import To404 from './components/To404';

const App = (props)=> {

  const globalState = useSelector(state=>state.defaultReducer)
  const dispatch = useDispatch();
  const activeItem = globalState.activeItem
  const history = useHistory()
  const handleItemClick = (e, { name }) => {
    dispatch(changePage(name))
    history.push(`/${name}`)
  }
  return (
    <div className="App">
      <Menu className="TabsMenu" pointing secondary>
        <Menu.Item
          name='About-Me'
          active={activeItem === 'About-Me'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Skils'
          active={activeItem === 'Skils'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Realisations'
          active={activeItem === 'Realisations'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='Certifications'
          active={activeItem === 'Certifications'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='👨🏿‍💻'
            active={activeItem === '👨🏿‍💻'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      <Switch>
        <Route path={'/'} exact component={About}/>
        <Route path={'/about-me'} exact component={About}/>
        <Route path={'/skils'} exact component={Skils}/>
        <Route path={'/realisations'} exact component={Realisations}/>
        <Route path={'/certifications'} exact component={Certifications}/>
        <Route path={'*'} component={To404}/>
      </Switch>
      <ParticlesBg color="#000000" type="lignes" bg={true} config={config}/>
    </div>
  );
}
export default App;
