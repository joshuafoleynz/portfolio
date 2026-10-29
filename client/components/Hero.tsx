import { GitHubCalendar } from 'react-github-calendar'

function Hero() {
  return (
    <>
      <img src="/images/profileIcon.png" alt="Profile picture"></img>
      <h1>Joshua Foley</h1>
      <div className="flex items-center justify-center">
        <GitHubCalendar username="joshuafoleynz" />
      </div>
    </>
  )
}

export default Hero
