import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, TextField } from '@material-ui/core';

const emptyEmployeeObject = {
  firstName: '',
  lastName: '',
  idNumber: '',
  jobTitle: '',
  annualSalary: '',
};

class EmployeeForm extends Component {
  state = emptyEmployeeObject;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addEmployee = (newEmployee) =>
  {
    this.props.dispatch({
      type: 'ADD_EMPLOYEE',
      payload: newEmployee,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addEmployee(this.state);
    this.clearEmployeeFields();
  }

  clearEmployeeFields = () => {
    this.setState(emptyEmployeeObject);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField onChange={this.handleChange} value={this.state.firstName} name="firstName" required
        label="first name"
        variant="outlined"
        color="secondary" />
        <TextField onChange={this.handleChange} value={this.state.lastName} name="lastName" required
        label="last name"
        variant="outlined"
        color="secondary"/>
        <TextField onChange={this.handleChange} value={this.state.idNumber} name="idNumber" required
        label="id number"
        variant="outlined"
        color="secondary"/>
        <TextField onChange={this.handleChange} value={this.state.jobTitle} name="jobTitle" required
        label="job title"
        variant="outlined"
        color="secondary"/>
        <TextField onChange={this.handleChange} value={this.state.annualSalary} name="annualSalary" required label="yearly salary"
        variant="outlined"
        color="secondary"/>

        <Input type="submit" value="Submit" color="primary" style={{margin: 1 + "rem" }} />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(EmployeeForm);
