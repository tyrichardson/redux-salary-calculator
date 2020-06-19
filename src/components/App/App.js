import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';


const style = {
  paper: {
    backgroundColor: '#FFF9C4',
    padding: '1rem'
  },
}

class App extends Component
{
  render()
   {
    return (
      <div>
        <header>
          Redux Salary Calculator
        </header>
        <Paper style={style.paper}>
        <section>
          <h2>Add Employee</h2>
          <EmployeeForm />
        </section>
        <section>
          <h2>Employees</h2>
          <EmployeeList />
          <EmployeeTotal />
          </section>
          <Typography variant="caption">
            <p><em>contents of redux store:</em></p>
            <pre>{JSON.stringify(this.props.state, undefined, 2)}</pre>
          </Typography>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(App);
