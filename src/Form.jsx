function Form({onAddInput}){
    return(
        <form>
            <div className="input-section">
                <h2>Personal Information</h2>
                <div className="field">
                    <label>Name:</label>
                    <input name="name" type="text" placeholder="NAME" onChange={onAddInput} />
                </div>
                <div className="field">
                    <label>Email:</label>
                    <input name="email" type="text" placeholder="EMAIL" onChange={onAddInput} />
                </div>
                <div className="field">
                    <label>Phone Number:</label>
                    <input name="phone" type="number" placeholder="PHONE" onChange={onAddInput} />
                </div>
            </div>

            <div className="input-section">
                <h2>Education</h2>
                <div className="field">
                    <label>School:</label>
                    <input name="school" type="text" placeholder="SCHOOL" onChange={onAddInput} />
                </div>
                <div className="field">
                    <label>Degree:</label>
                    <input name="degree" type="text" placeholder="DEGREE" onChange={onAddInput} />
                </div>
                <div className="field">
                    <label>Graduation Date:</label>
                    <input name="graduationDate" type="month" placeholder="Month" onChange={onAddInput} />
                </div>
                <div className="field">
                    <label>Extra Info:</label>
                    <textarea name="eduInfo" placeholder="EDUCATION INFO" onChange={onAddInput} />
                </div>
            </div>

            <div className="input-section">
                <h2>Work Experience</h2>
                <div className="field">
                    <label>Company Name:</label>
                    <input name="company" type="text" placeholder="COMPANY" onChange={onAddInput} />
                </div>
                <div className="field">
                    <label>Job Title:</label>
                    <input name="jobTitle" type="text" placeholder="JOB" onChange={onAddInput} />
                </div>
                <div className="field">
                    <label>From:</label>
                    <input name="from" type="date" placeholder="From" onChange={onAddInput} />
                </div>
                <div className="field">
                    <label>To:</label>
                    <input name="to" type="date" placeholder="To" onChange={onAddInput} />
                </div>
                <div className="field">
                    <label>Extra Info:</label>
                    <textarea name="workInfo" placeholder="WORK INFO" onChange={onAddInput} />
                </div>
            </div>
        </form>
    )
}

export default Form;