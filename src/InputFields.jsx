import React, { useState } from 'react';


export const InputData = (type, placeholder, value = '') => {
    return {
        renderFunc: InputField,
        type: type,
        placeholder: placeholder,
        value: value
    }
}

export const TextAreaData = (placeholder, value = '') => ({
    renderFunc: TextArea,
    value: value,
    placeholder: placeholder
})

export function InputField(key, onChange, editable, data) {
    return editable ? (
        <div className='inputContainer' key={key}>
            <label htmlFor={key}>{data.placeholder}: </label>
            <input
                key={key}
                type={data.type}
                value={data.value}
                onChange={onChange}
                placeholder={data.placeholder}
            />
        </div>
    ) : (  
        <p key={key}>{data.placeholder}: {data.value}</p>
    )
}

export function TextArea(key, onChange, editable, data) {
    return editable ? (
        <div className='inputContainer' key={key}>
            <label htmlFor={key}>{data.placeholder}: </label>
            <textarea
                key={key}
                value={data.value}
                onChange={onChange}
                placeholder={data.placeholder}
            />
        </div>
    ) : (
        <p key={key}>
            {data.placeholder}: 
            {data.value.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </p>
    )
}