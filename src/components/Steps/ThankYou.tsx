import { IconThankYou } from '@/icons/IconThankYou';

export const ThankYou = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
      <IconThankYou className='w-16' />
      <div className='text-blue-4 text-3xl font-medium'>Thank you!</div>
      <p className='text-neutral-4 text-sm font-light text-center'>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
};
