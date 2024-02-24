import { monthlyPlan, plans, selectedPlan, type IPlanInfo, type PlanName } from '@/store';
import { useStore } from '@nanostores/react';
import { IconArcade } from '@/icons/IconArcade';
import { IconAdvanced } from '@/icons/IconAdvanced';
import { IconPro } from '@/icons/IconPro';

type PlanProps = {
  planName: PlanName;
  planInfo: IPlanInfo;
};

const Plan = ({ planName, planInfo }: PlanProps) => {
  const $monthlyPlan = useStore(monthlyPlan);
  const $selectedPlan = useStore(selectedPlan);
  const { monthly, yearly } = planInfo;

  const selectPlan = () => {
    selectedPlan.set(planName);
  };

  return (
    <div
      className={`rounded-md px-4 py-3 flex lg:flex-col gap-4 lg:gap-10 hover:border-blue-3 cursor-pointer ${planName === $selectedPlan ? 'bg-neutral-2 border border-blue-3' : 'bg-transparent border border-neutral-3'}`}
      onClick={selectPlan}
    >
      {planName === 'Arcade' && <IconArcade className='lg:w-8' />}
      {planName === 'Advanced' && <IconAdvanced className='lg:w-8' />}
      {planName === 'Pro' && <IconPro className='lg:w-8' />}
      <div>
        <div className='lg:text-sm text-blue-4 font-medium mb-1'>{planName}</div>
        <div className='text-xs text-neutral-4 font-light'>
          ${$monthlyPlan ? monthly + '/mo' : yearly + '/yr'}
        </div>
        {!$monthlyPlan && <span className='text-xs text-blue-4'>2 months free</span>}
      </div>
    </div>
  );
};

type DurationProps = {
  text: string;
  monthly: boolean;
};

const Duration = ({ text, monthly }: DurationProps) => {
  return (
    <span className={`lg:text-xs font-medium ${monthly ? 'text-blue-4' : 'text-neutral-4'}`}>
      {text}
    </span>
  );
};

export const Plans = () => {
  const $monthlyPlan = useStore(monthlyPlan);

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col lg:grid lg:grid-cols-3 gap-3 lg:gap-4'>
        <Plan planName={'Arcade'} planInfo={plans.Arcade} />
        <Plan planName={'Advanced'} planInfo={plans.Advanced} />
        <Plan planName={'Pro'} planInfo={plans.Pro} />
      </div>
      <div className='bg-neutral-2 rounded-sm grid place-content-center'>
        <label className='flex justify-center h-full items-center mb-5 cursor-pointer gap-3'>
          <Duration text='Monthly' monthly={$monthlyPlan} />
          <input
            type='checkbox'
            checked={!monthlyPlan.get()}
            id='animate'
            className='sr-only peer'
            onChange={() => {
              monthlyPlan.set(!$monthlyPlan);
            }}
          />
          <div
            className="relative w-9 h-5 lg:w-7 lg:h-4 bg-gray-200 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
          peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
          after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
          after:h-4 after:w-4 lg:after:h-3 lg:after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          />
          <Duration text='Yearly' monthly={!$monthlyPlan} />
        </label>
      </div>
    </div>
  );
};
