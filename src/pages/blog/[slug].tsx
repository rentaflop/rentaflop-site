import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/blog/components/container'
import PostBody from '../../components/blog/components/post-body'
import Header from '../../components/blog/components/header'
import Layout from '../../components/blog/components/layout'
import { getPostBySlug, getAllPosts } from '../../components/blog/lib/api'
import PostTitle from '../../components/blog/components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../components/blog/lib/markdownToHtml'
import type PostType from '../../components/blog/interfaces/post'
import BlogPage from '../../components/blog_page'
import SlideShow from '../../components/blog/components/slideshow'


type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
  <>
  <Head>
    <title>
    {post.title + " | rentaflop | Cloud Render Farm"}
    </title>
    {/* if modified, update rentaflop-site and _app.js */}
    <meta property="og:title" content={post.title} key="og:title" />
    <meta property="og:url" content={"https://portal.rentaflop.com/blog/"+post.slug.replace(/\.md$/, '')} key="og:url" />
    <meta property="og:image" content={"https://portal.rentaflop.com"+post.ogImage.url} key="og:image" />
    <meta property="og:type" content="article" key="og:type" />
    <meta property="og:description" content={post.excerpt} key="og:description" />
    <meta property="description" content={post.excerpt} key="description" />
    {/* only used here since images not displayed properly from blog in twitter */}
    <meta name="twitter:site" content="@rentaflop" />
    <meta name="twitter:image" content={"https://portal.rentaflop.com"+post.ogImage.url} />
  </Head>
  <BlogPage>
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
	      { post.slug.startsWith("ai-art") &&
	      	<SlideShow />
	      }
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  </BlogPage>
  </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

