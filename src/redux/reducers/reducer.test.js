import calculatorReducer from './reducer';
import * as Actiontypes from '../actions/Actiontypes';

describe('Calculator Reducer', () => {

  test('should return the initial state', () => {
    const initialState = {
      expression: '',
      total: 0
    }
    expect(calculatorReducer(undefined, {})).toEqual(initialState)
  })
  test('check for SET_EXPRESSION', () => {
    let expected = {
      expression: '10-5',
      total: 5
    }
    let action = {
      type: Actiontypes.SET_EXPRESSION,
      payload: '10-5'
    }
    expect(calculatorReducer(undefined, action)).toEqual(expected)
  })

  test('check for CLEAR_EXPRESSION', () => {
    const expected = {
      expression: '',
      total: 0
    }
    const initialState = {
      expression: '10-4',
      total: 6
    }
    const action = {
      type: Actiontypes.CLEAR_EXPRESSION
    }
    expect(calculatorReducer(initialState, action)).toEqual(expected)
  })

  test('check for EVALUATE_EXPRESSION', () => {
    const expected = {
      expression: '',
      total: 8
    }
    const initialState = {
      expression: '2*4',
      total: 8
    }
    const action = {
      type: Actiontypes.EVALUATE_EXPRESSION
    }
    expect(calculatorReducer(initialState, action)).toEqual(expected)
    
 })

  test('check for DELETE_LAST_EXPRESSION_ENTRY', () => {
    const expected = {
      expression: '4*5*',
      total: 20
    }
    const initialState = {
      expression: '4*5*6',
      total: 120
    }
    const action = {
      type: Actiontypes.DELETE_LAST_EXPRESSION_ENTRY
    }
    expect(calculatorReducer(initialState, action)).toEqual(expected)
  })
})