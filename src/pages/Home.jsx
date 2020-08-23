import React from 'react'
import { useHistory } from "react-router-dom";
import useLocalStorage from '../hooks/useLocalStorage'

function Home() {
    const [user, setUser] = React.useState(null);
    let history = useHistory();
    const [role, setRole] = useLocalStorage('role', '');

    React.useEffect(() => {
        console.log("xxxx: ", role)
        // role.then()
        let isMounted = true; // note this flag denote mount status

        // 已登录但role值为空
        if (user && role == "") {
        //     if (isMounted){
                history.push("/join")
        //     } 
        //     // window.location.href = "/join"
        }

        fetch('https://randomuser.me/api/')
            .then(results => results.json())
            .then(data => {
                setUser(data.results[0]);
            });
        return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted

    }, []); // Pass empty array to only run once on mount.

    return (
        <div className="flex flex-col bg-gray-200">
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                {user ? user.name.first : 'Loading...'}
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
        </div>
    )
}

export default Home;