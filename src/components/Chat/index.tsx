import * as React from 'react';
import UserListModule from './modules/UserListModule';

import './style.less';

class Chat extends React.Component {
    render() {
        const prefixCls = 'chat-wrapper';
        return (
            <div className={prefixCls}>
                <UserListModule />
            </div>
        );
    }
}

export default Chat;
