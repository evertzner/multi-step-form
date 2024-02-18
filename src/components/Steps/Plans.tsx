import { useStore } from '@nanostores/react';
import { monthlyPlan } from '../../store';

type DurationProps = {
  text: string;
  monthly: boolean;
};

const Duration = ({ text, monthly }: DurationProps) => {
  return (
    <span className={`text-sm font-bold ${monthly ? 'text-blue-700' : 'text-gray-700'}`}>
      {text}
    </span>
  );
};

export const Plans = () => {
  const $monthlyPlan = useStore(monthlyPlan);

  return (
    <div>
      <div>Arcade</div>
      <div>Advanced</div>
      <div>Pro</div>
      <div>
        <label className='inline-flex items-center mb-5 cursor-pointer gap-3'>
          <Duration text='Monthly' monthly={$monthlyPlan} />
          <input
            type='checkbox'
            value=''
            id='animate'
            className='sr-only peer'
            onChange={() => {
              monthlyPlan.set(!$monthlyPlan);
            }}
          />
          <div className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <Duration text='Yearly' monthly={!$monthlyPlan} />
        </label>
      </div>
    </div>
  );
};
