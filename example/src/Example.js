import React from 'react';

import Values from '../..';
import { testPosts } from './testPosts';

const Example = () => (
  <Values
    posts={testPosts}
    defaultTitle="The Northward Values"
    defaultText="We are taking an integrated, values-led approach to this campaign to reflect the realities of the world we're trying to better. Supporting any one of them will benefit all."
    calloutBoxLink="//darenorthward.colby.edu/initiatives/"
    calloutBoxText="Learn more about Colby's campaign initiatives"
  />
);

export default Example;
