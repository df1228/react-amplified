import React from 'react'
import MyHeader from './header';
import MyFooter from './footer';

const DefaultLayout = ({children}) => {
    return (
        <>
            <MyHeader />
            <div className="container pt-10 ml-auto mr-auto">
                {/* <div>Hello, {user.username}</div> */}

                {children}

            </div>
            {/* <MyFooter /> */}
        </>
    )
}

export default DefaultLayout;