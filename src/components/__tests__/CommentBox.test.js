import React from 'react';
import { mount } from 'enzyme';
import { CommentBox } from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('has a text area and button', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
          });
          wrapped.update();
    });

    it('new text appears in textarea', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('textarea gets empty after submit', () => {  
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});



