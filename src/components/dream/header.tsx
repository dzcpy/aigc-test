import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

export type HeaderProps = {
  images: string[]
}

export default function Header({ images }: HeaderProps) {
  const router = useRouter()
  if (images.length < 4) {
    images = images.concat(Array(4 - images.length).fill(images[0])).slice(0, 4)
  }

  return (
    <div className="relative">
      <div className="flex justify-between absolute z-10 top-0 w-full pointer-events-none mt-[22px] pl-3 pr-1.5">
        <img
          src="/images/button-back.png"
          className="w-[44px] h-[44px] cursor-pointer pointer-events-auto"
          onClick={() => void router.push('/')}
        />
        <img src="/images/button-home.png" className="w-[44px] h-[44px] cursor-pointer pointer-events-auto" />
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        className="w-full rounded-b-md overflow-hidden"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {images.map((url, index) => (
          <SwiperSlide key={index} className="w-full">
            <img src={url} className="w-full aspect-[10/7] h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
