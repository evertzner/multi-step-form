import { atom, map } from 'nanostores';

export const currentStep = atom(1);

export const totalSteps: number = 5;

export const formValid = atom(false);

export interface IUser {
  name: string | null;
  email: string | null;
  phone: string | null;
}

export const user = map<IUser>({
  name: null,
  email: null,
  phone: null
});

export const monthlyPlan = atom(true);

export interface IPlanInfo {
  monthly: number;
  yearly: number;
}

export type PlanName = 'Arcade' | 'Advanced' | 'Pro';

export const plans: Record<PlanName, IPlanInfo> = {
  Arcade: { monthly: 9, yearly: 90 },
  Advanced: { monthly: 12, yearly: 120 },
  Pro: { monthly: 15, yearly: 150 }
};

export const selectedPlan = atom<PlanName>('Arcade');

export interface IAddOns {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  selected: boolean;
}

export const addOns = map<Record<string, IAddOns>>({
  1: {
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
    selected: true
  },
  2: {
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: true
  },
  3: {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: false
  }
});
