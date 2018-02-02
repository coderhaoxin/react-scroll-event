
[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Dependency status][david-img]][david-url]

### react-scroll-event

### Usage

```jsx
import ScrollContainer from 'react-scroll-event'
import React, { Component } from 'react'

class App extends Component {
  loadMore = () => {
    // ...
  }

  render() {
    return (
      <main>
        <ScrollContainer onScrollBottom={this.loadMore}>
          {
            items.map((item, k) => (
              <Item key={k} {...item} />
            ))
          }
        </ScrollContainer>
      </main>
    )
  }
}
```

### License
MIT

[npm-img]: https://img.shields.io/npm/v/react-scroll-event.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-scroll-event
[license-img]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: http://opensource.org/licenses/MIT
[david-img]: https://img.shields.io/david/haoxins/react-scroll-event.svg?style=flat-square
[david-url]: https://david-dm.org/haoxins/react-scroll-event
