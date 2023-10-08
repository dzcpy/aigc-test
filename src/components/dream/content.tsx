import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '~/server/api/root'

export type ContentProps = {
  dream?: inferRouterOutputs<AppRouter>['dream']['getDream']
}

export function Content({ dream }: ContentProps) {
  console.log(dream)
  return (
    <div className="my-6 mx-3 w-full relative">
      <div className="flex justify-between gap-4">
        <h1 className="text-black text-xl font-bold leading-[30px]">{dream?.name}</h1>
        <div className="flex items-center gap-2">
          <img className="h-8 w-8" src={dream?.author?.avatar} />
          <span className="text-pink-700 text-base font-bold leading-normal">{dream?.author?.name}</span>
        </div>
      </div>
      <div className="w-full text-black text-base font-normal leading-normal mt-3">{dream?.description}</div>
      {dream?.tags?.length ? (
        <div className="mt-[40px] text-pink-700 text-sm font-normal leading-[21px] flex flex-wrap gap-2">
          {[1, 2].map(
            (index) =>
              dream?.tags?.map((tag) => (
                <span key={tag.id + index} className="inline-block cursor-pointer">
                  #{tag.name}
                </span>
              ))
          )}
        </div>
      ) : null}
      <div className="my-5 flex items-center justify-start flex-wrap text-violet-950 text-sm font-normal leading-[18px] gap-3">
        {dream?.genres?.map((genre) => (
          <span key={genre.id} className="inline-block px-[10px] py-1.5 rounded-full bg-[#EDEDED]">
            {genre.name}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-start items-center gap-2">
          <div className="flex justify-start pl-5">
            {dream?.contributors
              ?.slice(0, 3)
              ?.map((contributor) => (
                <img
                  src={contributor.avatar}
                  className="h-[42px] w-[42px] flex-none -ml-5 border shadow-md rounded-full"
                  key={contributor.id}
                />
              ))}
          </div>
          {dream?.contributors && dream.contributors?.length > 3 ? (
            <div className="text-blue-900 text-sm font-normal leading-[21px]">
              +{dream.contributors.length - 3} contributors{' '}
            </div>
          ) : null}
        </div>
        <div className="flex gap-1 items-center">
          <img src="/images/details-views.svg" className="w-[18px] h-[18px]" />
          <span className="text-violet-950 text-xl font-bold leading-[30px]">{dream?.views}</span>
        </div>
      </div>
      <div className="mt-14 flex items-center flex-col gap-6">
        <div
          className="cursor-pointer w-auto border-[2.5px] border-transparent bg-[linear-gradient(white,white),linear-gradient(to_right,#15097A,#FF016A)] bg-origin-border rounded-full flex items-center justify-center"
          style={{ backgroundClip: 'content-box, border-box' }}
        >
          <span className="text-violet-950 text-base font-semibold leading-[30px] rounded-full px-[79px] py-[11px] ">
            Enter Dream
          </span>
        </div>
        <div className="flex items-center justify-center">
          <span className="text-blue-900 text-sm font-normal leading-[21px]">View Dream Details</span>
          <img src="/images/right-arrow-filled.svg" className="w-6 h-6 -mx-1" />
        </div>
      </div>
    </div>
  )
}
