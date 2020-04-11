import React from 'react';

const AlertBarLoading = () => {
    return(
        <article className={'message is-info'}>
            <div className="message-header">
                <p>
                    Fetching Data
                </p>
                <br/><br/>
                <p><i className="fa fa-spinner fa-spin fa-2x"></i></p>
            </div>
        </article>
    )
}

export default AlertBarLoading;