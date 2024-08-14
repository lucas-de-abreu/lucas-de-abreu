import MyMyselfAndI from '../../../../public/img/me.png'

export function MyInfo() {
  return (
    <div className="w-[500px] border-2 border-white p-5 text-4xl text-white">
      <div className="h-[128px] w-[128px] overflow-hidden rounded-full border-2 border-white">
        <img src={MyMyselfAndI} alt="" />
      </div>

      <div className="mt-4">
        <span className="mr-2">yo, i'm</span>{' '}
        <span className="inline-block animate-wavy animation-delay-0">l</span>
        <span className="inline-block animate-wavy animation-delay-[0.1s]">
          u
        </span>
        <span className="inline-block animate-wavy animation-delay-[0.2s]">
          c
        </span>
        <span className="inline-block animate-wavy animation-delay-[0.3s]">
          a
        </span>
        <span className="inline-block animate-wavy animation-delay-[0.4s]">
          s
        </span>
        .
      </div>
    </div>
  )
}
