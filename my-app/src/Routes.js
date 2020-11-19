import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Loginpage from './pages/Login';
import Registerpage from './pages/Register';
import Competitionpage from './pages/Services';
import CompetitionDetailpage from './pages/ServiceDetail';
import CompetitionCreatepage from './pages/services/ServiceCreate';
import UserCompetitionpage from './pages/services/UserServices';


const Routes = () => 
    <Switch>
        <Route path="/login">
            <Loginpage />
        </Route>
        <Route path="/register">
            <Registerpage />
        </Route>
        <Route path="/competition/me">
            <UserCompetitionpage />
        </Route>
        <Route path="/competition/new">
            <CompetitionCreatepage />
        </Route>
        <Route path="/competition/:serviceId">
            <CompetitionDetailpage />
        </Route>
        <Route path="/competition">
            <Competitionpage />
        </Route>                                            
        <Route path="/">
            <Homepage />
        </Route>
    </Switch>

export default Routes