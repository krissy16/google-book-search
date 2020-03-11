import React from 'react';
import Search from '../Search/Search';
import Filters from '../Filters/Filters';

class Forms extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            printType: 'all',
            bookType: 'noFilter'
        }
    }
    handleChange(field, value){
        this.setState({
            [field]: value
        });
    }
    render(){
        let formSubmit = (event) => {
            event.preventDefault();
            this.props.getBooks(this.state.search, this.state.printType, this.state.bookType);
        }
        return(
            <form onSubmit={(e) => formSubmit(e)}>
                <Search 
                    getBooks={this.props.getBooks} 
                    search={this.state.search} 
                    change={(field,value) => this.handleChange(field, value)}/>
                <Filters 
                    getBooks={this.props.getBooks} 
                    printType={this.state.printType} 
                    bookType={this.state.bookType}
                    change={(field,value) => this.handleChange(field, value)}/>
            </form>
        )
    }
}

export default Forms















