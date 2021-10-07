import React from 'react';
// import ReactDOM from 'react-dom';
import App from 'components/App';
import { shallow } from 'enzyme';
import { CommentBox } from 'components/CommentBox';
import { CommentList } from 'components/CommentList';

it('shows a comment box', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);
//   const div = document.createElement('div');

//   ReactDOM.render(<App />, div);
  // expect(div.innerHTML).toContain('Comment Box');

//   ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});