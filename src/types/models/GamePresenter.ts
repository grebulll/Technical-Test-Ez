export interface GamePresenter {
  id: string;
  name: string;
  shift: 'morning' | 'afternoon' | 'night';
}
