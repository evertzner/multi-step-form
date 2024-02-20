import { useStore } from '@nanostores/react';
import { addOns, currentStep, monthlyPlan, plans, selectedPlan, type IAddOns } from '../../store';

type AddOnProps = {
  addOn: IAddOns;
  monthly: boolean;
};

const AddOn = ({ addOn, monthly }: AddOnProps) => {
  return (
    <div>
      <div>{addOn.name}</div>
      <div>+${monthly ? addOn.monthlyPrice + '/mo' : addOn.yearlyPrice + '/yr'}</div>
    </div>
  );
};

export const Summary = () => {
  const $selectedPlan = useStore(selectedPlan);
  const $monthlyPlan = useStore(monthlyPlan);
  const $addOns = useStore(addOns);
  const { monthly, yearly } = plans[$selectedPlan];

  const changePlan = () => {
    currentStep.set(2);
  };

  let total: number = 0;
  total += $monthlyPlan ? monthly : yearly;

  return (
    <div>
      <div>
        <div>
          {$selectedPlan} ({$monthlyPlan ? 'Monthly' : 'Yearly'})
        </div>
        <div>${$monthlyPlan ? monthly + '/mo' : yearly + '/yr'}</div>
        <button onClick={changePlan}>Change</button>
      </div>
      {Object.entries($addOns).map(([key, value]) => {
        if (value.selected) {
          total += $monthlyPlan ? value.monthlyPrice : value.yearlyPrice;
          return <AddOn key={key} addOn={value} monthly={$monthlyPlan} />;
        }
      })}
      <div>
        <div>Total (per {$monthlyPlan ? 'month' : 'year'})</div>
        <div>
          {total}
          {$monthlyPlan ? '/mo' : '/yr'}
        </div>
      </div>
    </div>
  );
};
