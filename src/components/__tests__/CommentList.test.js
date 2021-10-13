import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentList />
        </Root>
    );
});

it('create one LI per comment', () => {});