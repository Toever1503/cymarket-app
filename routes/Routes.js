import React from 'react'
import {Router, Scene} from 'react-native-router-flux'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'

const Routes = () => (
    <Router>
        <Scene key="root">
            <Scene key="homeuu99" component={HomeView} initial={true}/>
            <Scene key="about9" component={AboutView}/>
        </Scene>
    </Router>
)
export default Routes