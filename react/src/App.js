import React, { Component } from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import KaiNiekoNera from './components/NAVIGACIJA/KaiNiekoNera';
import PirmasPuslapis from './components/NAVIGACIJA/PirmasPuslapis';
import SvenciuSarasas from './components/HolidayList/SvenciuSarasas';
import NewHolidayContainer from './components/HolidayAdministration/NewHolidayContainer';
import HolidayAdministrationListContainer from './components/HolidayAdministration/HolidayAdministrationListContainer';
import EditHolidayContainer from './components/HolidayAdministration/EditHolidayContainer';
import OneHolidayContainer from './components/HolidayList/OneHolidayContainer';


class App extends Component {
  

  render() {
    return (

      
      <BrowserRouter>
          <PirmasPuslapis>
              <Switch>
                  <Route exact path='/' component={SvenciuSarasas} />
                  <Route exact path="/holidays/:title" component={OneHolidayContainer} />
                  <Route exact path='/admin' component={HolidayAdministrationListContainer} />
                  <Route exact path="/admin/holidays/new" component={NewHolidayContainer} />       
                  <Route exact path="/admin/holidays/:title" component={EditHolidayContainer} />   
                  <Route path="*" component={KaiNiekoNera} />
                  <Route component={KaiNiekoNera} />
              </Switch>
          </PirmasPuslapis>
  </BrowserRouter>
      
    );
  }
}

export default App;
