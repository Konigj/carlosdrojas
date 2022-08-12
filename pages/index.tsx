import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'
import LayoutProfiles from './src/UI/LayoutProfiles'
import Leto from './src/UI/Leto'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Home: NextPage = () => {

  const { data, error } = useSWR('https://noova-server.herokuapp.com/profiles/carlosdrojas', fetcher)


  return (
      <LayoutProfiles slug={`Carlos Rojas Pico`}>
      <Leto profile={profile.leto}/>
    </LayoutProfiles>
  )
}

export default Home
