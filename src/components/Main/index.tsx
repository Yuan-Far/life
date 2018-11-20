import * as React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from '../Home';
import NotFound from '../../common/404';
import { menuList, infoFeature } from '../../common/data';

import './style.less';

const prefixCls = 'menu-content-router';

const Main: React.SFC<{}> = () => (
    <div className={prefixCls}>
        <Switch>
            <Route
                exact={true}
                path="/"
                component={Home}
            />
            {
                menuList.concat(infoFeature).map((item, index) => (
                    <Route
                        key={`menu-${index}`}
                        path={item.link}
                        component={item.comp}
                    />
                ))
            }
            <Route
                component={NotFound}
            />
        </Switch>
    </div>
);

export default Main;
