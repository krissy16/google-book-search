import React from 'react';

class Search extends React.Component{
    render(){
        return(
            <fieldset className="search">
                <label htmlFor="title">Search: </label>
                <input 
                    type='text' 
                    name="title" 
                    id="title" 
                    placeholder="Title" 
                    value={this.props.search}
                    onChange={event => this.props.change('search', event.target.value)}
                    required/>
                <button type="submit">Search</button>
            </fieldset>
        )
    }
}

export default Search