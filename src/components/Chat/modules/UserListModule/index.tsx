import * as React from 'react';
import UserList from './UserList/index';

const prefixCls = 'chat-user-module';
const UserListModule: React.SFC<{}> = () => (
    <div className={prefixCls}>
        <UserList />
    </div>
);

export default UserListModule;
