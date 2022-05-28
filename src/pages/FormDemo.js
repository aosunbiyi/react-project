import React from "react";
import './Generic.css'


export default class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'James Bond',
            subjects: ['Maths', 'English', 'Yoruba'],
            phone: '',
            address: '',
            email: '',
        }

        // binding events 
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {

        const target = e.target
        const value = (target.type === "checkbox") ? target.checked : target.value
        const name = target.name
        console.log(name, value)
        this.setState(
            {
                [name]: value
            }
        )

    }

    handleSubmit(e) {
        e.preventDefault()
        alert('A name was submitted: ' + this.state.name)

    }

    render() {
        return (

            <div className="form1">
                <h3 className={'form-title'}>Registration Form</h3>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>
                            Student Name:
                            <input name="name" className="input" type={'text'} value={this.state.name} onChange={this.handleChange} autoFocus></input>
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Subjects:
                            <select name="subjects" className="input" value={this.state.subjects} multiple={true} onChange={this.handleChange}>
                                <option value={'Maths'}>Maths</option>
                                <option value={'English'}>English</option>
                                <option value={'Chemistry'}>Chemistry</option>
                                <option value={'Biology'}>Biology</option>
                                <option value={'Physics'}>Physics</option>
                                <option value={'Yoruba'}>Yoruba</option>
                            </select>
                        </label>
                    </div>
                    <div className={'form-group'}>
                        <label>
                            Phone:
                            <input name="phone" type={'text'} className={'input'} value={this.state.phone} onChange={this.handleChange}></input>
                        </label>
                    </div>
                    <div className={'form-group'}>
                        <label>
                            Address:
                            <input  name="address" className={'input'} type={'text'} value={this.state.address} onChange={this.handleChange}></input>
                        </label>
                    </div>
                    <div className={'form-group'}>
                        <label>
                            Email:
                            <input name="email" type={'email'} className={'input'} value={this.state.email} onChange={this.handleChange}></input>
                        </label>
                    </div>
                    <br />

                    <div className="output">

                        <h2>Student Name: {this.state.name}</h2>
                        Subject: {this.state.subjects} <br />
                        Phone: {this.state.phone}  <br />
                        Address: {this.state.address} <br />
                        Email: {this.state.email}

                    </div>
                    <br /><br />
                    <input type='submit' value="Submit" />

                </form>
            </div>
        )
    }
}