import Section from './Section';
import {InputField} from './InputFields';
import './GeneralInfo.css';

function GeneralInfo ({name="", email="", phone=""}) {
    const data = {
        name: InputField('text', 'Name', name),
        email: InputField('email', 'Email', email),
        phone: InputField('tel', 'Phone', phone)
    }

    return <Section 
        title="General Info"
        initialData={data}
    />
}

export default GeneralInfo