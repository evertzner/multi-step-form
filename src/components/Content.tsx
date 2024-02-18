import { useStore } from '@nanostores/react';
import { currentStep } from '../store';
import { PersonalInformation } from './Steps/PersonalInformation';
import { Plans } from './Steps/Plans';
import { AddOns } from './Steps/AddOns';
import { Summary } from './Steps/Summary';
import { ThankYou } from './Steps/ThankYou';

export const Content = () => {
  const $currentStep = useStore(currentStep);

  return (
    <>
      {$currentStep === 1 && <PersonalInformation />}
      {$currentStep === 2 && <Plans />}
      {$currentStep === 3 && <AddOns />}
      {$currentStep === 4 && <Summary />}
      {$currentStep === 5 && <ThankYou />}
    </>
  );
};
