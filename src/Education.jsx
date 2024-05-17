
export default function Education({schoolName, degree, gradYear}) {
    return (
        <form>
            <h2>Education</h2>
            <fieldset>
                <input placeholder="School Name" />
                <input placeholder="Degree" />
                <input placeholder="gradYear" />
            </fieldset>
        </form>
    )
}