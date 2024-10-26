import React, {useEffect} from "react";
import axios from "axios";

export const App: React.FC = () => {

    useEffect(() => {
        axios.get('/api/menu/all')
            .then(data => console.log(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <h1>Hello, Bigrestsales App</h1>
    );
}