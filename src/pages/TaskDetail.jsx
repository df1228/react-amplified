import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { getTask } from '../graphql/queries'
import {
    useLocation,
    useParams
} from "react-router-dom";
import { updateTask } from '../graphql/mutations';
import { useHistory } from "react-router-dom";
// import { TaskStatus } from '../models';

function Task() {
    let { id } = useParams();
    let location = useLocation();
    let history = useHistory();
    const [task, setTask] = useState({})

    useEffect(() => {
          console.log(location)
          console.log(location.pathname)
          async function fetchData(taskId) {
              const taskData = await API.graphql(graphqlOperation(getTask, { id: taskId }))
              console.log('taskData:', taskData)
              setTask(taskData.data.getTask)
          }
          try {
              fetchData(id)
          } catch (err) {
              console.log('error fetching talks...', err)
          }
    },[])

    const handleClaim = async () => {
        const result = await API.graphql(graphqlOperation(updateTask, {input : { id: id, status: "CLAIMED" }}))
        console.log("result", result)
        if(result){
            history.push("/")
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h3 className="mt-5">
                Task ID: 
            </h3>
            <p>{id}</p>
            <h3 className="mt-5">
                平台:
            </h3>
            <p>{task.platform}</p>
            <h3 className="mt-5">
                Task Description:
            </h3>
            <p>{task.description}</p>

            <h3 className="mt-5">
                店铺
            </h3>
            <p>{task.store}</p>

            <h3 className="mt-5">
                商品项
            </h3>
            <p>{task.item}</p>
            
            <h3 className="mt-5">
                下单数量
            </h3>
            <p>{task.quantity}</p>

            <h3 className="mt-5">
                任务发布人
            </h3>
            <p> { task.assigner && task.assigner.name }</p>

            <button type="button" onClick={handleClaim}
                className="bg-teal-500 text-white px-10 py-2 mt-10"
            >
                认领
            </button>
        </div>
    )
}

export default Task;