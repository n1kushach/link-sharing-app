'use client';
import UploadImageIcon from '@/icons/UploadImageIcon/UploadImageIcon';
import MainHeaderInfo from '../main/MainHeaderInfo/MainHeaderInfo';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';
import { ChangeEvent, useRef, useState } from 'react';
import { profileSchema } from '@/schemas/profileSchema';
import Image from 'next/image';

const ProfileSection = () => {
  const { profile, setProfile, setView } = useLinkShare();
  const [errors, setErrors] = useState<any>({});

  const uploadImgRef = useRef<HTMLInputElement>(null);
  const handleProfileSubmit = async (e: any) => {
    e.preventDefault();
    setErrors({});
    try {
      await profileSchema.validate(profile, { abortEarly: false });
    } catch (validationErrors: any) {
      const errors: Record<string, string> = {};
      validationErrors.inner.forEach((error: any) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

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
            <div
              onClick={() => uploadImgRef.current?.click()}
              className='relative flex w-[70%] flex-col items-center justify-center gap-2 rounded-[12px] bg-[#EFEBFF] px-[39px] py-[60px]'
            >
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setProfile({ ...profile, image: e.target.files?.[0] as File })
                }
                accept='image/jpeg,image/jpg,image/png'
                hidden={true}
                type='file'
                ref={uploadImgRef}
              />
              <UploadImageIcon />
              <div>
                {profile?.image !== '' && (
                  <Image
                    key='image'
                    alt='image'
                    src={URL.createObjectURL(profile.image as Blob)}
                    layout='fill'
                    objectFit='fill'
                    className=' absolute '
                  />
                )}
              </div>
              <button className='heading_s text-main-purple'>+Upload Image</button>
            </div>
          </div>
          <h1 className='body_s text-[#737373]'>
            Image must be below 1024x1024px. <br /> Use PNG / JPG / JPEG format.
          </h1>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='relative flex flex-col gap-1'>
            <span className='body_s'>First name *</span>
            <input
              value={profile?.first_name || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setProfile({ ...profile, first_name: e.target.value });
                if (errors?.first_name) {
                  const profileCopy = { ...errors };
                  delete profileCopy.first_name;
                  setErrors(profileCopy);
                }
              }}
              className={`rounded-lg ${
                errors?.first_name && 'border-red-500'
              } border border-[#d9d9d9] bg-[#fff] px-4 py-3 text-sm placeholder:text-sm focus:shadow-active-input focus:outline-main-purple focus:duration-300`}
              type='text'
              placeholder='Please enter your first name'
            />
          </label>
          <label className='relative flex flex-col gap-1'>
            <span className='body_s'>Last Name *</span>
            <input
              value={profile?.last_name || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setProfile({ ...profile, last_name: e.target.value });
                if (errors?.last_name) {
                  const profileCopy = { ...errors };
                  delete profileCopy.last_name;
                  setErrors(profileCopy);
                }
              }}
              className={`rounded-lg border ${
                errors?.last_name && 'border-red-500'
              } border-[#d9d9d9] bg-[#fff] px-4 py-3 text-sm placeholder:text-sm focus:shadow-active-input focus:outline-main-purple focus:duration-300`}
              type='text'
              placeholder='Please enter your last name'
            />
          </label>
          <label className='relative flex flex-col gap-1'>
            <span className='body_s'>Email</span>
            <input
              value={profile?.email || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setProfile({ ...profile, email: e.target.value })}
              className=' rounded-lg border border-[#d9d9d9] bg-[#fff] px-4 py-3 text-sm placeholder:text-sm focus:shadow-active-input focus:outline-main-purple focus:duration-300'
              type='text'
              placeholder='Please enter your email'
            />
          </label>
        </div>

        <div className='sm:flex sm:justify-end'>
          <button
            type='submit'
            onClick={(e) => handleProfileSubmit(e)}
            className={`heading_s w-full rounded-lg bg-main-purple px-[27px] py-[11px] font-bold text-white sm:w-[91px]`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
