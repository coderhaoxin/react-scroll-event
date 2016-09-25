
import { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

class ScrollContainer extends Component {
  static propTypes = {
    onScrollBottom: PropTypes.func,
    threshold: PropTypes.number
  }

  static defaultProps = {
    onScrollBottom: function() {},
    threshold: 80
  }

  get count() {
    const { children } = this.props
    if (Array.isArray(children)) {
      return children.length
    } else {
      return 1
    }
  }

  componentDidMount() {
    this.addScrollListener()
  }

  componentDidUpdate() {
    this.addScrollListener()
  }

  componentWillUnmount() {
    this.removeScrollListener()
  }

  addScrollListener() {
    window.addEventListener('scroll', this.scrollListener)
    window.addEventListener('resize', this.scrollListener)
    this.scrollListener()
  }

  removeScrollListener() {
    window.removeEventListener('scroll', this.scrollListener)
    window.removeEventListener('resize', this.scrollListener)
  }

  scrollListener = () => {
    const {
      onScrollBottom,
      threshold
    } = this.props

    const node = findDOMNode(this)
    const scrollTop = (window.pageYOffset !== undefined) ?
      window.pageYOffset :
      (document.documentElement || document.body.parentNode || document.body).scrollTop

    if (toTop(node) + node.offsetHeight - scrollTop - window.innerHeight < threshold) {
      this.removeScrollListener()
      onScrollBottom(this.count)
    }
  }

  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default ScrollContainer

/**
 * private
 */

function toTop(node) {
  if (!node) {
    return 0
  }
  return node.offsetTop + toTop(node.offsetParent)
}
