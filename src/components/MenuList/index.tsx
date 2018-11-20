import * as React from 'react';
import { NavLink } from 'react-router-dom';

import MenuLink from './modules/MenuLink/index';
import Main from '../Main';
import { menuList, infoFeature } from '../../common/data';
import './style.less';

const prefixCls = 'menu-wrapper'; 

const MenuList: React.SFC<{}> = () => (
    <div className={prefixCls}>
        <div className={`${prefixCls}-aside`}>
            <div className={`${prefixCls}-aside-header`}>
                <NavLink to={'/'}>
                    <h3>X-More</h3>
                </NavLink>
            </div>
            <MenuLink
                clsName={`${prefixCls}-content-basic`}
                list={menuList}
            />
            <MenuLink
                clsName={`${prefixCls}-content-info`}
                list={infoFeature}
            />
        </div>
        <Main />
    </div>
);

export default MenuList;
