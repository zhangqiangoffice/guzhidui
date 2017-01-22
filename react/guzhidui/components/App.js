import React from 'react'
import TitleBarContainer from '../containers/TitleBarContainer'
import MainBody from './MainBody'
import LoadingContainer from '../containers/LoadingContainer'
import LoginBoxContainer from '../containers/LoginBoxContainer'
import RegisterBoxContainer from '../containers/RegisterBoxContainer'
import PaperBoxContainer from '../containers/PaperBoxContainer'

const App = () => (
  <div>
    <TitleBarContainer />
    <MainBody />
    <LoadingContainer />
    <LoginBoxContainer />
    <PaperBoxContainer />
    <RegisterBoxContainer />

  </div>
)

export default App