import { useRouter } from 'next/router'
import Dream from '~/components/dream'

export default function DreamPage() {
  const router = useRouter()

  return <div className="">{router.query.dreamId ? <Dream id={Number(router.query.dreamId)} /> : null}</div>
}
