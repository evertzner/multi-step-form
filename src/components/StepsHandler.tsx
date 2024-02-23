import { useStore } from '@nanostores/react';
import { currentStep, formValid, totalSteps, user, type IUser } from '../store';
import { emailValdaiton } from '@/utils/emailValidation';

export const StepsHandler = () => {
  const $user = useStore(user);
  const $formValid = useStore(formValid);
  const $currentStep = useStore(currentStep);

  const next = () => {
    Object.entries($user).forEach(([name, value]) => {
      if (value === null) user.setKey(name as keyof IUser, '');
    });

    if ($user.email != null && $user.email != '') {
      if (!emailValdaiton($user.email)) return;
    }
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
    <div
      className={`bg-white lg:bg-transparent p-5 lg:p-0 -mx-5 lg:mx-0 flex ${$currentStep == 1 ? 'justify-end' : 'justify-between'}`}
    >
      {$currentStep > 1 && (
        <button onClick={previous} className='text-neutral-4 text-sm hover:text-blue-4'>
          Go Back
        </button>
      )}
      <button
        onClick={$currentStep < totalSteps - 1 ? next : confirm}
        className={`text-white text-sm px-6 py-3 rounded-lg transition-all ${
          $currentStep < totalSteps - 1 ? 'bg-blue-4 hover:bg-blue-3' : 'bg-blue-3 hover:bg-blue-2'
        }`}
      >
        {$currentStep < totalSteps - 1 ? 'Next Step' : 'Confirm'}
      </button>
    </div>
  );
};
