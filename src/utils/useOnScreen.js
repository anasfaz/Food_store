import { useCallback, useState } from "react";

const useOnScreen = ({
  root = null,
  rootMargin = "0px",
  threshold = 0,
} = {}) => {
    const [observer, setObserver] = useState()
    const [isIntersection, setInterSection] = useState(false)
    const measureRef = useCallback((node) => {
        if (node) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setInterSection(entry.isIntersecting)
                }
            )
            observer.observe(node)
            setObserver(observer)
        }
    },[root,rootMargin,threshold])
    
    return {measureRef,isIntersection,observer}
};


export default useOnScreen;