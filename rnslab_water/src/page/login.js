import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

import logo from "../assets/img/logo.png";

const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [users, setUser] = useState([]);

    const getUsers = async() => {
        try {
            const response = await axios.post('/getuser');
            setUser(response.data);
        } catch(err) {
            console.log("Error >>",err);
        }
    }

    useEffect(() => {
        getUsers();
    },[]);

    const checkIDPW = () => {
        let check = false;
        users && users.map((user) => {
            if(id === user.userID && pw === user.userPW) {
                check = true;
            }
        })
        return check;
    }

    const goSingUp = () => {
            navigate("/singup");
    }

    const goMain = () => {
        if(checkIDPW()){
            navigate("/main");
        }else{
            alert("Please check your input");
        }
    }

    return (
        <div className="login">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="title">로그인</div>
            <div className="account">
                <input value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력 해주세요"></input>
                <input value={pw} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호를 입력 해주세요" type="password"></input>
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