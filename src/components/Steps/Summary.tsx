import { addOns, currentStep, monthlyPlan, plans, selectedPlan, type IAddOns } from '@/store';
import { useStore } from '@nanostores/react';

type AddOnProps = {
  addOn: IAddOns;
  monthly: boolean;
};

const AddOn = ({ addOn, monthly }: AddOnProps) => {
  return (
    <div className='flex justify-between'>
      <div className='text-neutral-4 font-light text-xs'>{addOn.name}</div>
      <div className='text-blue-4 text-xs'>
        +${monthly ? addOn.monthlyPrice + '/mo' : addOn.yearlyPrice + '/yr'}
      </div>
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
    <div className='flex flex-col gap-5'>
      <div className='bg-neutral-2 rounded-sm px-5 py-5 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <div className='text-blue-4 font-medium text-xs'>
              {$selectedPlan} ({$monthlyPlan ? 'Monthly' : 'Yearly'})
            </div>
            <button
              className='text-neutral-4 text-xs font-light underline hover:text-blue-3'
              onClick={changePlan}
            >
              Change
            </button>
          </div>
          <div className='text-blue-4 font-medium text-xs'>
            ${$monthlyPlan ? monthly + '/mo' : yearly + '/yr'}
          </div>
        </div>
        <hr />
        <div className='flex flex-col gap-2'>
          {Object.entries($addOns).map(([key, value]) => {
            if (value.selected) {
              total += $monthlyPlan ? value.monthlyPrice : value.yearlyPrice;
              return <AddOn key={key} addOn={value} monthly={$monthlyPlan} />;
            }
          })}
        </div>
      </div>
      <div className='flex justify-between px-5'>
        <div className='text-neutral-4 text-xs font-light'>
          Total (per {$monthlyPlan ? 'month' : 'year'})
        </div>
        <div className='text-blue-3 font-bold'>
          ${total}
          {$monthlyPlan ? '/mo' : '/yr'}
        </div>
      </div>
    </div>
  );
};
