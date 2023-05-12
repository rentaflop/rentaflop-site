import Container from '../../components/blog/components/container'
import MoreStories from '../../components/blog/components/more-stories'
import HeroPost from '../../components/blog/components/hero-post'
import Intro from '../../components/blog/components/intro'
import Layout from '../../components/blog/components/layout'
import { getAllPosts } from '../../components/blog/lib/api'
import Head from 'next/head'
import Page from '../../components/page'
import "tailwindcss/tailwind.css";


export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Page>
      <Layout>
        <Head>
          <title>rentaflop blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </Page>
  )
}


export async function getStaticProps(context) {
  // hide API post from being seen, only via direct link
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]).filter(post => !(post.title === 'Rentaflop Rendering API'))

  // Pass data to the page via props
  return { props: { allPosts } }
}
