import { TextField } from '@mui/material';
import React, { useState } from 'react'
import validator from 'validator'
const EmailFieldInput = (props) => {

    const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
 

    const clickEnter = (e) => {
        if (e.key === "Enter") {
          // Do code here
          props.clickEnter();
        }
      };

    // const onChange = (event) => {
    //     props.onChange(event);
    //     console.log(event ,"event")
    //   };
    return (
    <div className={`textfieldinput flex flex-col ${props.extracls}`}>
    <label className="    text-[14px]">{props.label}</label>
    <TextField
      autoFocus={props.autoFocus}
      onChange={(e) => validateEmail(e)}
      disabled={props.disabled}
      id={props.id}
      variant="outlined"
      label={props.inputLabel}
      defaultValue={props.defaultValue}
      className={`textfieldclass ${props.textnewclass ? props.textnewclass : ""
        }`}
      type={"email"}
      autoComplete="off"
      name={props.textinputname}
      multiline={props.multiline}
      rows={props.rows}
      fullWidth={props.fullwidthState}
      placeholder={props.placeholder}
      error={props.error}
      value={props.value}
    //   onKeyPress={clickEnter}
      required={props.required}
      onBlur={(e) => validateEmail(e)}
      helperText={props.helperText}
      data-cy={props.dataCy}
      InputProps={{
        // startAdornment: (
        //   <InputAdornment position="start">
        //     {/* {emailStartSvg} */}
        //     </InputAdornment>
        // ),
      }}
      tabIndex={props.tabIndex}
      
    />
    <p >{emailError}</p>
  </div>
  )
}

export default EmailFieldInput