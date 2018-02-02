
import React, { Component } from 'react'
import { render } from 'react-dom'
import ScrollContainer from '..'

class App extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.loadMore()
  }

  loadMore = count => {
    if (count < 5) return
console.log(count, 'op')
    const items = [{
      name: 'Tom'
    }, {
      name: 'Jerry'
    }, {
      name: 'Bob'
    }, {
      name: 'King'
    }, {
      name: 'Bingo'
    }]
console.log('bingoo', this.state.items)
    setTimeout(() => this.setState({
      items: [...this.state.items, ...items]
    }), 200)
  }

  render() {
    const { items } = this.state

    return (
      <content>
        <ScrollContainer onScrollBottom={this.loadMore}>
          {
            items.map((i, k) => (
              <p key={k}>
                {i.name}
              </p>
            ))
          }
        </ScrollContainer>
      </content>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('body > main'))
}
