import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import Ribbon from '../common/ribbon'

export default function Header() {
  return (
    <div className="w-full h-full max-w-[430px] mx-auto">
      <div className="mx-[9px]">
        <div className="mr-[5px] mt-[3px] flex justify-end">
          <img src="/images/button-home.png" />
        </div>
        <div className="mt-[22px] w-full px-[5px]">
          <div
            className="h-9 w-full border border-transparent bg-[linear-gradient(white,white),linear-gradient(to_right,#15097A,#FF016A)] bg-origin-border rounded-full"
            style={{ backgroundClip: 'content-box, border-box' }}
          >
            <div className="flex justify-start items-center gap-2 w-full h-full px-3">
              <img src="/images/search.svg" />
              <input
                className="outline-none flex-1 placeholder-[#6F85B6] bg-transparent text-blue-900 text-sm font-light font-['Poppins'] leading-[21px]"
                placeholder="Search for dreams"
              />
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          className="mt-[23px] w-full"
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={true}
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <SwiperSlide className="w-full overflow-hidden relative w-full" key={index}>
              <Ribbon size="large" text={'TOP' + (index + 1)} />
              <div className="border-[#FFE0F9] border-[6px] rounded-[14px] box-border bg-[url(/images/slide.png)] overflow-hidden w-full bg-no-repeat bg-cover">
                <div className="bg-[url(/images/slide-shadow.png)] bg-[center_right] bg-no-repeat bg-cover w-full">
                  <div className="w-[385px] h-[265px] relative rounded-[20px]">
                    <div className="w-[129px] h-[36.71px] left-[270.36px] top-[15.15px] absolute text-black text-2xl font-bold font-['Poppins'] leading-9">
                      Arachna
                    </div>
                    <div className="w-[126px] h-[124px] left-[273px] top-[52px] absolute text-slate-900 text-xs font-normal font-['Poppins'] leading-[18px]">
                      A group of spider women on the outskirts of the city. These fierce and elegant creatures possess
                      the upper body of a woman and the lower body of a spider...
                    </div>
                    <div className="w-[113px] h-[43px] left-[288px] top-[223px] absolute text-black text-sm font-bold font-['Poppins'] leading-[21px] bg-[url(/images/get-started-button.svg)] flex justify-center items-center cursor-pointer">
                      <span className="-mt-2 -ml-1">Get started</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
