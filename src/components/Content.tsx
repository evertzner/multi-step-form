import { useStore } from '@nanostores/react';
import { currentStep, totalSteps } from '../store';
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
    <div>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};

export const Content = () => {
  const $currentStep = useStore(currentStep);

  interface IHeaders {
    [key: number]: HeaderProps;
  }

  const headers: IHeaders = {
    1: { title: '1', subtitle: '1Sub' },
    2: { title: '2', subtitle: '2Sub' },
    3: { title: '3', subtitle: '3Sub' },
    4: { title: '4', subtitle: '4Sub' },
    5: { title: '5', subtitle: '5Sub' }
  };

  const { title, subtitle } = headers[$currentStep];

  return (
    <>
      {$currentStep !== totalSteps && <Header title={title} subtitle={subtitle} />}
      <div>
        {$currentStep === 1 && <PersonalInformation />}
        {$currentStep === 2 && <Plans />}
        {$currentStep === 3 && <AddOns />}
        {$currentStep === 4 && <Summary />}
        {$currentStep === 5 && <ThankYou />}
      </div>
    </>
  );
};
