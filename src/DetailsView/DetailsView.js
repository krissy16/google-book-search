import React from 'react';

class DetailsView extends React.Component{
    render(){
        return(
        <div>
            <h1>{this.props.details.volumeInfo.title}</h1>
            <p>For more info view this <a href={this.props.details.volumeInfo.infoLink} target='_blank'>book</a> in the google play store.</p>
            <p onClick={() => this.props.hideDetails()}>Back</p>
        </div>
        )
    }
}

export default DetailsView