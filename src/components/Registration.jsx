import React from 'react';

const Register = () => {
    let authData = {}
    return (
        <div className="auth">
            <div className="login">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log(authData.userName.value)
                }} className="auth-form">
                    <label>Логин:</label>
                    <input ref={input => authData.userName = input} type="text" name="login"/>
                    <label>Пароль:</label>
                    <input ref={input => authData.userPassword = input} type="text" type="password" name="password" />
                    <input type="submit" value="Войти" className="submitButton" />
                </form>
                <a href="">Регистрация</a>
                <a href="">Забыли пароль</a>
            </div>
        </div>
    )
}

export default Register;