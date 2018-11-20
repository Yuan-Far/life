import * as React from 'react';
import oAuthLogin from '../../utils/oAuth';
import LoginBackground from './modules/LoginBackground/index';

import './style.less';

const initialState = {
    showQrcode: false,
};
type State = Readonly<typeof initialState>;

const openQrcodeHandle = (prevState: State) => ({
    showQrcode: !prevState.showQrcode,
});
const test = require('./rrr.png');
const qrcode = require('./eee.png');

class Login extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.handleKeyLogin = this.handleKeyLogin.bind(this);
        this.handleOauthLogin = this.handleOauthLogin.bind(this);
    }
    readonly state: State = initialState;
    private openQrcode = () => this.setState(openQrcodeHandle);
    private handleLogin = () => console.info('login');
    private handleKeyLogin = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.keyCode === 13) {
            alert('alert');
        }
    }
    private handleOauthLogin = () => {
        console.info('sdf');
        oAuthLogin();
    }
    render() {
        const prefixCls = 'login';
        const { showQrcode } = this.state;
        return (
            <div className={`${prefixCls}-wrapper`}>
                <LoginBackground />
                <div className={`${prefixCls}-frame`}>
                    <div className={`${prefixCls}-qrcode-info`} onClick={this.openQrcode}>
                        {showQrcode ? 
                            <i className="icon icon-display" />
                            :
                            <i className="icon icon-qrcode" />
                        }
                    </div>
                    <form
                        className={showQrcode
                        ?
                        `${prefixCls}-content ${prefixCls}-visible` : `${prefixCls}-content`}
                    >
                        <h3>Xiyou Mobile</h3>
                        <div className={`${prefixCls}-input ${prefixCls}-user`}>
                            <i className="icon icon-user"/>
                            <input
                                type="text"
                                placeholder="Username"
                                autoComplete="true"
                            />
                        </div>
                        <div className={`${prefixCls}-input ${prefixCls}-user`}>
                            <i className="icon icon-key"/>
                            <input
                                type="password"
                                placeholder="Password"
                                autoComplete="true"
                            />
                        </div>
                        <div className={`${prefixCls}-verify`}>
                            <img src={test} />
                            <input
                                type="text"
                                placeholder="verfication code"
                                autoComplete="false"
                                onKeyDown={e => this.handleKeyLogin(e)}
                            />
                        </div>
                        <div className={`${prefixCls}-oauth`} onClick={this.handleOauthLogin}>
                            <div className={`${prefixCls}-oauth-icon`}>
                                <span className="icon icon-github" />
                            </div>
                            <p>没有账号? 试试第三方登录吧</p>
                        </div>
                        <button
                            className={`${prefixCls}-btn`}
                            onClick={this.handleLogin}
                        >
                            Get Start!
                        </button>
                    </form>
                    {
                        showQrcode ? <div className={`${prefixCls}-qrcode`}>
                            <img src={qrcode} />
                            <p>请打开手机端扫一扫</p>
                        </div> : null}
                </div>
            </div>
        );
    }
}

export default Login;
