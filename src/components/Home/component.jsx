import React, {Component} from 'react';
import TabNavigation from '../Shared/TabNavigation';
import Counter from '../Counter';
import About from '../About';

class Home extends Component {

    state = {
        activeTab: 'counter'
    }


    componentDidMount(){
        this.props.fetchCases();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.loading !== this.props.loading ||
                nextState.activeTab !== this.state.activeTab;
    }

    render() {
        const {activeTab} = this.state;
        return (
            <main className="main">
                <TabNavigation activeTab={activeTab} tabChange={this.handleTabChange} />
                {activeTab === 'counter' && <Counter {...this.props}  />}
                {activeTab === 'about' && <About />}
            </main>
        )
    }

    handleTabChange = (tab) => {
        this.setState({
            activeTab: tab
        });
    }
}

export default Home;