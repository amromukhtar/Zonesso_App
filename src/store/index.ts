import { create } from 'zustand'

export const useAuth = create((set, get) => ({
    user: "",
    authenticated: false,
    setAuthenticated: (authenticated: boolean) => set((state: any) => ({ authenticated })),
}))

