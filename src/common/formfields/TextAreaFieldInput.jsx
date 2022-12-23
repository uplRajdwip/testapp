import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

const TextAreaFieldInput = (props) => {
  const clickEnter = (e) => {
		if (e.key === "Enter") {
			// Do code here
			e.preventDefault();
			props.clickEnter();
		}
	};
  return (
    <div className={`${props.extracls}`}>
      <label className={`h-8  ${props.labelCls}  text-[14px]`}>{props.label}</label>
      <TextField
        autoFocus={props.autoFocus}
        onChange={props.onChange}
        disabled={props.disabled}
        id="outlined-basic"
        variant="outlined"
        label={props.inputLabel}
        defaultValue={props.defaultValue}
        className={` ${props.textnewclassArea ? props.textnewclassArea : ""
          }`}
        type={"text"}
        autoComplete="off"
        name={props.textinputname}
        multiline={true}
        rows={props.rows}
        fullWidth={props.fullwidth}
        placeholder={props.placeholder}
        error={props.error}
        value={props.value}
        inputProps={props.inputProps}
        helperText={props.helperText}
        onKeyPress={(e) => clickEnter(e)}
        required={props.required}
        InputProps={{
          endAdornment: props.email ? (
            <InputAdornment position="end">
              {/* <ErrorOutlined className="erroricon" /> */}
            </InputAdornment>
          ) : null,
          startAdornment: (
            <InputAdornment position="start">{props.startIcon}</InputAdornment>
          ),
        }}
        data-cy={props.dataCy}

      />
    </div>
  )
}

export default TextAreaFieldInput