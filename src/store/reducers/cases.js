import fetch from 'node-fetch';
const url = 'https://api.apify.com/v2/key-value-stores/lFItbkoNDXKeSWBBA/records/LATEST?disableRedirect=true';
const ATTEMPT_FETCH_CASES = 'ATTEMPT_FETCH_CASES';
const SUCCEED_FETCH_CASES = 'SUCCEED_FETCH_CASES';
const FAILED_FETCH_CASES = 'FAILED_FETCH_CASES';


export const fetchCases = () => {
    return async dispatch => {
        dispatch({
            type: ATTEMPT_FETCH_CASES,
        });
        const response = await fetch(url, {method: 'get', headers: {'Accept': 'application/json'}});
        const data = await response.json();
        dispatch({
            type: SUCCEED_FETCH_CASES,
            payload: data,
        });
    } 
}



const initialState = {
    infected: 0,
    deceased: 0,
    recovered: 0,
    tested: 0,
    loading: false,
}

const casesReducer = (state = initialState, {type, payload}) => {

    switch(type) {
        case ATTEMPT_FETCH_CASES: {
            state = {
                ...state,
                loading: true,
            }
            break;
        }
        case FAILED_FETCH_CASES: {
            state = {
                ...state,
                loading: false,
            }
            break;
        }
        case SUCCEED_FETCH_CASES: {
            state = {
                ...state,
                infected: payload.infected,
                tested: payload.tested,
                recovered: payload.recovered,
                deceased: payload.deceased
            }
            break;
        }
        default: {
            return state;
        }
    }

    return state;
} 

export default casesReducer;

