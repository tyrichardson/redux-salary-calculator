import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

  const deleteEmployee = (props, employee) =>
  {
    props.dispatch({
      type: 'DELETE_EMPLOYEE',
      payload: employee,
    })
  }

const EmployeeList = (props) =>
  (
    <ul>
      {props.state.map(employee => (
        <li key={employee.idNumber}>
          {`${employee.firstName}
          ${employee.lastName}
          is a ${employee.jobTitle}
          and makes ${employee.annualSalary}.`}
          <Button size="small" color="primary" variant="outlined"  style={{margin: .5 + "rem"}} onClick={() => deleteEmployee(props, employee)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  )

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(EmployeeList);
