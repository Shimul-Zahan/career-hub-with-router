import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetails = () => {

    const allJobs = useLoaderData();
    const { id } = useParams();
    
    const item = allJobs.find(job => job.id == id);

  return (
      <div className=' h-screen pt-10'>
          <div className='w-3/4'>
              {
                  <h1 className='text-xl'><strong>Job Description:</strong> {item.job_description}</h1>
              }
          </div>
          <div>
              
          </div>
      </div>
  )
}

export default JobDetails