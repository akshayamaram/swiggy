import { useRouteError } from "react-router-dom";   /* gives additional info about error for us to use */

const Error = () => {

    const error = useRouteError();
    // console.log(error);

    return (
        <div>
            <h1>Oops! Something went wrong. 💤 swiggy sleeps at night , so does my app too 💤</h1>
            <h1>{error.data}</h1>
            <h1>{error.status} : {error.statusText}</h1>
            
        </div>
    )
}

export default Error;