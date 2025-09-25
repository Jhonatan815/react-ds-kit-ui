import { vi } from 'vitest'

export const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

export const mockClassList = {
  toggle: vi.fn(),
}
Object.defineProperty(document, 'documentElement', {
  value: {
    classList: mockClassList,
  },
  writable: true,
})
