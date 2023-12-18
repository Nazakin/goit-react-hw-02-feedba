import React from 'react';

export class Contacts extends React.Component {
    state = {
        contacts: [],
        name: ''
      }
      handleName = ({target: {value}}) => {
        this.setState({
            value
            
        })
      }
      handleSubmit = (e) =>{
      e.preventDefault()
      }
    render() {
        console.log(this.state);
        return(
            <form>
                <label>Name</label>
            <input type="text" name="name" onChange={this.handleName} required />
            <button type="submit" onSubmit={handleSubmit}>Add contact</button>
            </form>
        )
    
}}