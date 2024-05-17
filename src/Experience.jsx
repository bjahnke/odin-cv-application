
export default function Experiences({jobs}) {
    // TODO add new experience on click

    return (
        <div>
            <h2>Professional Experence</h2>
            <div id='experienceContainer'>
                <Experience />
            </div>
            <button>Add</button>
        </div>

    )
}

function Experience({companyName, positionTitle, responsibilities, startDate, endDate}) {
    return (
        <>
            <form>
                <input placeholder="Company Name"></input>
                <input placeholder="Start Date (MM/YYY)"></input>
                <input placeholder="End Date (MM/YYY)"></input>
                <textarea name="description" id="" placeholder="Add Job responsibilites here"></textarea>
            </form>
        </>
    )
}