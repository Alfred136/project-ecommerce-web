import { useRef } from 'react'
import { Button } from '@/components';

const Searchbar = ({ handleSubmit }) => {
  const inputRef = useRef(null);

  const checkSpecialChar = (e) => {
    if (/[^0-9a-zA-Z]/.test(e.target.value)) {
      inputRef.current.value = inputRef.current.value.replace(/[^0-9a-zA-Z]/, "")
    }
  }

  return (
    <div className='flex xs:flex-row flex-col justify-between w-full gap-2'>
      <input
        className='w-full px-5 py-3 bg-gray-100 rounded-md outline-none border border-transparent hover:border-tiara focus:border-tiara'
        ref={inputRef}
        onChange={checkSpecialChar}
        placeholder='Search Products'
      />
      <Button
        title='Search'
        onClick={() => handleSubmit(inputRef.current.value)}
      />
    </div>
  )
}

export default Searchbar