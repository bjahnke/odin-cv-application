import Experiences from './Experience';
import Section from './Section';
import { TextAreaData, InputData } from './InputFields';
import './GeneralInfo.css';
import { useState } from 'react';

const generalInfoData = {
    name: InputData('text', 'Name'),
    email: InputData('email', 'Email'),
    phone: InputData('tel', 'Phone')
}

const educationData = {
    schoolName: InputData('text', 'School Name'),
    degree: InputData('text', 'Degree'),
    gradYear: InputData('number', 'Graduation Year')
}

const experienceData = () => ({
    companyName: InputData('text', 'Company Name'),
    positionTitle: InputData('text', 'Position Title'),
    startDate: InputData('date', 'Start Date'),
    endDate: InputData('date', 'End Date'),
    responsibilities: TextAreaData('Responsibilities'),
})

function SectionList ({title, initialData}) {
    const [experiences, setExperiences] = useState([initialData()]);

    const addExperience = () => {
        setExperiences([
            ...experiences,
            initialData()
        ]);
    };

    const deleteExperience = (indexToDelete) => {
        const newExperiences = [...experiences];
        newExperiences.splice(indexToDelete, 1);
        setExperiences(newExperiences);
    };

    return (
        <>
        <div className='sectionList'>
            <h2>{title}</h2>
            {experiences.map((experienceData, index) => (
                <div key={index}>
                    <Section
                        title={``}
                        initialData={experienceData}
                    />
                    <button onClick={() => deleteExperience(index)}>Delete</button>
                </div>
            ))}
        </div>

        <button onClick={addExperience}>Add</button>
        </>
    )
}

export default function Cv() {
    return (
        <>
            <Section
                title="General Info"
                initialData={generalInfoData}
            />
            <Section
                title="Education"
                initialData={educationData}
            />
            <SectionList
                title="Professional Experience"
                initialData={experienceData}
            />
        </>
    )
}