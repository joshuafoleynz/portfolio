import { GitHubCalendar } from 'react-github-calendar'

function Hero() {
  return (
    <div className="flex flex-col items-center gap-4 pt-25 text-center">
      <div>
        <h1>Hey I'm,</h1>
        <h1>Joshua Foley.</h1>
        <a href="https://github.com/joshuafoleynz">
          <img
            src="images/profileIcon.png"
            alt="Profile Icon"
            className="p-5 w-75 items-center mx-"
          ></img>
        </a>
      </div>

      <div className="pt-25">
        <h1>Github Contributions</h1>
      </div>

      <div>
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
    </div>
  )
}

export default Hero
