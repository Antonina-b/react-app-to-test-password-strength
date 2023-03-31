import './PasswordInputField.scss';

function PasswordInputField({handlePassword, passwordValue, passwordStrength}) {
    return(
        <div className="form-container">
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="form-control" 
                onChange={handlePassword} 
                onInput={passwordStrength} 
                value={passwordValue} 
            />
        </div>
    )
}

export default PasswordInputField;