import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: ''
        }
    }

    onChange = (e) => {
        let { target } = e;
        let { name } = target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onLogin = (e) => {
        e.preventDefault();
        let { txtUsername, txtPassword } = this.state;
        if (txtUsername === 'huykhoi1993' && txtPassword === '167601') {
            localStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }))
        }
    }

    render() {
        let { txtUsername, txtPassword } = this.state;
        let loggedInUser = localStorage.getItem('user');
        let { location } = this.props;
        if (loggedInUser !== null) {
            return <Redirect
                to={{
                    pathname : '/products',
                    state : {
                        from: location
                    }
                }}
            />;
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit={this.onLogin}>
                            <legend>Đăng nhập để xem thông tin</legend>
                            <div className="form-group">
                                <label>Username : </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="txtUsername"
                                    value={txtUsername}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password : </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="txtPassword"
                                    txt={txtPassword}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Đăng Nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;