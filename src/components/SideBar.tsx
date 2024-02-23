import { BgSidebarDesktop } from '@/icons/BgSidebarDesktop';
import { BgSidebarMobile } from '@/icons/BgSidebarMobile';
import { currentStep } from '@/store';
import { useStore } from '@nanostores/react';

export const SideBar = () => {
  const $currentStep = useStore(currentStep);

  const step = (number: number, name: string) => {
    return (
      <div className='flex gap-3 items-center'>
        <div
          className={`text-sm border border-neutral-2 rounded-full p-1 w-8 h-8 flex items-center justify-center ${
            number === $currentStep ? 'text-black bg-blue-1' : 'text-neutral-2'
          }`}
        >
          {number}
        </div>
        <div className='hidden lg:inline-block'>
          <div className='font-light text-xs text-blue-2'>STEP {number}</div>
          <div className='uppercase text-sm font-medium text-neutral-2'>{name}</div>
        </div>
      </div>
    );
  };

  return (
    <div className='grid grid-cols-1 grid-rows-1'>
      <div className='z-0 col-start-1 row-start-1'>
        <BgSidebarMobile className='inline-block lg:hidden' />
        <BgSidebarDesktop className='hidden lg:inline-block' />
      </div>
      <div className='z-10 col-start-1 row-start-1 p-8 flex flex-row items-start lg:items-normal justify-center lg:justify-normal lg:flex-col gap-4 lg:gap-8'>
        {step(1, 'Your info')}
        {step(2, 'Select plan')}
        {step(3, 'Add-ons')}
        {step(4, 'Summary')}
      </div>
    </div>
  );
};
