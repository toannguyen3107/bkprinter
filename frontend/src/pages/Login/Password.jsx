import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Password = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
        if (passwordInputRef.current) {
            passwordInputRef.current.focus();
            requestAnimationFrame(() => {
                passwordInputRef.current.setSelectionRange(password.length, password.length);
            });
        }
    }

    const passwordInputRef = useRef(null)
      
    useEffect(() => {
        if (props.inputRef) {
            props.inputRef.current = passwordInputRef.current;
        }
    }, [props.inputRef]);

    return (
        <TextField
            margin="normal"
            required
            fullWidth
            name={props.name}
            label={props.lable}
            type={showPassword ? 'text' : 'password'}
            id={props.name}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            inputRef={passwordInputRef}
        />
    )
}

export default Password