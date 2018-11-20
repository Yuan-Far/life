import * as React from 'react';

import TopLeft from './modules/TopLeft';
import TopRight from './modules/TopRight';
import BottomList from './modules/BottomList';
import './style.less';

const prefixCls = 'x-home';
const Home = () => (
    <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-top`}>
            <div className={`${prefixCls}-top-left`}>
                <TopLeft />
            </div>
            <div className={`${prefixCls}-top-right`}>
                <TopRight />
            </div>
        </div>
        <div className={`${prefixCls}-search`}>
            <span className="icon icon-ion-ios-search"/>
        </div>
        <div className={`${prefixCls}-bottom`}>
            <BottomList />
        </div>
    </div>
);

export default Home;
