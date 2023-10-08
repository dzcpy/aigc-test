import { api } from '~/utils/api'
import Genres from './genres'
import { useState } from 'react'
import Filters from './filters'
import DreamsList from './list'

export default function DreamList() {
  const [selectedGenre, setSelectedGenre] = useState<number | undefined>(undefined)
  const [selectedFilter, setSelectedFilter] = useState<'recent' | 'hot' | 'nodes' | undefined>(undefined)
  const dreams = api.dream.getDreams.useQuery({
    ...(selectedGenre ? { genreId: selectedGenre } : {}),
    filter: selectedFilter,
  }).data

  return (
    <div className="w-full h-full max-w-[760px] mx-auto mt-3 pb-[80px]">
      <div className="mx-3 relative">
        <Genres selected={selectedGenre} setSelectedGenre={setSelectedGenre} />
        <Filters selected={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <DreamsList dreams={dreams} />
      </div>
    </div>
  )
}
