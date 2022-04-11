import React from "react";

export default class AlarmButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="alarm-button">
                <button className={'btn ' + this.props.activatedClass} onClick={this.props.buttonActionCallback}>{this.props.buttonText}</button>
            </div>
        );
    }
}