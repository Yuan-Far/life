import * as React from 'react';

const NotFoundJpg = require('./404.jpg');

const NotFound = () => {
    const styles: object = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: '#aaa',
    };

    return (
        <div style={styles}>
            <img
                style={{position: 'relative', width: '800px', height: '600px'}}
                src={NotFoundJpg}
                alt="  图片资源引用失败，请检查..."
            />
        </div>
    );
};

export default NotFound;
