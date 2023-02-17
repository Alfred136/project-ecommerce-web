const StoryImage = ({ source }) => (
  <div className='md:w-[600px] w-full h-[650px]'>
    <img
      src={source}
      className='w-full h-full object-cover'
    />
  </div>
)

const StoryTextContainer = ({ title, children }) => (
  <div className='flex flex-col gap-4 px-10 md:mt-0 mt-4'>
    <span className='text-[36px] font-semibold leading-tight'>
      {title}
    </span>
    {...children}
  </div>
)

const Stories = () => (
  <div className='max-w-[1400px] m-auto w-full flex flex-col gap-10 mb-20'>
    {/* stories session 1 */}
    <div className='flex md:flex-row flex-col md:items-start items-center justify-center'>
      <StoryImage source={'/boy-skateboard.jpg'} />
      <StoryTextContainer title='Into your "Jeanetics"'>
        <p className='max-w-[450px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.
        </p>
        <p className='max-w-[450px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.
        </p>
      </StoryTextContainer>
    </div>

    {/* stories session 2 */}
    <div className='flex md:flex-row flex-col-reverse md:items-start items-center justify-center'>
      <StoryTextContainer title='Clean, lean & jeans'>
        <p className='max-w-[400px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.
        </p>
        <p className='max-w-[400px] pb-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.
        </p>
        <p className='max-w-[400px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.
        </p>
      </StoryTextContainer>
      <StoryImage source={'/girl-gray.jpg'} />
    </div>
  </div>
);

export default Stories;