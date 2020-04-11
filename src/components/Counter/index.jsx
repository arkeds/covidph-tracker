import React from 'react';
import Message from '../Shared/Message';
import AlertBar from '../Shared/AlertBar';
import AlertBarLoading from '../Shared/AlertBarLoading';

const Counter = ({
    loading,
    lastUpdate,
    infected,
    deceased,
    recovered,
    tested,
    fetchCases
}) => {
    return (
        <React.Fragment>
        {
            loading ?
                <AlertBarLoading/>
            : (
                <React.Fragment>
                    <AlertBar title={`Data as of ${lastUpdate}`} type="info" />
                    <section className="columns">
                        <div className="column">
                            <Message type={'warning'} title="Confirmed Cases" message={infected} />
                        </div>
                        <div className="column">
                            <Message type={'danger'} title="Deceased" message={deceased} />
                        </div>
                        <div className="column">
                            <Message type={'success'} title="Recovered" message={recovered} />
                        </div>
                        <div className="column">
                            <Message type={'info'} title="Tested" message={tested} />
                        </div>
                        
                    </section>
                    <button 
                            onClick={fetchCases} 
                            className="refresh-button button is-primary is-fullwidth"
                        >
                            Reload Data
                        </button>
                </React.Fragment>
            )    
        }
        </React.Fragment>
    )
}

export default Counter;