import React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../reducers/Layout';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Events from './EventsView';
import EventDesc from './EventDesc';
import SideBar from '../../components/SideBar';
import ThemeOptions from '../../components/ThemeOptions';
import MobileMenu from '../../components/MobileMenu';
import {Link,Switch} from 'react-router-dom';
/**
 * Pages
 */
import Dashboard from '../Dashboard';
import Components from '../Components';
import UserProfile from '../UserProfile';
import MapsPage from '../MapsPage';
import Forms from '../Forms';
import Charts from '../Charts';
import Calendar from '../Calendar';
import Tables from '../Tables';
import Register from '../Components/Register/Register';
import MyRegistry from '../Components/Register/MyRegistry';
import CreateHackathon from '../Components/CreateHackathon/createHack';
import Chart from '../LeaderBoard/chart';
import MainChart from '../LeaderBoard/mainchart';

import ViewSolutionComponent from './viewSolution';
import UploadSolutionComponent from './uploadSolution';
import UploadSuccessComponent from './uploadsuccess'

const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
        <div className="close-layer" onClick={hideMobileMenu}></div>
        <SideBar />

        <div className="main-panel">
          <Header />
          <div className="col-md-9">
           <Route exact path="/" component={Dashboard} />
           <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/register/5b3b5c69ca4aa9c842eec017" component={MyRegistry} />
           </Switch>
          <Switch>
          <Route exact path="/events" component={Events} />
          <Route path='/events/:name' component={EventDesc}/>
          </Switch>
          <Route path="/create" component={CreateHackathon}/>
          <Route path="/chart" component={MainChart} />
          <Route path="/viewSolution" component={ViewSolutionComponent} />
          <Route path="/uploadSolution" component={UploadSolutionComponent} />
          <Route path="/uploadSuccess" component={UploadSuccessComponent} />
          {/* <Route path="/profile" component={UserProfile} />
          <Route path="/forms" component={Forms} />
          <Route path="/tables" component={Tables} />
          <Route path="/maps" component={MapsPage} />
          <Route path="/charts" component={Charts} />
          <Route path="/calendar" component={Calendar} />  */}
          </div>
          <div className="col-md-3">
            <MainChart/>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  )
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));
