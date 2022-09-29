import {Component} from 'react'

import ButtonSection from './components/ButtonSection'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
    greeting: 'hi everyOne',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
    greeting: 'vanakkam',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
    greeting: 'namaskaram',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
    content: languageGreetingsList[0],
  }

  updateState = id => {
    const filteredContent = languageGreetingsList.filter(each => id === each.id)
    this.setState({activeId: id, content: filteredContent})
  }

  render() {
    const {activeId, content} = this.state
    return (
      <div className="mainContainer">
        <h1>Multilingual Greetings</h1>
        <ul className="buttonContainer">
          {languageGreetingsList.map(each => (
            <ButtonSection
              key={each.id}
              id={each.id}
              sendId={this.updateState}
              activeClass={each.id === activeId}
              buttonText={each.buttonText}
            />
          ))}
        </ul>
        <div className="greetingImageContainer">
          <img
            className="greetingImage"
            src={content.imageUrl}
            alt={content.imageAltText}
          />
        </div>
      </div>
    )
  }
}

export default App
