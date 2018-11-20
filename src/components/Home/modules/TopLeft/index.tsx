import * as React from 'react';

import './style.less';

const name = 'Yuan';

export default function TopLeft() {
    const prefixCls = 'topleft-pre';
    const timeLine = () => {
        if (new Date()) {
            console.info(new Date());
        }
    };
    timeLine();
    return (
        <div className={`${prefixCls}`}>
            <div className={`${prefixCls}-top`}>
                <span>Monday</span>
                <span>March 8</span>
            </div>
            <div className={`${prefixCls}-middle`}>
                Good Afternoon!
            </div>
            <div className={`${prefixCls}-bottom`}>
                {`Hello ${name}! There is your `}
                <div className={`${prefixCls}-bottom-underline`}>
                    schedule
                </div>!
            </div>
        </div>
    );
}
