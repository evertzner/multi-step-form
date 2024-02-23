import { IconCheckmark } from '@/icons/IconCheckmark';
import { addOns, monthlyPlan, type IAddOns } from '@/store';
import { useStore } from '@nanostores/react';

type AddOnProps = {
  index: string;
  addOn: IAddOns;
};

const AddOn = ({ index, addOn }: AddOnProps) => {
  const $monthlyPlan = useStore(monthlyPlan);

  const selectAddOn = () => {
    addOns.setKey(index as keyof IAddOns, { ...addOn, selected: !addOn.selected });
  };

  return (
    <div
      className={`rounded-lg cursor-pointer px-5 py-4 flex gap-5 items-center hover:border-blue-3 ${addOn.selected ? 'bg-neutral-2 border border-blue-3' : 'bg-transparent border border-neutral-3'}`}
      onClick={selectAddOn}
    >
      <div>
        <input
          className='sr-only peer'
          type='checkbox'
          name='selected'
          id=''
          checked={addOn.selected}
          onChange={() => {}}
        />
        <div className='grid place-content-center border border-neutral-3 w-4 h-4 rounded-[4px] bg-transparent peer-checked:bg-blue-3 peer-checked:border-none'>
          <IconCheckmark className='w-[10px]' />
        </div>
      </div>
      <div>
        <div className='text-blue-4 text-sm'>{addOn.name}</div>
        <div className='text-neutral-4 text-xs font-light'>{addOn.description}</div>
      </div>
      <div className='text-blue-3 text-xs ml-auto'>
        +${$monthlyPlan ? addOn.monthlyPrice : addOn.yearlyPrice}/{$monthlyPlan ? 'mo' : 'yr'}
      </div>
    </div>
  );
};

export const AddOns = () => {
  const $addOns = useStore(addOns);

  return (
    <div className='flex flex-col gap-3'>
      {Object.entries($addOns).map(([key, value]) => {
        return <AddOn addOn={value} key={key} index={key} />;
      })}
    </div>
  );
};
