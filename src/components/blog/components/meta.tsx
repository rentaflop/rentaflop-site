import Head from 'next/head'


const Meta = () => {
  return (
    <Head>
      <meta
        name="description"
        content={`We hope you find our content on Blender and our latest news to be helpful and informative!`}
      />
      <meta property="og:image" content="https://portal.rentaflop.com/static/rentaflop_logo.png" />
    </Head>
  )
}

export default Meta
