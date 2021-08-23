import React from "react";
import { googleProvider } from "../../config/authMethod";
import socialMediaAuth from "../../service/auth";
import "./Login.css";
import glogo from "../../images/glogo.png";




const LoginForm = (props) => {



    let [valueState, setValue] = React.useState({
        name: "",
        email: "",
        pass: "",
        npass: "",
        state: ""
    });

    let [err, setErr] = React.useState({
        errExist: false,
        errtext: ""
    })

    function handleInputChange(e) {
        setValue({
            ...valueState,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!valueState.name ||
            !valueState.email ||
            !valueState.pass ||
            !valueState.npass) {
            setErr({
                errExist: true,
                errtext: "Some fields are missing"
            })
        }
        else if (valueState.name.length < 2) {
            setErr({
                errExist: true,
                errtext: "Name is too small"
            })
        }
        else if (valueState.pass !== valueState.npass) {
            setErr({
                errExist: true,
                errtext: "Password do not match"
            })
        }
        else {
            setErr({
                errExist: false,
                errtext: ""
            })
            props.changeData(valueState.name);
        }
    }

    const handleGoogle = async (provider) => {
        const res = await socialMediaAuth(provider);
        if (res.email) {
            props.changeData(res.email);
        }

    }


    return (
        <form>
            <div className="input_group">
                <label className="input_label red_star">
                    <span className="label_text">Name</span>
                </label>
                <input className="input" name="name" required value={valueState.name} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label red_star">
                    <span className="label_text">Email</span>
                </label>
                <input className="input" type="email" name="email" required value={valueState.email} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label red_star">
                    <span className="label_text">Password</span>
                </label>
                <input className="input" type="password" name="pass" required value={valueState.pass} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label red_star">
                    <span className="label_text">Re-enter your password</span>
                </label>
                <input className="input" type="password" name="npass" required value={valueState.npass} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label red_star">
                    <span className="label_text">State</span>
                </label>
                <select name="state" onChange={handleInputChange} value={valueState.state}>
                    <option value="Haryana">Haryana</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                </select>
            </div>
            {
                err.errExist ? <div className="err">{err.errtext}</div> : null
            }
            <button type="submit" className="button button_wide" onClick={handleSubmit}>
                Create your Account
            </button>
            <div className="button2" onClick={() => handleGoogle(googleProvider)}>
                <img src={glogo} />
                <div>Sign in with Google</div>
            </div>


        </form>
    )
}


const Login = (props) => {
    return (
        <div className="login-wrapper">
            <div className="login-form">
                <div className="banner-img">
                    <h1><span id="head-span1">Urban</span><span id="head-span2">Stock</span></h1>
                </div>
                <div className="form-container">
                    <LoginForm changeData={props.changeData} />
                </div>
            </div>

        </div>
    )
}

export default Login;