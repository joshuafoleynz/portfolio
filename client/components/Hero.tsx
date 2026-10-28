import { GitHubCalendar } from 'react-github-calendar'

function Hero() {
  return (
    <>
      <img src="/images/profileIcon.png" alt="Profile picture"></img>
      <h1>Joshua Foley</h1>
      <h2>joshuafoleynz</h2>
      <GitHubCalendar username="joshuafoleynz"></GitHubCalendar>
    </>
  )
}

export default Hero
