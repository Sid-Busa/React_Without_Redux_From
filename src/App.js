import React,{Fragment} from 'react';
import { Route, Switch,withRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import EventDashboard from './components/EventDashboard';
import EventDetailedPage from './components/EventDetailedPage/EventDetailedPage';
import PeopleDashboard from './components/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './components/UserDetailed/UserDetailedPage';
import SettingDashboard from './components/Setting/SettingDashboard';
import EventForm from './components/EventForm/EventForm';
import TestForRedux from './components/TestForRedux/TestForRedux';
import { Container } from 'semantic-ui-react';
import {path} from './constants/Path';
import './App.css';


const App = (props) => {
  return (
    <Fragment>
      <Route exact path={path.home} component={Home} />
      <Route path='/(.+)' 
             render= {() => (
              <Fragment>
              <Navbar />
              <Container className="main">
                <Switch key={props.location.key}>
                  <Route path={path.home} exact component={Home} />
                  <Route path={path.eventDashboard} exact component={EventDashboard} />
                  <Route path={path.eventDetailedPage} component={EventDetailedPage} />
                  <Route path={path.peopleDashboard} component={PeopleDashboard} />
                  <Route path={path.userDetailedPage} component={UserDetailedPage} />
                  <Route path={path.settingDashboard} component={SettingDashboard} />
                  <Route path={['/createEvent','/manage/:id']} component={EventForm} />
                  <Route path={path.testForRedux} component={TestForRedux} />
                </Switch>
              </Container>
            </Fragment>
             )}       
      />
    </Fragment>
  );
}

export default withRouter(App);
