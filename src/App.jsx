import { useState } from 'react'
import './App.css'
import Input from './Input'
import Template from './Template'

function App() {
  const [info, setInfo] = useState({
    name : "NAME",
    email : "EMAIL",
    phoneNum : "PHONE",
    school : "SCHOOL",
    degree : "DEGREE NAME",
    graduationDate : "DATE",
    eduInfo : "EXTRA INFO",
    company : "COMPANY NAME",
    jobTitle : "JOB TITLE",
    from : "FROM",
    to : "TO",
    workInfo : "EXTRA INFO"
  })

  function handleInput(e){
    const { name, value } = e.target;
    setInfo((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  }

  return (
    <>
    <Input info={info} onAddInput={handleInput}/>
    <Template info={info} />
    </>
  )
}

export default App
