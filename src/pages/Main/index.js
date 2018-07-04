import React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../reducers/Layout';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import ViewSolutionComponent from './viewSolution';
import UploadSolutionComponent from './uploadSolution';
import UploadSuccessComponent from './uploadsuccess';
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
import CreateHackathon from '../Components/CreateHackathon/createHack';

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
           <Route exact path="/" component={Dashboard} />
           <Route exact path="/register" component={Register} />
          <Switch>
          <Route exact path="/events" component={Events} />
          <Route path='/events/:name' component={EventDesc}/>
          </Switch>
          <Route path="/create" component={CreateHackathon} />
          <Route path="/viewSolution" component={ViewSolutionComponent} />
          <Route path="/uploadSolution" component={UploadSolutionComponent} />
          <Route path="/uploadSuccess" component={UploadSuccessComponent} />
          {/* <Route path="/profile" component={UserProfile} />
          <Route path="/forms" component={Forms} />
          <Route path="/tables" component={Tables} />
          <Route path="/maps" component={MapsPage} />
          <Route path="/charts" component={Charts} />
          <Route path="/calendar" component={Calendar} />  */}

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
