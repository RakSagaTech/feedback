// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources 
    
    return (
        <div>
            <img 
                src={loveEmojiUrl}
                alt="love emoji"
            />
            <h1> Thank you! </h1>
            <p> We will use your feedback 
              to improve our customer support 
              performance.
            </p>
        </div>
    )
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1>How satisfied are you with our customer support performance?</h1>
        <ul>
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button">
                <img src={emoji.imageUrl} alt={emoji.name} />
                <br />
                <p>{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div>
        <div>
          {isFeedbackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
