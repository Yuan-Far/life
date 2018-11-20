import * as React from 'react';

import './style.less';

class BottomList extends React.PureComponent<{}, any> {
    render() {
        const prefixCls = 'xy-bottom';

        return (
            <div className={`${prefixCls}-wrapper`}>
                <div className={`${prefixCls}-bulletin`}>
                    <h3>bottom-bulletin</h3>
                </div>
                <div className={`${prefixCls}-meetings`}>
                    <h3>bottom-meetings</h3>
                </div>
                <div className={`${prefixCls}-approval`}>
                    <h3>bottom-approval</h3>
                </div>
            </div>
        );
    }
}

export default BottomList;
