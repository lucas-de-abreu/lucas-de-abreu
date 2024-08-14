import { Header } from './components/Header'
import { MyInfo } from './components/MyInfo'
import { SampleButton } from './components/SampleButton'

export function Content() {
  return (
    <div>
      <Header />

      <div className="mx-auto flex w-[800px] gap-3">
        <MyInfo />
        <div className="flex flex-grow items-center justify-center gap-2 border-2 border-white">
          <SampleButton /> <SampleButton />
        </div>
      </div>
    </div>
  )
}
