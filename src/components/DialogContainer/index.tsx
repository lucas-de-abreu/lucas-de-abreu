import { useEffect, useState } from 'react'
import { dialogues } from './dialogues'
import { ArrowFatDown } from '@phosphor-icons/react'
import { Content } from '../Content'

export function DialogContainer() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [currentSentence, setCurrentSentence] = useState('')

  useEffect(() => {
    setShowButton(false)
    setCurrentSentence('')

    const sentence = dialogues[currentStep]

    if (sentence) {
      Array.from(dialogues[currentStep]).forEach((letter, index) => {
        setTimeout(() => {
          setCurrentSentence((currentSentence) => currentSentence + letter)

          if (index === Array.from(dialogues[currentStep]).length - 1) {
            setShowButton(true)
          }
        }, index * 60)
      })
    }
  }, [currentStep])

  if (currentStep >= dialogues.length) {
    return <Content />
  }

  return (
    <div className="text-foreground flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col">
        <div className="border-foreground z-10 flex min-h-fit w-[500px] justify-between border-2 px-4 py-2 text-xl">
          <span>{currentSentence}</span>

          {showButton && (
            <button
              className="h-fit animate-bounce self-end justify-self-end"
              onClick={() => {
                setCurrentStep(() => currentStep + 1)
              }}
            >
              <ArrowFatDown weight="fill" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
