function Template({info}){
    return(
        <div className="template">
            <h1>{info.name}</h1>
            <h3>{info.phone}</h3>
            <h3>{info.email}</h3>
            <hr></hr>
            <h3 className="title">Education</h3>
            <p>{info.graduationDate}</p>
            <h3>{info.degree}, {info.school}</h3>
            <p>{info.eduInfo}</p>
            <hr></hr>
            <h3 className="title">Work Experience</h3>
            <h3>{info.jobTitle}, {info.company}</h3>
            <h4>From {info.from} To {info.to}</h4>
            <p>{info.workInfo}</p>
        </div>
    )
}

export default Template;