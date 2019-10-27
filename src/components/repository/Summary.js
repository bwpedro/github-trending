import React from 'react';

const Summary = ({repository}) => {
  return (
    <div className='card z-depth-0 repository-summary'>
      <div className='card-content grey-text text-darken-3'>
        <span className='card-title'>{repository.name} <img className='avatar' src={repository.owner.avatar_url} alt='avatar'/></span>
        <p>Forks: {repository.forks}</p>
        <p>Stars: {repository.stargazers_count}</p>
        <p className='grey-text'>Description: </p>
        <p className='grey-text'>{repository.description}</p>
      </div>
    </div>
  )
}

export default Summary