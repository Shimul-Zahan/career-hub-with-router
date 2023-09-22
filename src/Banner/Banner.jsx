import React from 'react'

const Banner = () => {
    return (
        <div className='container mx-auto min-h-[800px] flex flex-col md:flex-row justify-between items-center bg-cover' style={{ backgroundImage: 'url("../../public/assets/images/bg2.png")'}}>
            <div className='space-y-6'>
                <h1 className='text-7xl font-bold'>
                    One Step <br />Closer To Your <br /><span className='text-blue-500'>Dream Job</span>
                </h1>
                <p className='text-lg font-medium'>
                    Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.
                </p>
                <button className="btn btn-success">Get Start</button>
            </div>
            <div className=''>
                <img src="../../public/assets/images/user.png" alt="" className='mt-14' />
            </div>

        </div>
    )
}

export default Banner