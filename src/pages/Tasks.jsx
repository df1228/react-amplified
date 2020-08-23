import React from 'react'
import { API, graphqlOperation } from 'aws-amplify';
// import * as queries from './graphql/queries';
import { listTasks as ListTasks } from '../graphql/queries'
import { useHistory } from "react-router-dom";
const gql = require('graphql-tag');

function Tasks() {
    const [tasks, updateTasks] = React.useState([]);
    let history = useHistory();
    React.useEffect(() => {
        async function fetchData() {
            const listTasks = gql`
                query listTasks {
                    listTasks(filter: {status: {eq: CLAIMED}}) {
                        items {
                            id
                            platform
                            store
                            quantity
                            createdAt
                            description
                        }
                    }
                }
                `
            const taskData = await API.graphql(graphqlOperation(listTasks))
            console.log('taskData:', taskData)
            if(taskData.data) {
                updateTasks(taskData.data.listTasks.items)
            }
        }
        try {
            fetchData()
        } catch (err) {
            console.log('error fetching talks...', err)
        }
    }, []); // Pass empty array to only run once on mount.
    
    const handleClick = (e) => {
        console.log(e)
        console.log(e.currentTarget)
        console.log(e.currentTarget.getAttribute('data-task-id'))
        // this.context.router.push('/sample');
        let taskId = e.currentTarget.getAttribute('data-task-id')
        let taskUrl = "/tasks/" + taskId
        history.push(taskUrl)
    }

    return (
        <div className="flex flex-col">
            <h3 className="text-center font-bold text-xl text-gray-700"> 待认领任务 </h3>
            {
                tasks.map((task, index) => (
                    <div key= {index} data-task-id={task.id} onClick={handleClick} 
                        className="border rounded text-gray-700 bg-orange-100 text-center px-4 py-2 m-2 flex flex-col"
                    >
                        <div>
                            <span className="">{task.platform}</span>
                            <span className="">{task.store}</span>
                        </div>
                        <h3>{task.item} 需下单数量: {task.quantity} </h3>
                        <div>
                            <span className="text-gray-500 text-sm">发布于: {task.createdAt}</span>
                        </div>
                    </div>
                ))
            }

            <div className="py-2">
                <nav className="block">
                    <ul className="flex pl-0 rounded list-none flex-wrap">
                        <li>
                            <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500">
                                <i className="fas fa-chevron-left -ml-px"></i>
                                <i className="fas fa-chevron-left -ml-px"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500">
                                <i className="fas fa-chevron-left -ml-px"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500">
                                1
                    </a>
                        </li>
                        <li>
                            <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500">
                                2
                    </a>
                        </li>
                        <li>
                            <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500">
                                3
                    </a>
                        </li>
                        <li>
                            <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500">
                                4
                    </a>
                        </li>
                        <li>
                            <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500">
                                5
                    </a>
                        </li>
                        <li>
                            <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500">
                                <i className="fas fa-chevron-right -mr-px"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#pablo" className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-teal-500 bg-white text-teal-500">
                                <i className="fas fa-chevron-right -mr-px"></i>
                                <i className="fas fa-chevron-right -mr-px"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        
    )
}

export default Tasks;