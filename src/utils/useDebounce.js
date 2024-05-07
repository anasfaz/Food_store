import { Input } from "postcss";
import { useState, useEffect } from "react";

const useDebounce = (inputValue, delay) => {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  return debounceValue;
};

export default useDebounce;
