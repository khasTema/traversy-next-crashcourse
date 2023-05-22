import Head from 'next/head'
import ArticleList from '@/components/ArticleList'


export default function Home({acrticles}) {
  return (
        <div>
            <Head>
                <title>Web DEv NEXT</title>
                <meta name="keywords" content="some dev etc" />
            </Head>
            
            <ArticleList acrticles={acrticles}/>
        </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const acrticles = await res.json()

  return {
     props: {
      acrticles
     }
  }
}
