import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios'

import Link from 'next/link'

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
  const data = await res.json()
  return data
}

const getComments = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/comments?_limit=1'
  )
  const data = await res.json()
  return data
}

export default async function Home() {
  const [posts, comments] = await Promise.all([getPosts(), getComments()])
  console.log(posts.length, comments.length)
  const url = 'https://api.themoviedb.org/3/tv/top_rated'
  // const res = await axios.get(url)
  return (
    <main className={styles.main}>
      <Link href={'/pages'}>go Pages</Link>
      <h1>posts</h1>
      {posts.map((v: { title: string }) => {
        return (
          <>
            <p>{v.title}</p>
          </>
        )
      })}
      <h1>comments</h1>
      {comments.map((v: { name: string }) => {
        console.log(v)
        return (
          <>
            <p>{v.name}</p>
          </>
        )
      })}
    </main>
  )
}
