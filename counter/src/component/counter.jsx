import React,{useState, useEffect, useRef} from 'react'

const Counter = () => {
  const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0})
 const [counter, setCounter] = useState(0);
 const [isRunning, setIsRunning] = useState();
 const intervalRef =  useRef(null)

 const startcounter = () =>{
  if(!isRunning){
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setCounter((PrevCount)=> PrevCount - 1); 
      // This logic use only counter start 0 and no limit 
      // start on hr or min and sec counter
  setTime((prevTime)=>{
   let {hours, minutes, seconds}= prevTime;
   if(seconds === 59){
    seconds = 0;
    if(minutes === 59){
      minutes=0;
      hours += 1;
    }
    else{
      minutes+=1;
    }
   }
   else{
    seconds+=1;
   }
   return { hours, minutes, seconds };
      })
    }, 1000);
  }
 }
 const stopcounter = () =>{
  if(isRunning){
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }
 }
 const resetCounter =() =>{
clearInterval(intervalRef.current)
setCounter(0);
setTime({hours:0, minutes:0, seconds:0});
setIsRunning(false);
 }

  return (
    <>
    <div className='all-counter'>
    <div className="counter-start">
    <span>Counter 
      {counter}
      
      </span> 
    </div>
    
    <h1> Hrs or Min and Sec</h1>
    <div className='hrs-time'>
      <span>{String(time.hours).padStart(2, '0')} hr :</span>
      <span> {String(time.minutes).padStart(2, '0')} min :</span>
      <span> {String(time.seconds).padStart(2, '0')} sec</span>
    </div>
    <div className="counter-button">
    <button onClick={startcounter} className='start-button'>Start</button>
    <button onClick={resetCounter} className='restart-button'>Restart</button>
    <button onClick={stopcounter} className='stop-button'>Stop</button>
    </div>
    </div>
    
    </>
  )
}

export default Counter