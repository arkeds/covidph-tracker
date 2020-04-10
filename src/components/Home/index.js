import {connect} from 'react-redux';
import {fetchCases} from '../../store/reducers/cases';
import Home from './component';

const mapState = (state) => {
    return {
        infected: state.case.infected,
        deceased: state.case.deceased,
        recovered: state.case.recovered,
        tested: state.case.tested
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchCases: () => dispatch(fetchCases()),
    }
}


export default connect(mapState, mapDispatch)(Home)
