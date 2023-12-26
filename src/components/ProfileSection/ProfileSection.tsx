'use client';
import UploadImageIcon from '@/icons/UploadImageIcon/UploadImageIcon';
import MainHeaderInfo from '../main/MainHeaderInfo/MainHeaderInfo';
import useLinkShare from '@/hooks/useLinkShare/useLinkShare';
import { ChangeEvent, useRef, useState } from 'react';
import { profileSchema } from '@/schemas/profileSchema';
import * as Yup from 'yup';
import Image from 'next/image';
import { getBase64 } from '@/utils/get-base-64/GetBase64';

const ProfileSection = () => {
  const { profile, setProfile, setView } = useLinkShare();
  const [errors, setErrors] = useState<any>({});
  const [data, setData] = useState<any>({
    image: '',
    first_name: '',
    last_name: '',
    email: '',
  });
  const uploadImgRef = useRef<HTMLInputElement>(null);
  const handleProfileSubmit = async (e: any) => {
    e.preventDefault();
    setErrors({});
    try {
      await profileSchema.validate(data, { abortEarly: false });
      setProfile({ ...profile, ...data });
      // router.push('/choose-option/');
    } catch (validationErrors: any) {
      const errors: Record<string, string> = {};
      validationErrors.inner.forEach((error: any) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

  console.log(data, 'DATA');

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
                onChange={(e: ChangeEvent<HTMLInputElement>) => setData({ ...data, image: e.target.files?.[0] })}
                accept='image/jpeg,image/jpg,image/png'
                hidden={true}
                type='file'
                ref={uploadImgRef}
              />
              <UploadImageIcon />
              <div>
                {data?.image !== '' && (
                  <Image
                    alt='image'
                    src={URL.createObjectURL(data.image)}
                    layout='fill'
                    objectFit='fill'
                    className=' absolute object-fill'
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, first_name: e.target.value });
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
                setData({ ...data, last_name: e.target.value });
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
