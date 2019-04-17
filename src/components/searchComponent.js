import React, { Component } from 'react';
import Axios from 'axios';

class SearchComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            query: ''
        };
    }

    render(){
        return(
            <form action="">
                <label for="search"></label>
                <input type="text" placeholder="Company Name" name="search a term" id="search" className="search flexItem"/>
                <input type="submit" value="submit" className="submit flexItem"/>
            </form>
        )
    }
}






export default SearchComponent;