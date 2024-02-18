import { atom, map } from 'nanostores';

export const currentStep = atom(1);

export const totalSteps: number = 5;

export const formValid = atom(false);

export const user = map<Record<string, string | null>>({
  name: null,
  email: null,
  phone: null
});

export const monthlyPlan = atom(true);
