import { GitHubCalendar } from 'react-github-calendar'

function Home() {
  return (
    <>
      <img src="/images/profileIcon.png" alt="Profile picture"></img>
      <h1 className="text-3xl font-bold underline">Joshua Foley</h1>
      <h2>joshuafoleynz</h2>
      <GitHubCalendar username="joshuafoleynz"></GitHubCalendar>
    </>
  )
}

export default Home
