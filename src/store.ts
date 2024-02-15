import { atom, map } from 'nanostores';

export const currentStep = atom(1);

export const user = map<Record<string, string | null>>({
  name: null,
  email: null,
  phone: null
});
