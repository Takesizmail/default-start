import React from 'react';
import './App.scss';
import {withProjectApi} from "./utils/hoc";
import {Switch,Route,Redirect} from 'react-router-dom'
import Main from "./pages/main";
import Page404 from "./pages/page404";
type Props = {
 services: any
}


const App:React.FC<Props> = (props) =>{

  console.log(props.services.getSome())

  return(
     <Switch>
         <Route path="/launching" component={Main} exact/>
         <Route path="/page404" component={Page404} exact/>
         <Redirect to="/page404"/>
     </Switch>
  )
}

export default withProjectApi(App);
