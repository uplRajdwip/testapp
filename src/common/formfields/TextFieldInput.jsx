import { InputAdornment, TextField } from '@mui/material'
// import { ErrorOutlined } from "@mui/icons-material";
import React from 'react'

const TextFieldInput = (props) => {
  const clickEnter = (e) => {
		if (e.key === "Enter") {
			// Do code here
			e.preventDefault();
			props.clickEnter();
		}
	};
  return (
     <div className={`${props.extracls}`}>
      <label className={` ${props.lableCls}`}>{props.label}</label>
      <TextField
      style={props.style}
      autoFocus={props.autoFocus}
      onChange={props.onChange}
      disabled={props.disabled}
      id={props.id}
      variant={props.variant ? props.variant : "outlined"}
      label={props.inputLabel}
      defaultValue={props.defaultValue}
      className={`${props.textnewclass ? props.textnewclass : ""
        }`}
      type={props.type}
      autoComplete={props.autoComplete || "off"}
      name={props.textinputname}
      multiline={props.multiline}
      rows={props.rows}
      fullWidth={props.fullwidth}
      placeholder={props.placeholder}
      error={props.error}
      value={props.value}
      inputProps={props.inputProps}
      helperText={props.helperText}
      onKeyPress={(e) => clickEnter(e)}
      required={props.required}
      data-cy={props.dataCy}
      onBlur={props.onBlur}
      margin={props.margin}
      InputProps={{
        endAdornment: props.email ? (
          <InputAdornment position="end">
            {/* <ErrorOutlined className="erroricon" /> */}
          </InputAdornment>
        ) : props.endIcon,
        startAdornment: props.startAdorment && (
          <InputAdornment position="start">
            {/* {UserIcon} */}
          </InputAdornment>
        ),
        disableUnderline: props.disableUnderline,

      }}
       />
    </div>
  )
}

export default TextFieldInput