import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import AuthContext from '../utils/auth-context'

// import ReactDOM from "react-dom";
// import { Formik, Form, useField, useFormikContext } from "formik";
// import * as Yup from "yup";
import { createTask } from '../graphql/mutations'
import * as mutations from '../graphql/mutations';

function AddTask() {
    const history = useHistory()
    const authContext = React.useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
            platform: "拼多多",
            store: "老二",
            quantity: 1,
            // sku: "",
            item: "茉莉香",
            status: "PENDING",
            description: "打开拼多多，搜索XXX，往后翻页，直至看到xxx店铺，进入店铺浏览一会儿，然后下单xxx商品",
            assignerID: authContext.userID,
        },
        onSubmit: async (values) => {
            // console.log(userID)
            alert(JSON.stringify(values, null, 2));
            const newData = await API.graphql(graphqlOperation(mutations.createTask, { input: values }));
            console.log(newData)
            history.push("/tasks")
        }
    });

    return (
        <div className="w-full mt-10">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        平台
                        </label>
                    <select className="block shadow mx-auto border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-select"
                        name="platform"
                        onChange={formik.handleChange}
                        value={formik.values.platform}>
                        <option value="拼多多">拼多多</option>
                        <option value="淘宝">淘宝</option>
                    </select>
                </div>

                <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="store" >
                        店铺名称
                        </label>
                    <input
                        className="shadow mx-auto appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="store"
                        type="text"
                        placeholder="店铺名称" 
                        onChange={formik.handleChange}
                        value={formik.values.store}
                    />
                </div>

                <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item" >
                        商品项
                    </label>
                    <input
                        className="shadow mx-auto appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="item"
                        type="text"
                        placeholder="商品详情页购买时的选项或组合（即SKU）"
                        onChange={formik.handleChange}
                        value={formik.values.item}
                    />
                </div>
                <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity" >
                        数量
                    </label>
                    <input className="shadow mx-auto appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="quantity"
                        type="number"
                        placeholder="下单数量"
                        onChange={formik.handleChange}
                        value={formik.values.quantity}
                    />
                </div>
                <div className="mb-4 sm:w-4/5 md:w-full lg:w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        请用文字详细描述如何找到要购买的商品
                    </label>
                    <textarea name="description" className="resize border rounded focus:outline-none focus:shadow-outline w-full py-2 px-3 text-gray-700 mb-3 leading-tight h-40"
                        placeholder="请描述找到下单商品的详细步骤： 比如打开拼多多，搜索XXX，往后翻页，直至看到xxx店铺，进入店铺浏览一会儿，然后下单xxx商品"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        添加任务
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddTask;