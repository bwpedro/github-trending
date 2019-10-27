import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getRepository } from '../../store/actions/repositoryActions';
import List from '../repository/List';

class Search extends Component {

  state = {
    language: '',
    page: 0,
  }

  componentDidUpdate() {
    if(this.props.repositories !== undefined){
      this.render();
      window.scrollTo(0, 0)
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.page += 1;
    this.props.getRepository(this.state);
  }

  handlePrevious = (e) => {
    this.state.page -= 1;
    this.props.getRepository(this.state);
    if(this.state.page === 0) this.state.page += 1;
  }

  render(){
    const {repositories} = this.props;

    if(repositories !== undefined){
      return(
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m8">
              <List repositories={repositories}/>
              <div className='grey-text'><span className='left' onClick={this.handlePrevious}>Previous page</span><span className='right' onClick={this.handleSubmit}> Next page</span></div>
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div className='container'>
          <form onSubmit={this.handleSubmit} className='white'>
            <h5 className='grey-text text-darken-3'>Find out what's trending in your favourite programming language</h5>
            <div className='input-field'>
              <label htmlFor='language'>Programming Language</label>
              <input type='text' id='language' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
              <button className='button btn z-depth-0'>Search</button>
            </div>
          </form>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    repositories: state.repository.repositories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRepository: (language) => dispatch(getRepository(language)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)