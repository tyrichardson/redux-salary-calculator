import React from 'react';
import { connect } from 'react-redux';

const employeeSalary = (sum, employee) => sum + Number(employee.annualSalary);

const calculateMonthlyCost = employeeList => employeeList.reduce(employeeSalary, 0) / 12;

const EmployeeTotal = ({ state }) => (

  <h2 style={{ textAlign: "right", backgroundColor: "pink", fontWeight: "bold" }}>Total Monthly Cost: $
    <span id="total"> {calculateMonthlyCost(state).toLocaleString()} </span>
  </h2>
)

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(EmployeeTotal);
