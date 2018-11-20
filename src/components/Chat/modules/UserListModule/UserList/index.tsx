import * as React from 'react';
// import { HOCErrorCatch } from '../../../../../common/HOCComponent/HOCErrorrCatch';
import './style.less';

const prefixCls = 'chat-user-list';
// @HOCErrorCatch

class UserList extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            succ: true,
        };
    }
    render() {
        return <div className={prefixCls}>hello</div>;
    }
}

export default UserList;
