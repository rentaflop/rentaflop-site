const Intro = () => {
  return (
  <>
    <section className="flex-col md:flex-row flex text-left md:justify-between mt-16">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-80">
        Welcome to Rentaflop's Blog
      </h1>
    </section>
    <section className="flex-col md:flex-row flex text-left md:justify-between mb-16 md:mb-12">
      <h4 className="text-center md:text-left text-lg mt-5 ">
      	We hope you enjoy our content on Blender and the latest rentaflop news!
      </h4>
    </section>
      <section className="flex-col md:flex-row flex text-left md:justify-between mt-16 mb-16 md:mb-12">
      <h3 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        Read the latest...
      </h3>
    </section>
  </>
  )
}

export default Intro
