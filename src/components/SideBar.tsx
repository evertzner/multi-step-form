import { useStore } from '@nanostores/react';
import { currentStep } from '../store';

export const SideBar = () => {
  const $currentStep = useStore(currentStep);

  const step = (number: number, name: string) => {
    return (
      <div className='flex gap-3'>
        <div
          className={`border border-black rounded-full aspect-square ${
            number === $currentStep && 'bg-red-500'
          }`}
        >
          {number}
        </div>
        <div>
          <div>STEP {number}</div>
          <div className='uppercase'>{name}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {step(1, 'Your info')}
      {step(2, 'Select plan')}
      {step(3, 'Add-ons')}
      {step(4, 'Summary')}
    </div>
  );
};
