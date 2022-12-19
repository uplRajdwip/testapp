import { FormControlLabel, Radio } from '@mui/material'
import React from 'react'

const MuiRadio = (props) => {

    return (
        <div className={props.radioRootClass}>
            <lable className={props.lableClass}>{props.lable}</lable>
            <FormControlLabel
                value={props.value}
                control={
                    <Radio
                        id={props.id}
                        value={props.value}
                        name={props.name}
                        sx={props.sx}
                        checked={props.checked}
                        checkedIcon={props.checkedIcon}
                        icon={props.unCheckedIcon}
                        color={props.color}
                        disabled={props.disabled}
                        onChange={props.handleRadioChange}
                        required={props.required}
                        size={props.size}
                    />}
                label={props.name} />
        </div>
    )
}

export default MuiRadio