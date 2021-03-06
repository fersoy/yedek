import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Patients from '../Patients/Patients';
import Home from './Home/Home';
import PatientDetails from '../Patients/PatientDetails';
import AddPatient from '../Patients/AddPatients';
import EditPatient from '../Patients/EditPatient';
import Conditions from '../Patients/Conditions';
import Login from "../Login/login";
import Dashboard from '../Dashboard/dashboard'
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/patients' component={Patients} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />

            {/* Any other pages you create, add a new Route tag and link that component by importing it up top and then adding it here */}
            <Route exact path='/patients/add' component={AddPatient} />
            <Route exact path='/patients/edit/:id' component={EditPatient} />
            <Route exact path='/patients/:id' component={PatientDetails} />
            <Route exact path='/patients/:id/conditions' component={Conditions} />
        </Switch>
    </main>
)

export default Main;