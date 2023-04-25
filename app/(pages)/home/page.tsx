import About from '@/app/sections/about/About'
import Advertising from '@/app/sections/advertising/Advertising'
import BlogPreview from '@/app/sections/blog/BlogPreview'
import MediaContent from '@/app/sections/media-content/MediaContent'
import Memories from '@/app/sections/memories/Memories'
import Partners from '@/app/sections/partners/Partners'
import Recommended from '@/app/sections/recommended/Recommended'

export default function Home() {
  return (
    <>
      {/* <Recommended /> */}
      <Advertising />
      <About />
      <MediaContent />
      <BlogPreview />
      <Partners />
      {/* <Memories /> */}
    </>
  )
}
