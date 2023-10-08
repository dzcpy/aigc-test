import clsx from 'clsx'

export type FiltersProps = {
  selected?: 'recent' | 'hot' | 'nodes'
  setSelectedFilter: (filter?: 'recent' | 'hot' | 'nodes') => void
}

export default function Filters({ selected, setSelectedFilter }: FiltersProps) {
  return (
    <>
      <div className="mx-5 flex items-center justify-center text-sm font-normal leading-[21px] text-blue-900 select-none gap-[10px] mt-[9px]">
        <div className="flex flex-1 justify-between">
          <div
            className={clsx('cursor-pointer border-b-[3px]', {
              'border-transparent': selected,
              '[border-image:url(/images/filter-border.svg)_3] font-bold': !selected,
            })}
            onClick={() => setSelectedFilter()}
          >
            Default
          </div>
          <div
            className={clsx('cursor-pointer border-b-[3px]', {
              'border-transparent': selected !== 'recent',
              '[border-image:url(/images/filter-border.svg)_3] font-bold': selected === 'recent',
            })}
            onClick={() => setSelectedFilter('recent')}
          >
            Recent
          </div>
          <div
            className={clsx('cursor-pointer border-b-[3px]', {
              'border-transparent': selected !== 'hot',
              '[border-image:url(/images/filter-border.svg)_3] font-bold': selected === 'hot',
            })}
            onClick={() => setSelectedFilter('hot')}
          >
            Hot
          </div>
          <div
            className={clsx('cursor-pointer border-b-[3px]', {
              'border-transparent': selected !== 'nodes',
              '[border-image:url(/images/filter-border.svg)_3] font-bold': selected === 'nodes',
            })}
            onClick={() => setSelectedFilter('nodes')}
          >
            Nodes
          </div>
        </div>
        <div className="w-[1px] h-[13px] bg-[#D8D8D8] border-b-[3px] border-transparent"></div>
        <div className="flex-none border-b-[3px] border-transparent">Filter</div>
      </div>
    </>
  )
}
