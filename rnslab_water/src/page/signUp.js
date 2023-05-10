

import logo from "../assets/img/logo.png";

const SingUp = () => {
    return (
        <div className="singup">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="title">회원가입</div>
            <div className="account">
                <input placeholder="이름을 입력해주세요"></input>
                <input placeholder="아이디를 입력해주세요"></input>
                <input className="password" placeholder="비밀번호를 입력해주세요"></input>
                <input placeholder="비밀번호를 확인해주세요"></input>
            </div>
            <div className="passwordconditions">
                비밀번호는 영문 대소문자, 숫자, 특수문자(.!@#$%)를 혼합하여 8~20자로 입력해주세요.
            </div>
            <button>회원가입</button>
            <div className="consent">
                {/* 회원가입 시 알앤에스랩의 서비스 이용 약관과 개인정보 보호정책에 동의하게 됩니다. */}
            </div>
        </div>
    )
}

export default SingUp;;