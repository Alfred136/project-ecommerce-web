const LoadingScreen = () => {
  return (
    <div className='fixed z-50 top-0 w-full h-full flex flex-col justify-center items-center bg-[#fdfdfd]'>
      <img src='/cat.gif' className='w-full h-[25vh] object-contain' />
      <span className='relative top-[-30px]'>Loading...</span>
    </div>
  )
}

export default LoadingScreen