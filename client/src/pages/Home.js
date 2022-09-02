import React from "react";
import Signup from '../components/Signup'
import Login from '../components/Login'

const Home = () => {

    return (
        <main>
            <div>
                <div>
                    <Signup />
                </div>
                <br></br>
                <div>
                    <Login />
                </div>
            </div>
        </main>
    );
};

export default Home;