import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError()
    console.log(err);
    return (
        <>
            <h1>{err.status}{err.statusText}</h1>
            <h2>{err.data}</h2>
            <h3>{ }</h3>
        </>
        
    )
}

export default Error;