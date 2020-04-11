import React, {Component} from 'react';
import Message from '../Shared/Message'

class Home extends Component {

    componentDidMount(){
        this.props.fetchCases();
    }

    render() {
        return (
            <main className="main columns">
                <div className="column">
                    <Message type={'warning'} title="Confirmed Cases" message={this.props.infected} />
                </div>
                <div className="column">
                    <Message type={'danger'} title="Deceased" message={this.props.deceased} />
                </div>
                <div className="column">
                    <Message type={'success'} title="Recovered" message={this.props.recovered} />
                </div>
                <div className="column">
                    <Message type={'info'} title="Tested" message={this.props.tested} />
                </div>
            </main>
        )
    }
}

export default Home;