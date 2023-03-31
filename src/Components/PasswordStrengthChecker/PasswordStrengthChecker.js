import React from 'react';
import { useState } from 'react';
import PasswordInputField from '../PasswordInputField/PasswordInputField';
import StrengthMeter from '../StrengthMeter/StrengthMeter';
import './PasswordStrengthChecker.scss';

function PasswordStrengthChecker() {

    const [passwordInput, setPasswordInput] = useState('');
    const [smallPassword, setSmallPassword] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);
    const [easyPassword, setEasyPassword] = useState(false);
    const [mediumPassword, setMediumPassword] = useState(false);
    const [strongPassword, setStrongPassword] = useState(false);

    const handlePassword = (e) => {
        setPasswordInput(e.target.value);
    }

    const passwordStrength = (e) => {
        const passwordValue = e.target.value;
        const passwordLength = passwordValue.length;

        const easyRegExp = /[0-9]|[A-Za-z]|(?=.*[^A-Za-z0-9])/;
        const mediumRegExp = /((?=.*[A-Za-z])(?=.*[0-9]))|((?=.*[A-Za-z])(?=.*[^A-Za-z0-9]))|((?=.*[0-9])(?=.*[^A-Za-z0-9]))/;
        const strongRegExp = /(?=.*[A-Za-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/;

        const easyPassword = easyRegExp.test(passwordValue);
        const mediumPassword = mediumRegExp.test(passwordValue);
        const strongPassword = strongRegExp.test(passwordValue);

        if (passwordValue === 0) {
            setEmptyPassword(true);
        } else {
            if ((passwordLength >= 1) && (passwordLength < 8)) {
                setSmallPassword(true);
            } else {
                setSmallPassword(false);
            }
            if (passwordLength >= 8 && (easyPassword || mediumPassword || strongPassword)) {
                setEasyPassword(true);
            } else {
                setEasyPassword(false);
            }
            if (passwordLength >= 8 && easyPassword && (mediumPassword || strongPassword) ) {
                setMediumPassword(true);
            } else {
                setMediumPassword(false);
            }
            if (passwordLength >= 8 && (easyPassword && mediumPassword) && strongPassword) {
                setStrongPassword(true);
            } else {
                setStrongPassword(false);
            }
        }
    }

    return(
        <div className='password-container'>
            <h1 className='password-title'>Test your Password Strength</h1>
            <PasswordInputField 
                handlePassword = {handlePassword} 
                passwordValue = {passwordInput} 
                passwordStrength = {passwordStrength} 
                />
            <StrengthMeter 
                smallPassword = {smallPassword}
                emptyPassword = {emptyPassword} 
                easyPassword = {easyPassword} 
                mediumPassword = {mediumPassword} 
                strongPassword = {strongPassword}
                />
        </div>
    )
}

export default PasswordStrengthChecker;