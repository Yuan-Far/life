import * as React from 'react';

const prefixCls = 'weather';

export const SunnyDay = () => (
    <div className={`${prefixCls}-sun`} />
);

export const Cloudy = () => (
    <div className={`${prefixCls}-cloud`} />
);

export const CloudyMore = () => (
    <div className={`${prefixCls}-cloudmore`} />
);

export const Breeze = () => (
    <div className={`${prefixCls}-breeze`} />
);

export const Snowy = () => (
    <div className={`${prefixCls}-snow`} />
);

export const Thunder = () => (
    <div className={`${prefixCls}-thunder`} />
);

export const Rainy = () => (
    <div className={`${prefixCls}-rain`} />
);
