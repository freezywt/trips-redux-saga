import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Reservations from './Pages/Reservations';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/reservations" exact component={Reservations}/>
        </Switch>
    );
}