import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handelSubmit = async (e) => {
        e.preventDefault()
        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
      
          const { data } = await axios.post(
            "/register",
            { name, email, password },
            config
          );
        if(data){
            history.push(`/`)
        }
    }
    
    return (
        // <div>
        //     <form onSubmit={handelSubmit}>
        //         <label>Name</label>
        //         <input type='text' value={name} onChange={e => setName(e.target.value)} />
        //         <label>Email</label>
        //         <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
        //         <label>Password</label>
        //         <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
        //         <button type="submit">Sign Up</button>
        //     </form>
        // </div>
        <div className="w-75 m-auto">


        <form onSubmit={handelSubmit}>
        <div className="form-group mt-3">
          <label for="exampleInputEmail1">Enter Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="mike@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn rounded-pill w-100 btn-primary mt-5 btn-block"
        >
          Sign Up
        </button>
      </form>
      </div>
    )
}

export default Register
