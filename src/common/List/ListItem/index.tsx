import * as React from 'react';

import './style.less';
export interface SFCSpreadAttributesProps {
    className?: string;
    style?: React.CSSProperties;
}

export const ListItem: React.SFC<SFCSpreadAttributesProps> = (props) => {
    const {
        children,
        ...restProps
    } = props;

    return (
        <div {...restProps}>
            {children}
        </div>
    );
};
