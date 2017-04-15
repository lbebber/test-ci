import {add} from './index';

test('Add',()=>{
  expect(add(1,2)).toBe(3);
  expect(add(1,3)).toBe(3);
});
