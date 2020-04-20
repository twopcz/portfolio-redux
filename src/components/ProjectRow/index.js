import React from 'react';

function ProjectRows(props) {
  return (
    <div className='row justify-content-center' id={props.rowID}>
      <div className='container d-flex flex-column flex-md-row'>
        {props.projects.map((data, index) => (
          <div className='col-md-4' key={`project-column-${index}`}>
            <a href={data.link}>
              <div className='project-container'>
                <img
                  className='img-fluid'
                  src={data.image}
                  alt={data.alt}
                ></img>
                <div className='project-titles text-center'>{data.title}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectRows;
