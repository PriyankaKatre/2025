import React from 'react';

const InlineMessages = (props) => {
    const {
        message
    } = props;

    return (
        <div className='inline-message'>
            <h6>{message}</h6>
        </div>
    );
};

export default InlineMessages;
