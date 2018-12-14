import * as React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Login from './components/Login';
import LifeIndex from './component/LifeIndex/index';

const App = () => (
    <Switch>
        <Route
            path="/"
            component={LifeIndex}
        />
        <Route
            exact={true}
            path="/login"
            component={Login}
        />
    </Switch>
);

export default App;
