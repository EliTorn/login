import React from "react";
import axios from "axios";
import Errors from "./Errors";
import Success from "./Success";


class LoginPage extends React.Component {
    state = {
        userName: "",
        password: "",
        repeatPassword: "",
        errorCode: undefined,
        success: "",
        explain: ""
    };
    onValueChange = (key, event) => {
        this.setState({
            [key]: event.target.value
        });
    }


    allowSignUp = () => {
        let signUp = true;
        if (this.state.userName.length > 0) {
            if (this.state.password.length >= 4) {
                if (this.state.repeatPassword === this.state.password) {
                    signUp = false;
                }
            }
        }
        return signUp;
    }

    submit = () => {

        axios.get("http://localhost:8080/sign-up?username=" + this.state.userName + "&password=" + this.state.password + "&password2=" + this.state.repeatPassword, this.config)
            .then((response) => {
                if (response.data.success) {
                    this.setState({
                        errorCode: response.data.errorCode,
                        success: response.data.success,
                        explain: response.data.explain
                    })
                } else {
                    this.setState({
                        errorCode: response.data.errorCode,
                        success: false
                    })
                }

            })

    }


    render() {
        return (
            <div>
                <div>
                    Chose User Name: <input value={this.state.userName}
                                            onChange={(event) => this.onValueChange("userName", event)}
                />
                </div>
                <div>
                    Chose Password: <input value={this.state.password}
                                           onChange={(event) => this.onValueChange("password", event)}/>
                </div>
                <div>
                    Repeat Password: <input value={this.state.repeatPassword}
                                            onChange={(event) => this.onValueChange("repeatPassword", event)}/>
                </div>
                <div>
                    <button disabled={this.allowSignUp()} onClick={this.submit}>
                        Sign Up
                    </button>
                </div>
                {
                    this.state.success &&
                    <div> You Have Sign Up<Success success={this.state.success} errorCode={this.state.errorCode}
                                                   explain={this.state.explain}/>
                    </div>

                }
                {
                    !this.state.success && this.state.errorCode &&
                    <Errors errorCode={this.state.errorCode}/>
                }
            </div>

        )

    }


}

export default LoginPage;