import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isSubmitted:"NO"

        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(event,'event');
    //    alert('form submitted')
    event.preventDefault()
    this.setState({isSubmitted:"TRUE"})

    }   
    
    render() {
        return (
            <form className='login'>
                <div id='isSubmitted'>
                {this.state.isSubmitted}
                </div>
               
                <label id='label_Username'>Username</label>
                <input id='email' onBlur={this.handleInputChange} name='email' type='text' />
                <label>Mylabel</label>
                <label>Password</label>
                <input id='password' onBlur={this.handleInputChange} name='password' type='password' />
                <button id='submit' onClick={(e)=>this.handleSubmit(e)}>Submit</button>
            </form>
        )
    }
}
export default Login