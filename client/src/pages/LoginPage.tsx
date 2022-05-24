import React, {useState} from 'react'
import httpClient from '../httpClient'

const LoginPage : React.FC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const logInUser = async() =>{
        console.log(email, password)
        
        try{
            const resp = await httpClient.post("//localhost:5000/login",{
            email,
            password,
            });
            window.location.href = "/"

        }catch(error:any){
            if (error.response.status === 401){
                alert("Invalid credentials")
            }
        }
        
        
    }
 
    return (
        <div>
            <h1>Log Into your account</h1>
            <form>
            <div>
                <label htmlFor="">Email: </label>
                <input type="text" value = {email} onChange = {(e) => setEmail(e.target.value)} id = ""></input>
            </div>
            <div>
                <label htmlFor="">Password: </label>
                <input type="password" value = {password} onChange = {(e) => setPassword(e.target.value)} id = ""></input>
                
            </div>
            <button type = "button" onClick={() => logInUser()}>Submit</button>
            </form>
        </div>
  )
}

export default LoginPage