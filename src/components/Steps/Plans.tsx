import { useStore } from '@nanostores/react';
import { monthlyPlan } from '../../store';

export const Plans = () => {
  const $monthlyPlan = useStore(monthlyPlan);

  return (
    <div>
      <div>Arcade</div>
      <div>Advanced</div>
      <div>Pro</div>
      <div>
        <label className='inline-flex items-center mb-5 cursor-pointer'>
          <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>Monthly</span>
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
          <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>Yearly</span>
        </label>
      </div>
    </div>
  );
};
