import React, { useEffect, useState } from 'react'
import Job from './Job';

const FeaturesJob = () => {

    const [featuresJob, setFeaturesJob] = useState([]);
    const [length, setLength] = useState(4);

    useEffect(() => {
        fetch('/public/data/jobs.json')
            .then(res => res.json())
            .then(data => setFeaturesJob(data));

    }, [])

    return (
        <div className='mt-10 w-full mb-10 space-y-8'>
            <div className='text-center'>
                <h1 className='text-4xl font-bol'>Featured Jobs</h1>
                <p className='text-base'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                {
                    featuresJob.slice(0, length).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={`${length === featuresJob.length && 'hidden'} text-center`}>
                <button onClick={() => setLength(featuresJob.length)} className='btn btn-outline btn-success'>See All</button>
            </div>

        </div>
    )
}

export default FeaturesJob