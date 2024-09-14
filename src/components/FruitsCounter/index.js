// Write your code here
import {Component} from 'react'

import './index.css'

class FruitCounter extends Component {
  state = {mangosCount: 0, bananasCount: 0}

  onClickEatMango = () => {
    this.setState(prevState => ({mangosCount: prevState.bananasCount + 1}))
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.mangosCount + 1}))
  }
  render() {
    const {mangosCount, bananasCount} = this.state

    return (
      <div className="fruits-counter-bg">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{mangosCount}</span> mangoes
            <span className="count">{bananasCount}</span>
            bananas
          </h1>
          <div className="counter-control-contaier">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
                <div className="counter-control">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                    alt="banana"
                    className="fruit-image"
                  />
                  <button
                    type="button"
                    className="button"
                    onClick={this.onClickEatBanana}
                  >
                    Eat Banana
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitCounter
