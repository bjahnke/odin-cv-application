
function GeneralInfo ({name, email, phone}) {
    return (
        <form>
            <h2>General Info</h2>
            <fieldset>
                <label>Name</label>
                <input type="text" placeholder="Name" />
                <label>Email</label>
                <input type="email" placeholder="Email" />
                <label>Phone</label>
                <input type="tel" />
            </fieldset>
        </form>
    )
}

export default GeneralInfo