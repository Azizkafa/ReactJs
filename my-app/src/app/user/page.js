"use client"
import {Component, useState} from 'react'

class LifeCycleExample extends Component{
    constructor(props){
        super(props)
        this.state = {count:0}
        console.log("Constructor: komponen diinisiasi/dibuat")
    }

    componentDidMount(){
        console.log('ComponenDidMount: komponen berhasil di mounting')
        const CountEverySecond = ()=>{
        this.setState({count: this.state.count +1})
        }
        this.interval = setInterval(CountEverySecond, 1000)/* ini adalah 1000mili sekon = 1 detik */
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Apakah komponen di update?", nextState.count)
        return nextState.count <= 100 /* kita bikin kondisi jika count/state nya <= 10 maka akan diberhentikan */
    }/* component yang bebas mau diganti/ditambahkan */

    componentDidUpdate(prevProps, prevState){
        console.log(`component did update from ${prevState.count} to ${this.state.count}`)
        return prevState.count
    }

    componentWillUnmount(){
        console.log("component will be removed")
        // clearInterval(this.interval)
    }
    render(){
        console.log("Render: komponen dirender")
        return(
            <div className='p-4 bg-gray-400 rounded'>
                <h2>Counter: {this.state.count}</h2>
            </div>
        )
    }
}

export default function User(){
    const [show, setShow] = useState(true)

    return (
        <>
        <h1>Ini halaman User</h1>
        <button onClick={() => setShow(!show)/* kebalikan dari nilai true pada setshow diatas */} className='bg-red-400 shadow-lg text-white p-2 rounded'>Toogle</button>
        {show && <LifeCycleExample/>}
        </>
    )
}
