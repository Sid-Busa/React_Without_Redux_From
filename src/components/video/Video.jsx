import React,{useRef,useEffect} from 'react'

const Video = () => {
    const localVideoRef = useRef()
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video:true,audio:true})
        .then( (stream) => localVideoRef.current.srcObject = stream)
        .catch(e => console.log("Error" + e))  
    },[])
    return (
        <div>
            <video ref={localVideoRef} autoPlay> </video>
        </div>
    )  
}

export default Video
