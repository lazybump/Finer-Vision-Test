export interface StepProps {
  toggle: (i: number) => void;
  selected: null | number;
}

export interface HeaderProps {
  title: string;
  id: number;
  toggle: (i: number) => void;
}

export interface SectionProps {
  id: number;
  selected: null | number;
}
