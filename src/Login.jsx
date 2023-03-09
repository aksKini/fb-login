import React,{useState} from 'react'
import Card from './Card'
import LOGIN from "./login.css"
import { Link, useNavigate } from 'react-router-dom'


function Login(props) {
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
    let localemail = localStorage.getItem("email")
    let localpassword = localStorage.getItem("password")
    if(email=== localemail && password=== localpassword) {
      navigate("/signin")
    }
 }
  return (
    <div className={LOGIN.body}>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" width={"250px"}/>
        <form action="" onSubmit={submitHandler}>
        <Card className={LOGIN.parent_box}>
            <h1>Log in to Facebook</h1>
            <input type="text" name="" id="" placeholder="Email address or phone number" onChange={emailHandler} />
            <input type="password" name="" id="" placeholder='Password' onChange={passwordHandler}/>
            <button type="submit">LOG IN</button>
            <div className={LOGIN.anchor}>
                <a href="#">Forgotten account?</a> 
                <Link to="/signin">Sign up for Facebook</Link>
            </div>       
        </Card>
        </form>
    </div>
  )
}

export default Login;