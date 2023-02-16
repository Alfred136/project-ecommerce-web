import Spinner from 'react-bootstrap/Spinner';

const Loading = () => (
  <div className='flex justify-center items-center w-full min-h-[30vh]'>
    <Spinner animation="border" variant="secondary" className="m-auto text-blue-700" />
  </div>
)

export default Loading;