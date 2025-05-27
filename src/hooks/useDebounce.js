 function useDebounce(cb,delay=2000){
     let timerend;
     return (...args)=>{
       clearInterval(timerend)
       timerend= setTimeout(()=>{
            cb(...args)
        },delay)
     }
}
export default useDebounce