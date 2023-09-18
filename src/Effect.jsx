import React,{useEffect} from 'react'


const Effect = () => {

    useEffect(() => {
        console.log("first")
    }, [])
    //use effect takes in an anonymous function and an array dependency used to call API's and setTimers, it runs asynchronously, it crestes an effect without sideEffect
    //if array [] is empty, it is equal to componentDidMount in class component life cycle method
    //it takes in an anonymous function and an array dependency
    //if you want it to run only when count changes, give the array [count]
    ////
  return (
    <div>Effect</div>
  )
}
export default Effect