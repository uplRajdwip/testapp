import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import es from 'react-phone-input-2/lang/es.json'
import 'react-phone-input-2/lib/material.css'

const ReactPhoneInput = (props) => {
  const [value, setValue] = useState()
  console.log(value);

  // Countries to be included only 
  const onlyCountries = ['in', 'fr', 'us', 'ar', 'de', 'es']

  return (
    <div className='flex justify-center items-center w-fit m-5'>
      <PhoneInput
        country={'in'}
        onlyCountries={onlyCountries}
        // localization={es}
        placeholder="Enter phone number"
        inputProps={{
          name: 'phoneNo',
          required: true,
          autoFocus: true
        }}
        enableSearch={true}
        // masks={{in: '(...) ..-..-..'}}
        value={value}
        onChange={setValue}
        isValid={(value, country) => {
          if (value.match(/12345/)) {
            return 'Invalid value: ' + value + ', ' + country.name;
          } else if (value.match(/1234/)) {
            return false;
          } else {
            return true;
          }
        }}
      />
    </div>

  )
}

export default ReactPhoneInput