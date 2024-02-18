import { useStore } from '@nanostores/react';
import { formValid, user } from '../../store';

export const PersonalInformation = () => {
  const $user = useStore(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    user.setKey(name, value);

    const isValid = !Object.values(user.get()).some((val) => val === null || val === '');
    formValid.set(isValid);
  };

  return (
    <form>
      <div>
        <div>
          <span>Name</span>
          {$user.name === '' && (
            <span className='text-red-700 font-bold'>This field is required</span>
          )}
        </div>
        <input
          name='name'
          type='text'
          value={$user.name ?? ''}
          onChange={handleChange}
          placeholder='e.g. Stephen King'
          required
          className={$user.name === '' ? 'error' : ''}
        />
      </div>
      <div>
        <div>
          <span>Email Address</span>
          {$user.email === '' && (
            <span className='text-red-700 font-bold'>This field is required</span>
          )}
        </div>
        <input
          name='email'
          type='email'
          value={$user.email ?? ''}
          onChange={handleChange}
          placeholder='e.g. stephenking@lorem.com'
          required
          className={$user.email === '' ? 'error' : ''}
        />
      </div>
      <div>
        <div>
          <span>Phone</span>
          {$user.phone === '' && (
            <span className='text-red-700 font-bold'>This field is required</span>
          )}
        </div>
        <input
          name='phone'
          type='text'
          value={$user.phone ?? ''}
          onChange={handleChange}
          placeholder='e.g. +123 456 789 0'
          required
          className={$user.phone === '' ? 'error' : ''}
        />
      </div>
    </form>
  );
};
