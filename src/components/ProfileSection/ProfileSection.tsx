import UploadImageIcon from '@/icons/UploadImageIcon/UploadImageIcon';
import MainHeaderInfo from '../main/MainHeaderInfo/MainHeaderInfo';

const ProfileSection = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col gap-2 rounded-[8px] bg-white p-[24px]'>
        <MainHeaderInfo
          main_title='Profile Details'
          body_text='Add your details to create a personal touch to your profile.'
        />
        <div className='flex flex-col gap-4 rounded-xl bg-[#fafafa] p-[20px]'>
          <h1 className='body_m text-[#737373]'>Profile Picture</h1>
          <div>
            <div className='flex w-[70%] flex-col items-center justify-center gap-2 bg-[#EFEBFF] px-[39px] py-[60px]'>
              <UploadImageIcon />
              <button className='heading_s text-main-purple'>
                +Upload Image
              </button>
            </div>
          </div>
          <h1 className='body_s text-[#737373]'>
            Image must be below 1024x1024px. Use PNG or JPG format.
          </h1>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='relative flex flex-col gap-1'>
            <span className='body_s'>First name</span>
            <input
              className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 focus:shadow-active-input focus:outline-main-purple focus:duration-300'
              type='text'
              placeholder='e.g. https://www.github.com/johnappleseed'
            />
          </label>
          <label className='relative flex flex-col gap-1'>
            <span className='body_s'>Last Name</span>
            <input
              className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 focus:shadow-active-input focus:outline-main-purple focus:duration-300'
              type='text'
              placeholder='e.g. https://www.github.com/johnappleseed'
            />
          </label>
          <label className='relative flex flex-col gap-1'>
            <span className='body_s'>Email</span>
            <input
              className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 focus:shadow-active-input focus:outline-main-purple focus:duration-300'
              type='text'
              placeholder='e.g. https://www.github.com/johnappleseed'
            />
          </label>
        </div>

        <div>
          <button
            className={`heading_s w-full rounded-lg bg-main-purple px-[27px] py-[11px] font-bold text-white`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
