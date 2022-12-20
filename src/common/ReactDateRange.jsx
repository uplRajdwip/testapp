import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import React, { useState } from 'react'

const ReactDateRange = (props) => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    // console.log(state);

    return (
        <>
            <DateRangePicker
                shownDate
                minDate={props.minDate}
                maxDate
                direction={props.direction}
                onChange={item => setState([item.selection])}
                showSelectionPreview={props.showSelectionPreview}
                showMonthAndYearPickers={props.showMonthAndYearPickers}
                dateDisplayFormat={props.dateDisplayFormat}
                moveRangeOnFirstSelection={props.moveRangeOnFirstSelection}
                showMonthArrow={props.showMonthArrow}
                months={2}
                ranges={state}
                preventSnapRefocus={props.preventSnapRefocus}
                calendarFocus={props.calendarFocus}
            />
        </>
    )
}

export default ReactDateRange