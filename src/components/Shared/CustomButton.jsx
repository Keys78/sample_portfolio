import React from 'react'

const CustomButton = ({onClick, text}) => {
    return (
        <button onClick={onClick} className='uppercase border-b border-green-500 md:text-[24px] text-[16px]'>
            {text}
        </button>
    )
}

export default CustomButton