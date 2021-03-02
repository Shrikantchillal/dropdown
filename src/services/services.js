import axios from 'axios';
import {allList} from '../actions/actions';

const services = store => next => action => {
    const apiUrl = '../data/dropdownList.json';
    const headers = {'content-type': 'application/json', 'Accept': 'application/json'};
    switch(action.type) {
        case 'GET_LIST':
            axios.get(apiUrl, headers)
                .then((res) => {
                    let data = res.data;
                    next(allList(data));
                })
                .catch((error) => {
                    console.log('error', error);
                });
        break;
    }   
}

export default services;