import { IBaseUser } from './base'

export interface IWorker extends IBaseUser {
  role: 'admin' | 'worker';
  specialization?: string;
  rating?: number;
  totalTransfers?: number;
  status?: 'Available' | 'Assigned' | 'OnTheWay';
}

export interface IWorkerUpdateData {
  name?: string
  email?: string
  phone?: string
  address?: string
  specialization?: string
  isAvailable?: boolean
  skills?: string[]
  certificates?: string[]
  experience?: number
  status?: 'Available' | 'Assigned' | 'OnTheWay';
}

export interface IWorkerStats {
  totalJobs: number
  completedJobs: number
  averageRating: number
  totalEarnings: number
  monthlyJobs: number[]
}

export interface IServiceRating {
  serviceId: string
  rating: number
  comment?: string
} 

export interface IWorkersStats {
  data: { totalWorkers: number; workersWithTransfers: number; availableWorkers: number; } | null;
  totalWorkers: number
  workersWithTransfers: number
  availableWorkers: number
}