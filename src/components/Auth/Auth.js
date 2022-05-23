import {useState, useRef, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import {Link} from "react-router-dom";
import React from "react";
import {Wrapper} from "./Auth.styles";
import {Select} from "./Auth.styles";
import axios from "axios";
import {BASE_URL} from "../../config";

const AuthTab = () => {
    const navigate = useNavigate();
    const {setAuth} = useContext(AuthContext)

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${BASE_URL}auth/sign-in`,
                JSON.stringify({email: email, password: pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: false
                });
            const token = response?.data?.message;
            const name = response?.data?.data?.first_name;
            const userType = response?.data?.data?.user_type_id;
            const imgURL = response?.data?.data?.img_url;
            const id = response?.data?.data?.id;
            setAuth({id, name, userType, imgURL, token})
            setEmail('');
            setPwd('');
            navigate('/');
        } catch (e) {
            if (!e?.response) {
                setErrMsg('no server response')
            } else if (e.response?.status > 400) {
                setErrMsg('Incorrect username or password')
            }
            errRef.current.focus();
        }
    }

    return (
        <Wrapper className='wrapper'>
            <div className="nav nav-tabs header" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sign In
                </button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sign Up
                </button>
            </div>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                     aria-labelledby="nav-home-tab">
                    <form onSubmit={handleSubmit}>
                        <div className='filter-wrapper'>
                            <div className="input-group">
                                <input id='email' ref={userRef}
                                       onChange={(e) => setEmail(e.target.value)}
                                       value={email}
                                       autoComplete='off'
                                       type="email"
                                       className="form-control"
                                       placeholder="Email"
                                       aria-label="Email"
                                       aria-describedby="basic-addon1"
                                       required
                                />
                            </div>
                            <div className="input-group">
                                <input type="password"
                                       id="password"
                                       onChange={(e) => setPwd(e.target.value)}
                                       value={pwd}
                                       required
                                       className="form-control"
                                       placeholder="Password"
                                       aria-label="Password"
                                       aria-describedby="basic-addon1"/>
                            </div>
                            <p ref={errRef} style={{color:'#ff776e', fontSize:'11px', textAlign:'center'}}>{errMsg}</p>
                            <Link to='/forgot-password'>Forgot Password?</Link>

                            <div style={{paddingBottom: "20px"}}>
                                <button className='btn signUpBtn'>Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                     aria-labelledby="nav-home-tab">
                    <div className='filter-wrapper'>
                        <div className='d-flex'>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="First Name"
                                       aria-label="First Name"
                                       aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Last Name"
                                       aria-label="Last Name"
                                       aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Email" aria-label="Email"
                                       aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                                <input type="password" className="form-control" placeholder="Password"
                                       aria-label="Password"
                                       aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="input-group">
                            <Select>
                                <option value=''>Country</option>
                            </Select>
                        </div>
                        <div className="input-group">
                            <Select>
                                <option value=''>Language</option>
                            </Select>
                        </div>
                        <div className="input-group">
                            <Select>
                                <option value=''>Type</option>
                            </Select>
                        </div>
                        <div className="input-group">
                            <Select>
                                <option value=''>Level</option>
                            </Select>
                        </div>
                        <div className="input-group">
                            <Select>
                                <option value=''>Expertise</option>
                            </Select>
                        </div>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Your Title" aria-label="Title"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group">
                            <textarea className="form-control" aria-label="About"
                                      placeholder='About yourself' rows='5'></textarea>
                        </div>
                        <div style={{paddingBottom: "20px"}}>
                            <button className='btn signUpBtn'>Create An Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default AuthTab;