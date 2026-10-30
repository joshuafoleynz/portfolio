import { GitHubCalendar } from 'react-github-calendar'

function Hero() {
  return (
    <>
      <div className="fixed top-25 left-1/2 -translate-x-1/2 z-50">
        <h1>Hey I'm,</h1>
      </div>

      <div className="fixed top-30 left-1/2 -translate-x-1/2 z-50">
        <h1>Joshua Foley</h1>
      </div>

      <div className="fixed top-65 left-1/2 -translate-x-1/2 z-50">
        <h1>Github Contributions</h1>
      </div>

      <div className="fixed top-75 left-1/2 -translate-x-1/2 z-50">
        <GitHubCalendar username="joshuafoleynz" />
      </div>

      <a
        className="fixed top-0 right-0 block rounded p-2 transition-opacity hover:opacity-75"
        href="https://github.com/joshuafoleynz/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-10"
          src="images/GitHub_Logo.svg"
          alt="GitHub logo"
        ></img>
      </a>
    </>
  )
}

export default Hero
