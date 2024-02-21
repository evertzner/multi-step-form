import { useStore } from '@nanostores/react';
import type { ReactNode } from 'react';
import { formValid, user, type IUser } from '../../store';

type InputProps = {
  value: string | null;
  type: string;
  name: string;
  placeholder: string;
};

const Input = ({ value, type, name, placeholder }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    user.setKey(name as keyof IUser, value);

    const isValid = !Object.values(user.get()).some((val) => val === null || val === '');
    formValid.set(isValid);
  };

  console.log(value);

  return (
    <input
      name={name}
      type={type}
      value={value ?? ''}
      onChange={handleChange}
      placeholder={placeholder}
      required
      className={`${
        value === '' && 'ring-1 ring-red-1'
      } ring-1 ring-neutral-3 rounded-md px-3 py-2 text-sm text-blue-4 focus:ring-1 focus:ring-blue-4 focus:outline-none`}
    />
  );
};

type LabelProps = {
  label: string;
};

const Label = ({ label }: LabelProps) => {
  return <div className='text-xs font-light text-blue-4'>{label}</div>;
};

const Required = () => {
  return <span className='text-red-1 font-bold text-xs'>This field is required</span>;
};

type LabelContainerProps = {
  children: ReactNode;
};

const LabelContainer = ({ children }: LabelContainerProps) => {
  return <div className='flex justify-between'>{children}</div>;
};

type InputControlProps = {
  children: ReactNode;
};

const InputControl = ({ children }: InputControlProps) => {
  return <div className='flex flex-col gap-1'>{children}</div>;
};

export const PersonalInformation = () => {
  const $user = useStore(user);

  console.log($user.name);

  return (
    <form className='flex flex-col gap-4'>
      <InputControl>
        <LabelContainer>
          <Label label='Name' />
          {$user.name === '' && <Required />}
        </LabelContainer>
        <Input name='name' type='text' value={$user.name} placeholder='e.g. Stephen King' />
      </InputControl>
      <InputControl>
        <LabelContainer>
          <Label label='Email Address' />
          {$user.email === '' && <Required />}
        </LabelContainer>
        <Input
          name='email'
          type='email'
          value={$user.email}
          placeholder='e.g. stephenking@lorem.com'
        />
      </InputControl>
      <InputControl>
        <LabelContainer>
          <Label label='Phone Number' />
          {$user.phone === '' && <Required />}
        </LabelContainer>
        <Input name='phone' type='text' value={$user.phone} placeholder='e.g. +123 456 789 0' />
      </InputControl>
    </form>
  );
};
