import {useState,useEffect} from 'react'

const useWindowSize = () => {
  const [size, setSize] = useState(undefined)

  useEffect(() => {
    const setFromEvent = (e) => {
      setSize(window.innerWidth)
    };
    
    window.addEventListener("resize", setFromEvent);
    
    setFromEvent()

    return () => {
      window.removeEventListener("resize", setFromEvent);
    };
  }, []);

  return size;
}

export default useWindowSize