import type { NextPage } from 'next'
import useSWR from 'swr'
// UI
import LayoutProfiles from './src/UI/LayoutProfiles'
import Baco from './src/UI/Baco'

const fetcher = (...args:any[]) => fetch(...args).then(res => res.json())

const Home: NextPage = () => {

  const { data, error } = useSWR('https://noova-server.herokuapp.com/profiles/carlosdrojas', fetcher)

  return (
      <LayoutProfiles slug={`Carlos Rojas Pico`}>
       { !error && data && <Baco profile={data.baco}/>}
      </LayoutProfiles>
  )
}

export default Home
