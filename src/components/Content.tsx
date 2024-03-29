import { currentStep, totalSteps } from '@/store';
import { useStore } from '@nanostores/react';
import { AddOns } from './Steps/AddOns';
import { PersonalInformation } from './Steps/PersonalInformation';
import { Plans } from './Steps/Plans';
import { Summary } from './Steps/Summary';
import { ThankYou } from './Steps/ThankYou';

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='font-bold text-2xl lg:text-3xl text-blue-4'>{title}</div>
      <p className='text-neutral-4 font-light text-lg lg:text-sm tracking-wide'>{subtitle}</p>
    </div>
  );
};

export const Content = () => {
  const $currentStep = useStore(currentStep);

  interface IHeaders {
    [key: number]: HeaderProps;
  }

  const headers: IHeaders = {
    1: {
      title: 'Personal info',
      subtitle: 'Please provide your name, email address and phone number.'
    },
    2: { title: 'Select your plan', subtitle: 'You have the option of monthly or yearly billing.' },
    3: { title: 'Pick add-ons', subtitle: 'Add-ons help enhance your gaming experience.' },
    4: { title: 'Finishing up', subtitle: 'Double-check everything looks OK before confirming.' },
    5: { title: '5', subtitle: '5Sub' }
  };

  const { title, subtitle } = headers[$currentStep];

  return (
    <div className='flex flex-col gap-5 lg:gap-8 lg:h-full bg-white p-7 lg:p-0 z-10 -mt-[100px] lg:mt-0 rounded-xl lg:rounded-none shadow-2xl shadow-neutral-3 lg:shadow-none'>
      {$currentStep !== totalSteps && <Header title={title} subtitle={subtitle} />}
      <div className='h-full grid'>
        {$currentStep === 1 && <PersonalInformation />}
        {$currentStep === 2 && <Plans />}
        {$currentStep === 3 && <AddOns />}
        {$currentStep === 4 && <Summary />}
        {$currentStep === 5 && <ThankYou />}
      </div>
    </div>
  );
};
