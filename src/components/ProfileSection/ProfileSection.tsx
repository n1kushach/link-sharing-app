'use client';
import UploadImageIcon from '@/icons/UploadImageIcon/UploadImageIcon';
import MainHeaderInfo from '../main/MainHeaderInfo/MainHeaderInfo';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';
import { ChangeEvent, useState } from 'react';
import { profileSchema } from '@/schemas/profileSchema';
import * as Yup from 'yup';

const ProfileSection = () => {
  const [errors, setErrors] = useState<any>({});
  const handleProfileSubmit = async (e: any) => {
    e.preventDefault();
    setErrors({});
    try {
      await profileSchema.validate(profile, { abortEarly: false });
      console.log('SUCCESS');
      // router.push('/choose-option/');
    } catch (validationErrors: any) {
      const errors: Record<string, string> = {};
      validationErrors.inner.forEach((error: any) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

  const { profile, setProfile } = useLinkShare();

  return (
    <div className='flex flex-col gap-2 p-[16px]'>
      <div className='flex flex-col gap-8 rounded-[8px] bg-white p-[24px]'>
        <MainHeaderInfo
          main_title='Profile Details'
          body_text='Add your details to create a personal touch to your profile.'
        />
        <div className='flex flex-col gap-4 rounded-xl bg-[#fafafa] p-[20px]'>
          <h1 className='body_m text-[#737373]'>Profile Picture</h1>
          <div>
            <div className='flex w-[70%] flex-col items-center justify-center gap-2 rounded-[12px] bg-[#EFEBFF] px-[39px] py-[60px]'>
              <UploadImageIcon />
              <button className='heading_s text-main-purple'>+Upload Image</button>
            </div>
          </div>
          <h1 className='body_s text-[#737373]'>Image must be below 1024x1024px. Use PNG or JPG format.</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='relative flex flex-col gap-1'>
            <span className='body_s'>First name *</span>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setProfile({ ...profile, first_name: e.target.value });
                if (errors?.first_name) {
                  const dataCopy = { ...errors };
                  delete dataCopy.first_name;
                  setErrors(dataCopy);
                }
              }}
              className={`rounded-lg ${
                errors?.first_name && 'border-red-500'
              } border border-[#d9d9d9] bg-[#fff] px-4 py-3 text-sm placeholder:text-sm focus:shadow-active-input focus:outline-main-purple focus:duration-300`}
              type='text'
              placeholder='e.g. https://www.github.com/johnappleseed'
            />
          </label>
          <label className='relative flex flex-col gap-1'>
            <span className='body_s'>Last Name *</span>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setProfile({ ...profile, last_name: e.target.value });
                if (errors?.last_name) {
                  const dataCopy = { ...errors };
                  delete dataCopy.last_name;
                  setErrors(dataCopy);
                }
              }}
              className={`rounded-lg border ${
                errors?.last_name && 'border-red-500'
              } border-[#d9d9d9] bg-[#fff] px-4 py-3 text-sm placeholder:text-sm focus:shadow-active-input focus:outline-main-purple focus:duration-300`}
              type='text'
              placeholder='e.g. https://www.github.com/johnappleseed'
            />
          </label>
          <label className='relative flex flex-col gap-1'>
            <span className='body_s'>Email</span>
            <input
              onChange={(e: ChangeEvent<HTMLInputElement>) => setProfile({ ...profile, email: e.target.value })}
              className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 text-sm placeholder:text-sm focus:shadow-active-input focus:outline-main-purple focus:duration-300'
              type='text'
              placeholder='e.g. https://www.github.com/johnappleseed'
            />
          </label>
        </div>

        <div>
          <button
            type='submit'
            onClick={(e) => handleProfileSubmit(e)}
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
