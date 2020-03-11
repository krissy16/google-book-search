import React from 'react';
import Result from '../Result/Result';

class ResultList extends React.Component{
    static defaultProps = {
        results: []
    }
    render(){
        let results = this.props.results.map(result => {
            return <Result
                key = {result.id}
                result = {result}
                showDetails={book => this.props.showDetails(book)}
            />
        });
        return(
            <div>
                <ul>
                    {results}
                </ul>
            </div>
        )
    }
}

export default ResultList