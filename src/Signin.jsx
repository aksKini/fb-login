import React, {useState} from 'react'
import Card from './Card'
import LOGIN from "./login.css"
import { Link, useNavigate } from 'react-router-dom'

function Signin(props) {
  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")

  let navigate = useNavigate()

  let emailHandler =(e)=>{
     setemail(e.target.value)
  }
  let passwordHandler =(e)=>{
    setpassword(e.target.value)
 }
 let submitHandler =(e)=>{
  e.preventDefault()
  if(email.includes("@") && password.length>6) {
  localStorage.setItem("email", email)
  localStorage.setItem("password", password)
  navigate("/login")
  } else {
    window.alert("Invalid")
    navigate("/")
  }
 }

  return (
    <div className={LOGIN.body}>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" width={"250px"}/>
        <form action="" onSubmit={submitHandler}>
        <Card className={LOGIN.parent_box}>
            <h2>Welcome to facebook</h2>
            <h1>Sign up to Facebook</h1>
            <input type="text" name="" id="" placeholder="Email address or phone number" onChange={emailHandler}/>
            <input type="password" name="" id="" placeholder='Password' onChange={passwordHandler}/>
            <button type="submit">Sign Up</button>
            <div className={LOGIN.anchor}>
                <a>Already have an account?</a>
                <Link to="/login">Login to your Account</Link>
            </div>       
        </Card>
        </form>
    </div>
  )
}

export default Signin