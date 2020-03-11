import React from 'react';

class Result extends React.Component{
    render(){
        const result = () => {
            if(!this.props.result){
                return (
                    <h2>No results</h2>
                )
            }
            const title = this.props.result.volumeInfo.title;
            const authors = this.props.result.volumeInfo.authors ? this.props.result.volumeInfo.authors.join(' & ') : 'No Author Found';
            const price = this.props.result.saleInfo.saleability === "NOT_FOR_SALE" ? "Not for sale" : this.props.result.saleInfo.retailPrice ? "$" + this.props.result.saleInfo.retailPrice.amount : 'Unknown';
            const image = this.props.result.volumeInfo.imageLinks.thumbnail;
            const description = this.props.result.searchInfo ?  this.props.result.searchInfo.textSnippet : 'There is no description provided for this title.';
            return (
                <>
                    <h2>{title}</h2>
                    <div className="result-details">
                        <img src={image} alt={`Book Cover for ${title}`}/>
                        <div className="details">
                            <p>Authors: {authors}</p>
                            <p>Price: {price}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                    <hr />
                </>
            )
        }
       
        return(
            <li onClick = {() => this.props.showDetails(this.props.result)}>
                    {result()}
            </li>
        )
    }
}

export default Result