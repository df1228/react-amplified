import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from "aws-amplify";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

// import ReactDOM from "react-dom";
// import { Formik, Form, useField, useFormikContext } from "formik";
// import * as Yup from "yup";
import { createTask } from '../graphql/mutations'
import * as mutations from '../graphql/mutations';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import useLocalStorage from '../hooks/useLocalStorage'

function Join() {
    let history = useHistory();
    const [task, setTask] = useState({})
    const [authState, setAuthState] = React.useState();
    // const [user, setUser] = React.useState();
    const [userID, setUserID] = useLocalStorage('userID', '');
    const [role, setRole] = useLocalStorage('role', '');

    useEffect(() => {
        if(role != ""){
            history.push("/")
        }
    })
    const formik = useFormik({
        initialValues: { 
            name: "",
            mobilePhone: "",
            wechat: "",
            userID: userID,
        },
        onSubmit: async (values) => {
            console.log(userID)
            alert(JSON.stringify(values, null, 2));
            
            const newData = await API.graphql(graphqlOperation(mutations.createProfile, { input: values }));
            console.log(newData)

            history.push("/joinComplete")
        }
    });

  
    // React.useEffect(() => {
    //     return onAuthUIStateChange((nextAuthState, authData) => {
    //         setAuthState(nextAuthState);
    //         console.log(authData)
    //         setUser(authData)
    //     });
    // }, []);

    // const handleSubmit = async (e) => {
    //     console.log(e)
    //     e.preventDefault()

    //     const data = {
    //         wechat: '15618903091',
    //         mobilePhone: '15618903091',
    //         role: 1,
    //         userId: user.id,
    //     };
    //     const newTodo = await API.graphql(graphqlOperation(mutations.createProfile, { input: data }));
    // }
    return (
        <div className="w-full mt-10">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name" >
                        怎么称呼你
                    </label>
                    <input
                        className="shadow mx-auto appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="姓名或昵称"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                
                <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role" >
                        角色(加入后不可改变，请谨慎选择)
                    </label>
                    <select name="role" onChange={formik.handleChange} value={formik.values.role} 
                        className="block shadow mx-auto appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option>请选择</option>
                        <option value="merchant">商家</option>
                        <option value="buyer">买手</option>
                    </select>
                </div>
                
                <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="wechat" >
                        微信
                    </label>
                    <input
                        className="shadow mx-auto appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="wechat"
                        type="text"
                        placeholder="微信"
                        onChange={formik.handleChange}
                        value={formik.values.wechat}
                    />
                </div>

                <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobilePhone" >
                        手机号
                    </label>
                    <input
                        className="shadow mx-auto appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="mobilePhone"
                        type="text"
                        placeholder="手机号"
                        onChange={formik.handleChange}
                        value={formik.values.mobilePhone}
                    />
                </div>

                {/* <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                    >
                        title
                        </label>
                    <input
                        className="shadow mx-auto appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="title"
                    />
                </div> */}

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        我要加入
                        </button>
                </div>
            </form>
        </div>
    )
}

export default Join;