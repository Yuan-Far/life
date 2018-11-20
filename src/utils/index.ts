/**
 * @desc 组件通用属性设置
 */

import { Children } from 'react';

export const isEmptyChildren = children => Children.count(children) === 0;
export const isFunction = value => typeof value === 'function';
export const getComponentName = component => component.displayName || component.name;
export const getHocComponentName = (hocName, component) => `${hocName}(${getComponentName(component)})`;

export const withDefaultProps = (Comp, defaultProps) => {
    Comp.defaultProps = defaultProps;
    return Comp;
};
