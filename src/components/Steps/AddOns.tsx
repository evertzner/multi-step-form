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
    <div className={`${addOn.selected ? 'bg-red-200' : 'bg-transparent'}`} onClick={selectAddOn}>
      <input type='checkbox' name='selected' id='' checked={addOn.selected} onChange={() => {}} />
      <div>{addOn.name}</div>
      <div>{addOn.description}</div>
      <div>
        +${$monthlyPlan ? addOn.monthlyPrice : addOn.yearlyPrice}/{$monthlyPlan ? 'mo' : 'yr'}
      </div>
    </div>
  );
};

export const AddOns = () => {
  const $addOns = useStore(addOns);

  return (
    <div>
      {Object.entries($addOns).map(([key, value]) => {
        return <AddOn addOn={value} key={key} index={key} />;
      })}
    </div>
  );
};
