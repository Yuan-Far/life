import * as React from 'react';
import { render } from 'enzyme';

export default class WikiText extends React.Component {
    render() {
        const prefixCls = 'wiki-text';
        return <div className={prefixCls}>Hello</div>;
    }
}
