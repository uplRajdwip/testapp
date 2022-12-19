import { Box, Slider } from '@mui/material'
import React from 'react'

const MuiSlider = (props) => {

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label={props.ariaLabel}
                defaultValue={props.defaultValue}
                getAriaValueText={props.getAriaValueText}
                valueLabelDisplay={props.valueLabelDisplay}
                step={props.step}
                marks
                min={props.min}
                max={props.max}
            />
        </Box>
    )
}

export default MuiSlider