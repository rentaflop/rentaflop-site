import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-1xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/blog" className="text-[#0288D1]/60 hover:underline">
        Blog home
      </Link>
    </h2>
  )
}

export default Header
