# values-flower

A flower-like display feature highlighting institutional values.

[Demo](https://colbycommunications.github.io/values-flower/example/).

## Install

```
yarn add https://github.com/ColbyCommunications/values-flower
```

## Include in project

```Javascript
import React from 'react';
import ReactDOM from 'react-dom';

import Values from 'values-flower';

ReactDOM.render(
  <Values
    // One of the following two props is required.
    posts={[
        // Array of post objects.
        ]}
    endpoint={'http://some-url-to-retrieve-posts'}
    // See below for deatils on the post schema.

    // All of the remaining props are required.
    defaultTitle="Title" // Title displayed when no value is active.
    defaultText="Some text" // Description to display when no value is active.
    calloutBoxLink="http://more-information-url" // A URL to link to.
    calloutBoxText="Some text" // The link text.
  />,
  document.querySelector('#some-selector')
);
```

### Post object

Each post object requires the following schema:

```Javascript
{
    title: {
        rendered: 'The post title.'
    },
    excerpt: {
        rendered: 'The post excerpt.'
    },
    // The post title is used as alt text.
    // Images can be small -- they don't exceed 400px by 400px in the component.
    thumbnail: {
        src: 'The thumbnail url.',
        width: 'Thumbnail width.',
        height: 'Thumbnail height.',
    }
}
```

This schema reflects what's returned for built-in post types from the WordPress REST API, with a `rest_prepare_{$post_type}` filter callback to convert a featured image ID to the above attributes.
