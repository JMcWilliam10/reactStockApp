import React, { Component } from 'react';
import Axios from 'axios';

class SearchComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: []
        };
    }
    render(){
        return(
            <div>Search Component</div>
        )
    }
}






export default SearchComponent;