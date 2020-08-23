import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from "aws-amplify";
import { useFormik } from "formik";

function JoinComplete() {
    return (
        <div>
            加入成功!
        </div>
    )
}

export default JoinComplete;