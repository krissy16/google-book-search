import React from 'react';
import Forms from '../Forms/Forms';
import ResultList from '../ResultList/ResultList';

class BookSearchView extends React.Component{
    render(){
        return(
            <div>
                <h1>Google Book Search</h1>
                <Forms getBooks={(query, printType, bookType) => this.props.getBooks(query, printType, bookType)}/>
                <ResultList results={this.props.results} showDetails={book => this.props.showDetails(book)}/>
            </div>
        )
    }
}

export default BookSearchView