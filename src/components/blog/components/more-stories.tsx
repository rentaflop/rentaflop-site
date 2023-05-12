import PostPreview from './post-preview'


const MoreStories = ({ posts }) => {
  return (
    <section>
      <section className="flex-col md:flex-row flex text-left md:justify-between mt-8 mb-16 md:mb-12">
      <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        Archives
      </h3>
    </section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
