import * as React from 'react';
import { withErrorBoundary } from '../../common/HOCComponent/HocErrorrBoundary/index';
import { BaseError } from '../../common/ErrorMsg/index';
import './style.less';

const ErrorMessageWithErrorBoundary = withErrorBoundary(BaseError);
const LifeIndex = () => (
    <button type="button" onClick={() => { throw new Error(`Catch me!`); }}>
        {`Throw nasty error`}
    </button >
  );

export default () => (
    <ErrorMessageWithErrorBoundary>
        <LifeIndex />
    </ErrorMessageWithErrorBoundary>
);
