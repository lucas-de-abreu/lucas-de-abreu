import { Content } from './components/Content'
import { DialogContainer } from './components/DialogContainer'

export function App() {
  const alreadyVisited = localStorage.getItem('alreadyVisited')

  if (!alreadyVisited) {
    localStorage.setItem('alreadyVisited', '1')
  }

  return (
    <div className="bg-background box-border h-screen w-screen">
      {(!alreadyVisited && <DialogContainer />) || <Content />}
      {/* <DialogContainer /> */}
    </div>
  )
}
