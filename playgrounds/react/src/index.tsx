import React from 'react'
import ReactDOM from 'react-dom'

import { Select } from '@react-hoa-utils/react'

import '@react-hoa-utils/scss/lib/Utilities.css'
import '@react-hoa-utils/scss/lib/Text.css'
import '@react-hoa-utils/scss/lib/Margin.css'
import '@react-hoa-utils/scss/lib/Select.css'
import '@react-hoa-utils/scss/lib/global.css'

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

ReactDOM.render(
    <div style={{ padding: '40px' }}>
        <Select options={options} />
    </div>,
    document.querySelector('#root')
)

// <Select label='Please select a size' onOptionSelected={console.log} options={[{ label: '', value: '' }]} />
