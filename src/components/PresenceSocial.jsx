import { useNearScreen } from '../hooks/useNearScreen'
import { Bullets } from './Bullets'

export function PresenceSocial({
  title,
  followers,
  network,
  people,
  reach,
  coverage,
  allsocial,
}) {
  const [show, ref] = useNearScreen()
  return (
    <div ref={ref}>
      {show && (
        <>
          <p
            className='text-white font-bold text-4xl py-4 px-20 mt-20 ms-[-8px] uppercase'
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgb(3, 40, 126), rgb(0, 110, 234) 50%, rgb(96, 226, 220) 100%)',
            }}
          >
            {title}
          </p>
          <div className='text-center uppercase'>
            <Bullets number='6135' duration='4' />
            <p className='text-gray-600 font-extrabold text-4xl'>{followers}</p>
            <p className='text-gray-600 text-xl'>{network}</p>
            <Bullets number='4200000' duration='4' />
            <p className='text-gray-600 font-extrabold text-4xl'>{people}</p>
            <p className='text-gray-600 text-xl'>{reach}</p>
            <p className='mt-10 text-gray-600 font-extrabold text-4xl'>
              {coverage}
            </p>
            <p className='text-gray-600 text-xl'>{allsocial}</p>
          </div>
        </>
      )}
    </div>
  )
}
