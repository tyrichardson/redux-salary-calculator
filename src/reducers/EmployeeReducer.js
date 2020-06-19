const EmployeeReducer = (state = [], action) =>
{
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [...state, action.payload];
    case 'DELETE_EMPLOYEE':
      const matchEmployee = employee =>
        employee.idNumber !== action.payload.idNumber;
          return state.filter(matchEmployee)
    default:
      return state;
  }
}

export default EmployeeReducer;
