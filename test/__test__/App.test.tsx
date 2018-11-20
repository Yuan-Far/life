import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

describe('App Component', () => {
    it('App Render', () => {
        shallow(<App />);
    });
});
