import { AxiosError } from 'axios';
import api from './api';
import { IApiError, IApiResponse } from '@/models/api';
import { IUser, IUserUpdateData } from '@/models/user';

class UserService {
  async getCurrentUser(): Promise<IUser> {
    try {
      const response = await api.get<IApiResponse<IUser>>('/users/me');
      return response.data.data;
    } catch (error) {
      throw this.handleError(error as AxiosError<IApiError>);
    }
  }

  async updateUser(userData: IUserUpdateData): Promise<IUser> {
    try {
      const response = await api.put<IApiResponse<IUser>>('/users/update', userData);
      return response.data.data;
    } catch (error) {
      throw this.handleError(error as AxiosError<IApiError>);
    }
  }

  async getUsers(): Promise<IUser[] | { count: number; users: IUser[] }> {
    try {
      const response = await api.get<IApiResponse<{ count: number; users: IUser[] }>>('/users');
      return response.data.data;
    } catch (error) {
      throw this.handleError(error as AxiosError<IApiError>);
    }
  }

  async deleteUserByNameEmailAndPassword(name: string, password: string, email: string): Promise<void> {
    try {
      await api.delete(`/users/delete`, {
        data: { name, password, email }
      });
    } catch (error) {
      throw this.handleError(error as AxiosError<IApiError>);
    }
  }

  private handleError(error: AxiosError<IApiError>): Error {
    const message = error.response?.data?.message ?? error.message ?? 'An error occurred';
    return new Error(message);
  }
}

export const userService = new UserService(); 