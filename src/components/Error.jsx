const Error = ({ message }) => {
  return (
    <div className='min-h-[65vh] flex flex-col items-center gap-4 pt-16'>
      <span className='xs:text-[72px] text-[60px] font-bold text-center opacity-70'>ERROR {':('}</span>
      <span className='text-[24px] font-semibold text-center opacity-40'>Something went wrong...</span>
      <p className='font-semibold'>{message}</p>
      <img src='/shark.gif' className='w-full h-[30vh] object-contain' />
    </div>
  )
}

export default Error