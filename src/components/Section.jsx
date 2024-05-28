import { useState } from 'react';

const handleInputChangeFactory = (obj, setValues) => (field) => (e) => {
    const newObj = { ...obj};
    newObj[field].value = e.target.value;
    setValues(newObj);
}

/*
    * Section component
    * 
    * @param {string} title - The title of the section
    * @param {React.Component[]} children - The children of the section
    * 
    * @description Manages toggling between edit and display mode 
*/

function Section({ title, initialData}) {
    const [data, setData] = useState(initialData)
    const [isEditMode, setIsEditMode] = useState(true)

    const toggleEditMode = (e) => {
        setIsEditMode(prevState => !prevState);
    }

    const handleInputChange = handleInputChangeFactory(data, setData);

    return (
        <>
            <h2>{title}</h2>
            <button onClick={toggleEditMode}>{isEditMode ? 'Save' : 'Edit'}</button>
            <div>
                {
                    Object.entries(data).map(([key, value]) => (
                        value.renderFunc(key, handleInputChange(key), isEditMode, value)
                    ))
                }
            </div>

        </>
    )
}

export default Section;
