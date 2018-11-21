/**
 * @desc 异常边界捕获 
 */
import * as React from 'react';

import { getHocComponentName } from '../../../utils';

const UNCATCH_ERROR = '未捕获的异常';

export const withErrorBoundary  = (WrappedComponent: React.ComponentType<{}>) => {
    type HOCState = {
        readonly error: Error | null | undefined;
    };

    return class MyCatchContainer extends React.Component<{ children: JSX.Element }> {
        static readonly displayName = getHocComponentName(
            MyCatchContainer.displayName,
            WrappedComponent,
        );

        readonly state: HOCState = {
            error: undefined,
        };

        componentDidCatch(error: Error | null, errorInfo: object) {
            this.setState({
                error: error || new Error(UNCATCH_ERROR),
                errorInfo: errorInfo
              });
            // this.logErrorToMyService(err, info);
        }

        // @todo
        // logErrorToMyService = () => {}

        render() {
            const {
                children,
                ...otherProps
            } = this.props as {
                children: React.ReactNode,
            };
            const {
                error
            } = this.state;

            if (error) {
                return <WrappedComponent {...otherProps} />;
            }
            return children;
        }
    };
};
