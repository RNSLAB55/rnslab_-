import { useState } from 'react';
import logo from '../assets/img/logo.png';

const SingUp = () => {
    const [values, setValues] = useState({
        name : "",
        id : "",
        pw : "",
        samePw : "",
    });
    const [errors, setErrors] = useState({
        name : "",
        id : "",
        pw : "",
        samePw : "",
    });
    const [touched, setTouched] = useState({
        name : false,
        id : false,
        pw : false,
        samePw : false,
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(); //필드 검사
        setErrors(errors);
        if(Object.values(errors).some(v => v)){
            return
        }
        console.log(e);
        console.log(values.pw.length);
    }

    const validate = () => {
        const errors = {
            name : "",
            id : "",
            pw : "",
            samePw : "",
        };

        if(!values.name){
            errors.name = "이름을 입력해주세요"
        };

        if(!values.id){
            errors.id = "아이디를 입력해주세요"
        };

        if(!values.pw){
            errors.pw = "비밀번호를 입력해주세요"
        };

        if(!values.samePw){
            errors.samePw = "비밀번호를 확인해주세요"
        }else if(values.samePw != values.pw){
            errors.samePw = "비밀번호와 같지 않습니다"
        }

        console.log(errors);
        return errors;
    }

    return (
        <div className="singup">
            <div>
                <img src={logo} alt=''/>
            </div>
            <div className='title'>회원가입</div>
            <form onSubmit={handleSubmit} className='account'>
                <div className='input'>
                    <input type='text' name='name' value={values.name} placeholder="이름을 입력해주세요" onChange={handleChange}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div className='input'>
                    <input className='id' type='text' name='id' value={values.id} placeholder="아이디를 입력해주세요" onChange={handleChange}/>
                    <button className='idCheck'>중복확인</button>
                    {errors.id && <span>{errors.id}</span>}
                </div>
                <div className='input'>
                    <input type='password' name='pw' value={values.pw} placeholder="비밀번호를 입력해주세요" onChange={handleChange}/>
                    {errors.pw && <span>{errors.pw}</span>}
                </div>
                <div className='input'>
                    <input type='password' name= 'samePw' value={values.samePw} placeholder="비밀번호를 확인해주세요" onChange={handleChange}/>
                    {errors.samePw && <span>{errors.samePw}</span>}
                </div>
                <div className='passwordconditions'>
                    비밀번호는 영문,숫자를 혼합하여 8~20자로 입력해주세요.
                </div>
                <button type="submit" className='singupbtn'>회원가입</button>
            </form>
            <div className='consent'>
                    {/*  회원가입 시 알앤에스랩의 서비스 이용 약관과 개인정보 보호정책에 동의하게 됩니다. */}
            </div>
        </div>
    )
};

export default SingUp;