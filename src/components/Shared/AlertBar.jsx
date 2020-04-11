import React from 'react';

const alertTypes = {
    'warning': 'is-warning',
    'danger': 'is-danger',
    'success': 'is-success',
    'info': 'is-info'
}

const AlertBar = ({title, type}) => {
    return (
        <article className={`message ${alertTypes[type]}`}>
            <div className="message-header">
                <p>{title}</p>
            </div>
        </article>
    )
}

export default AlertBar;