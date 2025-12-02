export type ViewState = 'dashboard' | 'vehicles' | 'food' | 'documents' | 'stats' | 'settings';

export interface Vehicle {
  id: string;
  name: string;
  model: string;
  year: number;
  km: number;
  nextServiceDate: string;
  image: string;
  status: 'ok' | 'warning' | 'critical';
}

export interface FoodItem {
  id: string;
  name: string;
  category: 'Fridge' | 'Pantry' | 'Freezer';
  quantity: number;
  unit: string;
  expiryDate: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: 'pdf' | 'img' | 'doc';
  size: string;
  dateAdded: string;
  tags: string[];
}

export interface StatMetric {
  label: string;
  value: string | number;
  change?: number; // percentage
  trend: 'up' | 'down' | 'neutral';
}
