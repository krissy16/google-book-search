import React from 'react';
import BookSearchView from './BookSearchView/BookSearchView';
import DetailsView from './DetailsView/DetailsView';
import './App.css';

const API_KEY = 'AIzaSyDOJR4crW8W63H4ydr2tru9F48VRO5LiI0';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showDetails: false,
      bookDetails: {}
    };
  }
  fetchBooks(query, printType, bookType){
    const filter = (bookType!=='noFilter') ? `&filter=${bookType}` : '';
    const url = ` https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${printType}${filter}&maxResults=20&key=${API_KEY}`;
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
  showDetailsView(book){
    this.setState({
      showDetails: true,
      bookDetails: book
    });
  }
  hideDetailsView(){
    this.setState({
      showDetails: false,
      bookDetails: {}
    });
  }
  render(){
    return (
      <main className='App'>
        {this.state.showDetails ? 
          <DetailsView 
            details={this.state.bookDetails} 
            hideDetails={() => this.hideDetailsView()}/> 
          : 
          <BookSearchView 
            results={this.state.books.items} 
            getBooks={(query, printType, bookType) => this.fetchBooks(query, printType, bookType)}
            showDetails={book => this.showDetailsView(book)}/> }
      </main>
    )
  }
}

export default App;