import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Profile() {
    const {name,age,joke} = useSelector((state)=>state)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>I am {name}</h2>
        <h2>my age is {age}</h2>
        <h4>{joke}</h4>
        <button onClick={()=>dispatch({type:'UPDATE_NAME'})}>Update name</button>
        <button onClick={()=>dispatch({type:'UPDATE_AGE'})}>Update age</button>
        <button onClick={()=>dispatch({type:'GET_JOKE'})}>fetch Joke</button>
    </div>
  )
}

export default Profile