import React from 'react';

class Filters extends React.Component{
    render(){
        return(
            <fieldset className="filters">
                <label htmlFor="printType">Print Type: </label>
                <select name="printType" id="printType" value={this.props.printType} onChange={event => this.props.change('printType', event.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="bookType">Book Type: </label>
                <select name="bookType" id="bookType" value={this.props.bookType} onChange={event => this.props.change('bookType', event.target.value)}>
                    <option value="noFilter">No Filter</option>
                    <option value="free-ebooks">Free E-Books</option>
                    <option value="paid-ebooks">Paid E-Books</option>
                </select>
            </fieldset>
        )
    }
}

export default Filters