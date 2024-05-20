import Section from './Section';
import {InputField} from './InputFields';

function Education({schoolName = "", degree = "", gradYear = ""}) {

    const data = {
        schoolName: InputField('text', 'School Name', schoolName),
        degree: InputField('text', 'Degree', degree),
        gradYear: InputField('number', 'Graduation Year', gradYear)
    }

    return <Section 
        title="Education"
        initialData={data}
    />
}


export default Education