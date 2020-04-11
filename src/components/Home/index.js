import {connect} from 'react-redux';
import {fetchCases} from '../../store/reducers/cases';
import Home from './component';

const mapState = (state) => {
    const date =  new Date(state.case.lastUpdate);
    return {
        infected: state.case.infected,
        deceased: state.case.deceased,
        recovered: state.case.recovered,
        tested: state.case.tested,
        lastUpdate: state.case.lastUpdate !== "" ? date.toGMTString() : "",
        loading: state.case.loading,
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchCases: () => dispatch(fetchCases()),
    }
}


export default connect(mapState, mapDispatch)(Home)
