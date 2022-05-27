import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should set up remove action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})