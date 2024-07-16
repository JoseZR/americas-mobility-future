import { useRegisterForm } from '../../store/register-form'

export function DonwloadAccess({ text }) {
  const { invoiceDownToLoad } = useRegisterForm()
  return (
    <>
      <a
        href={`https://industrialtransformation.mx/invoices/${invoiceDownToLoad}`}
        target='_blank'
        className='mt-10 text-white px-4 py-2 rounded-md font-bold bg-[#03CAFE] hover:bg-[#236d7f] transition duration-300 ease-in-out'
      >
        {text}
      </a>
    </>
  )
}
