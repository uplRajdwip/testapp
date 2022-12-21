import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const MuiPasswordField = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            // console.log("Input value", e.target.value);
            e.preventDefault();
            props.onKeyPress();
        }
    };

    const onChange = (event) => {
        props.onChange(event);
    };

    return (
        <div className={`textField ${props.extracls}`}>
            <label className="input-label">{props.label}</label>
            <TextField
                autoComplete="off"
                autoFocus={props.autoFocus}
                className={`textfieldclass ${props.textnewclass ? props.textnewclass : ""}`}
                color={props.color}
                defaultValue={props.defaultValue}
                disabled={props.disabled}
                error={props.error}
                fullWidth={false}
                helperText={props.helperText}
                id={props.id}
                inputProps={props.inputProps}
                label={props.inputLabel}
                margin={props.margin}
                multiline={props.multiline}
                name={props.passwordinputText}
                onChange={onChange}
                placeholder={props.placeholder}
                required
                rows={props.rows}
                size={props.size}
                type={"password"}
                value={props.value}
                onKeyPress={onKeyPress}
                // tabIndex={props.tabIndex}
                variant="outlined"
                InputProps={
                    {
                        className: "",
                        type: showPassword ? "text" : "password",
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                // tabIndex={-1}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                }
            />
        </div>
    );
}


export default MuiPasswordField 