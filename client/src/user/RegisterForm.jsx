import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout } from '../GlobalStyle';
import { signUpUser } from '../redux/userSlice';

function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setuserInfo] = useState({
    email: '',
    username: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpUser(userInfo))
      .then((res) => {
        if (res.payload.success === true) return navigate('/login');
        return alert('잘못된 입력입니다');
      })
      .catch((err) => alert(`${err}`));
  };

  return (
    <Layout>
      <form htmlFor="register" onSubmit={onSubmit} onChange={onChange}>
        <div>
          <label htmlFor="username">
            닉네임
            <input id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            이메일 주소
            <input id="email" name="email" type="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            비밀번호
            <input id="password" name="password" type="password" />
          </label>
        </div>

        <button type="submit">회원가입</button>
      </form>
    </Layout>
  );
}

export default RegisterForm;
