import {Component} from 'react'
import './index.css'

class ButtonSection extends Component {
  onButtonChange = () => {
    const {id, sendId} = this.props
    sendId(id)
  }

  render() {
    const {buttonText, activeClass} = this.props
    const ClsName = activeClass ? 'activeButtonEl' : 'buttonEl'
    return (
      <li className="buttonContainer">
        <button onClick={this.onButtonChange} className={ClsName} type="button">
          {buttonText}
        </button>
      </li>
    )
  }
}

export default ButtonSection
