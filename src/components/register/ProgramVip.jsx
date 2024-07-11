import { useRegisterForm } from '../../store/register-form'
import { Checkout } from './Checkout'

export function ProgramVip() {
  const { addTocart, item } = useRegisterForm()

  const products = [
    {
      id: 1,
      name: 'Conferencias premium',
      price: 3500,
    },
  ]

  const active = (id) => {
    return item.id === id ? 'border-2 border-[#475CA0]' : ''
  }

  return (
    <>
      <div className='grid place-content-center justify-center h-[650px] rounded-lg overflow-y-scroll w-full bg-white p-4'>
        <div className='mt-5 grid justify-center gap-6 w-full'>
          {products.map((product) => (
            <div
              key={product.id}
              className={`w-full max-w-sm h-fit  p-4 bg-white  rounded-lg shadow-xl sm:p-8 ${active(
                product.id
              )}`}
            >
              <div className='flex justify-between'>
                <h5 className='mb-4 text-xl font-medium text-black '>
                  {product.name}
                </h5>
                {product.id === item.id ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#475CA0'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                ) : (
                  <svg
                    height='24'
                    width='24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      r='10'
                      cx='12'
                      cy='12'
                      stroke='#475CA0'
                      strokeWidth='1'
                      opacity='0.5'
                    />
                  </svg>
                )}
              </div>
              <div className='flex items-baseline text-black '>
                <span className='text-3xl font-semibold'>$</span>
                <span className='text-5xl font-extrabold tracking-tight'>
                  {product.price}
                </span>
                <span className='font-bold'>MXN</span>
              </div>

              <button
                type='button'
                className='mt-5 text-white border border-white bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'
                onClick={() => addTocart(product)}
              >
                Comprar
              </button>
            </div>
          ))}
          {Object.keys(item).length > 0 && <Checkout />}
        </div>
      </div>
    </>
  )
}
