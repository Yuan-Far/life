/**
 * @author Yuan
 * @description 右侧菜单栏组件
 */

import * as React from 'react';
import { NavLink } from 'react-router-dom';

type XMenu = {
    icon?: string,
    label: string,
    link: string,
};

export interface Props {
    clsName: string;
    list: Array<XMenu>;
}

const styles: object = {
    color: 'rgb(79, 21, 223)', 
    borderLeft: '4px solid rgb(79, 21, 223)',
    background: 'rgba(104, 60, 213, 0.1)',
    transition: 'all .2s ease-in-out',
};
const MenuLink: React.SFC<Props> = ({ list, clsName }: Props) => (
    <ul className={clsName}>
        {
            list.map((item, index) => (
                <li className="menu-list" key={index}>
                    <NavLink to={item.link} activeStyle={styles}>
                        <i className={item.icon} />
                        <span className="menu-info">{item.label}</span>
                    </NavLink>
                </li>
            ))
        }
    </ul>
);

export default MenuLink;
