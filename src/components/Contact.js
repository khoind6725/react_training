import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    onClick = (isChecked) => {
        this.setState({
            isChecked: isChecked
        })
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={ () => this.onClick(false)}>Cho phép</button>
                &nbsp;
                <button type="button" className="btn btn-default" onClick={() => this.onClick(true)}>Không Cho phép</button>
                <Prompt
                    when={this.state.isChecked}
                    message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
                />
            </div>
        );
    }
}

export default Contact;