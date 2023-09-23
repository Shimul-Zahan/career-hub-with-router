import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { saveToLocatStorage } from '../Utils/LocalStorage/localstorage';

const JobDetails = () => {

    const allJobs = useLoaderData();
    const { id } = useParams();

    const item = allJobs.find(job => job.id == id);

    const saveToLCS = () => {
        saveToLocatStorage(item);
    }

    return (
        <div className=' h-screen pt-10'>
            <div className='w-3/4'>
                {
                    <h1 className='text-xl'><strong>Job Description:</strong> {item.job_description}</h1>
                }
                <button onClick={saveToLCS} className='btn btn-outline btn-success'>Application</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default JobDetails