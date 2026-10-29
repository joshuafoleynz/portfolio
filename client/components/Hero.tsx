import { GitHubCalendar } from 'react-github-calendar'

function Hero() {
  return (
    <>
      <img src="/images/profileIcon.png" alt="Profile picture"></img>

      <div className="fixed top-30 left-1/2 -translate-x-1/2 z-50">
        <h1>Hello there I'm </h1>
        <h1>Joshua Foley</h1>
      </div>

      <div className="flex items-center justify-center">
        <GitHubCalendar username="joshuafoleynz" />
      </div>
    </>
  )
}

export default Hero
