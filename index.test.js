import {add} from './index';

test('Add',()=>{
  expect(add(1,2)).toBe(3);
});

test('Delayed add',done=>{
  setTimeout(()=>{
    expect(add(1,2)).toBe(3);
    done();
  },1000);
});
