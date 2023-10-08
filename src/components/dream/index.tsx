import { Content } from './content'
import Header from './header'
import { api } from '~/utils/api'

export type DreamProps = {
  id: number
}

export default function Dream({ id }: DreamProps) {
  const dream = api.dream.getDream.useQuery({ id }).data

  return (
    <div className="max-w-[760px] w-full h-full mx-auto">
      <Header images={(dream?.images ?? []).map((image) => image.url)} />
      <Content dream={dream} />
    </div>
  )
}
