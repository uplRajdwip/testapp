import { Checkbox } from '@mui/material'
import React from 'react'

const MuiCheckBox = (props) => {

    return (
        <div>
            <Checkbox
                id={props.id}
                checked={props.checked}
                value={props.value}
                onChange={props.handleBoxChange}
                sx={props.sx}
                required={props.required}
                size={props.size}
                disabled={props.disabled}
                defaultChecked={props.defaultChecked}
                color={props.color}
            />
        </div>
    )
}

export default MuiCheckBox