import * as React from 'react';
import './style.less';

const prefixCls = 'login-module-background';
const LoginBackground = () => (
    <ul className={prefixCls}>
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                <li key={index} className={`${prefixCls}-tri ${prefixCls}-tri-${item}`} /> 
            ))  
        }
    </ul>
);

export default LoginBackground;
