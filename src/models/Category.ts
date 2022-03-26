export type CategoryKey = 'home' | 'car' | 'food' | 'sell' | 'buy' | 'other';

export type Category = {
  key: CategoryKey;
  name: string;
  icon: string;
}
