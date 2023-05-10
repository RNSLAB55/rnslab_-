import { useNavigate } from "react-router-dom";

import logo from "../assets/img/logo.png";

const Login = () => {
    const navigate = useNavigate();

    const goSingUp = () => {
        navigate("/singup");
    }

    const goMain = () => {
        navigate("/main");
    }

    return (
        <div className="login">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="title">로그인</div>
            <div className="account">
                <input placeholder="아이디를 입력 해주세요"></input>
                <input placeholder="비밀번호를 입력 해주세요" type="password"></input>
            </div>
            <button onClick={goMain}>로그인</button>
            <div className="singUp">
                아직 회원이 아니신가요? 
                <span className="singUpBtn" onClick={goSingUp}>회원가입하기</span>
            </div>
            <div className="version">버전 v0.1</div>
        </div>
    )
}

export default Login;