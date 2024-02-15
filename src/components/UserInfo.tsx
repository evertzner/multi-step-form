import { useStore } from '@nanostores/react';
import { currentStep } from '../store';
import { useState } from 'react';

export const UserInfo = () => {
  const $currentStep = useStore(currentStep);
  const [currStep, setCurrStep] = useState($currentStep);

  const addStep = () => {
    setCurrStep(currStep + 1);
  };

  const reduceStep = () => {
    setCurrStep(currStep - 1);
  };
  return (
    <>
      <div>{currStep}</div>
      <button onClick={reduceStep}>Reduce</button>
      <button onClick={addStep}>Add</button>
    </>
  );
};
