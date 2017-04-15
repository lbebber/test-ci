import {add} from './index';

test('Add',()=>{
  expect(add(1,2)).toBe(3);
  expect(add(0,0)).toBe(0);
});
