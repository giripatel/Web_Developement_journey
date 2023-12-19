import React from "react";

function Button(
    children,
    type = 'button',
    textColor = 'text-white',
    bgColor = 'bg-blue-600',
    className='',
    ...props
){
    <button  className={`px-4 py-2 rounded-lg ${className}${textColor}${bgColor}
     `} {...props}>
        {children}
    </button>
}

export default Button