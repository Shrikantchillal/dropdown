import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { getList } from '../actions/actions';
import { connect } from 'react-redux';

const Home = (props) => {

    const [newList, updateList] = useState(['Network', 'Router', 'Chaining']);

    useEffect(() => {
        props.getList();
    }, []);

    return (
        <>
            <Dropdown dropdownList={props.allList} />
            <Dropdown dropdownList={newList} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        allList: state.reducers.allList
    }
}

const mapDispatchToProps = (dispatch) => ({
    getList: () => {
        dispatch(getList());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
