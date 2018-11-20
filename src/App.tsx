import * as React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Login from './components/Login';
import MenuList from './components/MenuList/index';
import NotFound from './common/404';

const App = () => (
    <Switch>
        <Route
            path="/"
            component={MenuList}
        />
        <Route
            exact={true}
            path="/login"
            component={Login}
        />
        <Route
            component={NotFound}
        />
    </Switch>
);

export default App;
