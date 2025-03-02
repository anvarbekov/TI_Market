/* eslint-disable @next/next/no-img-element */
import CurrentDateTime from '@/components/currentTime/CurrentDateTime'
import ProductItem from '@/components/products/ProductItem'
import VideoSlider from '@/components/videoslider/VideoSlider'
// import data from '@/lib/data'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'TI Market',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}

export default async function Home() {
  const latestProducts = await productService.getLatest()
  return (
    <>
        <div className='video__slider-box mt-5 relative z-0 rounded'>
          <VideoSlider />
          <div className='slider__info'>
            <div className='text__animtion-box'>
              <div className='text__animation'>
                <div className='anim__text'>Biz eng sifatli</div>
                <div className='anim__text'>Original va qulay bo'lgan</div>
                <div className='anim__text'>Kiyimlar yetkazib beramiz!</div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel or Video Slides */}
      <h2 className="text-3xl mt-4 py-2">Eng so'ngi mahsulotlar</h2>
      <div className='mb-10'>
        <CurrentDateTime />
      </div>
      <div className="grid grid-cols-1 mb-4 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </>
  )
}
