import type { inferRouterOutputs } from '@trpc/server'
import numeral from 'numeral'
import Ribbon from '~/components/common/ribbon'
import type { AppRouter } from '~/server/api/root'
import { formatNumber } from '~/utils/numeral'

export type DreamListProps = {
  dreams?: inferRouterOutputs<AppRouter>['dream']['getDreams']
}

export default function DreamList({ dreams }: DreamListProps) {
  return (
    <div className="mt-3 grid grid-cols-2 gap-4">
      {dreams?.map((dream) => (
        <div key={dream.id} className="relative rounded-lg shadow-xl cursor-pointer overflow-hidden">
          <Ribbon size="small" text="New" />
          <div className="w-full h-auto aspect-[37/25] relative">
            <img src={dream.images[0]?.url} className="w-full h-full1" />
            <div className="flex absolute text-[10px] text-white bottom-1 right-[5px] gap-1">
              <div className="flex items-center gap-0.5">
                <img src="/images/list-views.svg" className="h-4 w-4" />
                <span>{formatNumber(dream.views)}</span>
              </div>
              <div className="flex items-center">
                <img src="/images/list-contribs.svg" className="h-4 w-4" />
                <span>{dream.contributions}</span>
              </div>
            </div>
          </div>
          <div className="mx-[5px] my-1">
            <h3 className="text-base font-bold">{dream.name}</h3>
            <div className="flex gap-4 text-slate-900">
              <div className="flex-1 h-8 text-ellipsis overflow-hidden inline-block text-xs leading-4">
                {dream.summary}
              </div>
              <img className="h-8 w-8" src={dream.author.avatar} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
