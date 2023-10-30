import { useState } from "react";
import axios from "axios";

import logo from "../assets/img/logo.png";
import Swal from "sweetalert2";

const SingUp = () => {
    const [name, setName] = useState(''); //DB에 name으로 보낼 변수
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [samePw, setSamePw] = useState('');
    const [checkedId, setCheckedId] = useState(''); //DB에 id로 보낼 변수
    const [active, setActive] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [same, setSame] = useState(false);

    const sweetAlert = (icon, text) => {
        Swal.fire({
            icon : `${icon}`,
            title : `중복확인`,
            text : `${text}`
        });
    }

    const checkId = async () => {
        try {
            const response = await axios.post('/checkId', {id}); 
            if(response.data.length){
                setActive(true);
                setDisabled(false);
                sweetAlert("error","이미 있는 아이디입니다.");
            }else if(id == ""){
                setActive(true);
                setDisabled(false);
                sweetAlert("error","아이디를 입력해주세요.");
            }else { 
                setActive(false);
                setDisabled(true);
                setCheckedId(id);
                sweetAlert("success","사용가능한 아이디입니다.");
            }
        }catch(e) {
            console.log("Error >>", e);
        }
    }

    const goLogin = () => {
        // if(checkId == )
    };

    return (
        <div className="singup">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="title">회원가입</div>
            <div className="account">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력해주세요"></input>
                <input value={id} onChange={(e) => setId(e.target.value)} className={"id" + (active ? 'Active' : '')+(disabled ? 'Disabled' : '')} placeholder="아이디를 입력해주세요"></input>
                <button className="idCheck" onClick={checkId}>중복확인</button>
                <input value={pw} onChange={(e) => setPw(e.target.value)} type="password" className="password" placeholder="비밀번호를 입력해주세요"></input>
                <input value={samePw} onChange={(e) => {
                    setSamePw(e.target.value);
                    if(pw === e.target.value){
                        setSame(true);
                    }    
                }} type="password" placeholder="비밀번호를 확인해주세요"></input>
            </div>
            <div className="passwordconditions">
                비밀번호는 영문,숫자를 혼합하여 8~20자로 입력해주세요.
            </div>
            <button onClick={goLogin}>회원가입</button>
            <div className="consent">
                {/* 회원가입 시 알앤에스랩의 서비스 이용 약관과 개인정보 보호정책에 동의하게 됩니다. */}
            </div>
        </div>
    )
}

export default SingUp;