import './Button.css'
import { useState } from 'react'

function Button() {
    const [text, setText] = useState('Открыть')
    console.log('Rerender')

    const clicked = () => {
        setText(t => t + '!')
        console.log(text)
    }

    return (
        <button onClick={clicked} className='button accent'>{text}</button>
    )
}

export default Button