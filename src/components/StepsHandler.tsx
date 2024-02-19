import { useStore } from '@nanostores/react';
import { currentStep, formValid, totalSteps, user, type IUser } from '../store';

export const StepsHandler = () => {
  const $user = useStore(user);
  const $formValid = useStore(formValid);
  const $currentStep = useStore(currentStep);

  const next = () => {
    Object.entries($user).forEach(([name, value]) => {
      if (value === null) user.setKey(name as keyof IUser, '');
    });

    if (!$formValid) return;
    if ($currentStep < totalSteps - 1) currentStep.set($currentStep + 1);
  };

  const previous = () => {
    if ($currentStep > 1) currentStep.set($currentStep - 1);
  };

  const confirm = () => {
    if ($currentStep < totalSteps) currentStep.set($currentStep + 1);
  };

  if ($currentStep === totalSteps) return;

  return (
    <>
      {$currentStep > 1 && <button onClick={previous}>Go Back</button>}
      <button onClick={$currentStep < totalSteps - 1 ? next : confirm}>
        {$currentStep < totalSteps - 1 ? 'Next Step' : 'Confirm'}
      </button>
    </>
  );
};
