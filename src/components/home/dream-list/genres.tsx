import clsx from 'clsx'
import { api } from '~/utils/api'

export type GenresProps = {
  selected?: number
  setSelectedGenre: (genreId?: number) => void
}

export default function Genres({ selected, setSelectedGenre }: GenresProps) {
  const genres = api.dream.getGenres.useQuery(undefined).data

  return (
    <div className="mx-5 flex items-center border-b border-[#EDEDED]">
      <div className="flex-1 flex text-sm overflow-x-hidden text-[#062C81] flex-nowrap select-none gap-4">
        <div
          className={clsx('leading-[21px] cursor-pointer whitespace-nowrap', {
            'text-pink-700 font-bold': selected === undefined,
          })}
          onClick={() => setSelectedGenre()}
        >
          Recommended
        </div>
        {genres?.map((genre) => (
          <div
            key={genre.id}
            className={clsx('leading-[21px] cursor-pointer whitespace-nowrap', {
              'text-pink-700 font-bold': selected === genre.id,
            })}
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </div>
        ))}
      </div>
      <img src="/images/right-arrow.svg" className="flex-none h-[17px] w-[17px] absolute right-0 cursor-pointer" />
    </div>
  )
}
