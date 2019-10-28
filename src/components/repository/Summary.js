import React from 'react';

const Summary = ({repository}) => {
  return (
    <div className='card z-depth-0 repository-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title hand'><a href={repository.url} target="_blank">{repository.name}</a><img className='avatar' src={repository.avatar} alt='avatar'/></span>
        <p>Forks: {repository.forks}</p>
        <p>Stars: {repository.stars}</p>
        <p className='grey-text'>{repository.description}</p>
      </div>
    </div>
  )
}

export default Summary