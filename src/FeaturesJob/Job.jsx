import React from 'react'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { id, logo, job_title, comapany_name, job_description } = job;

  return (
      <div className="card w-full card-compact bg-base-100 border-2 shadow-xl">
          <div className="card-body">
              <img src={logo} alt="" />
              <h2 className="card-title">{ job_title }</h2>
              <h2 className="card-title">{ comapany_name }</h2>
              <p>{job_description }</p>
              <div className="card-actions">
                  <Link to={`/job/${id}`}>
                      <button className="btn btn-primary">Show Details</button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default Job