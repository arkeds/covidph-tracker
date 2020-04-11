import React from 'react';

const messageTypes = {
    'warning': 'is-warning',
    'danger': 'is-danger',
    'success': 'is-success',
    'info': 'is-info'
}


const Message = ({message, type, title}) => {
    return (
        <article className={`message ${messageTypes[type]}`}>
            <div className="message-header">
                <p>{title}</p>
            </div>
            <div className="message-body">
                <p className="align-center">{message}</p>
            </div>
        </article>
    )
}

export default Message;