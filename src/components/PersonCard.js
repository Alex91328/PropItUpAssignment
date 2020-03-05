import React, { Component } from 'react';

class personCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: props.Age
        }
    }
    handleClick = () => {
        this.setState({
            ageCount: this.state.ageCount + 1
        })
    }
    render() {
        const { FirstName, LastName, HairColor } = this.props;
        return (
            <div>
                <h1>{LastName}, {FirstName}</h1>
                <h6>Age:{this.state.ageCount}</h6>
                <h6>Hair Color: {HairColor}</h6>
                <button onClick={this.handleClick}>Birthday For {FirstName} {LastName}</button>
            </div>
        );
    }
}
export default personCard;
