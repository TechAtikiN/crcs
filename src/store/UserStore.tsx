import { create } from 'zustand'

type UserStore = {
  user: 'ADMIN' | 'USER'
}
export const useUserStore = create<UserStore>((set, get) => ({
  user: 'ADMIN',
}))