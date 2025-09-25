import { renderHook } from '@testing-library/react'
import { act } from 'react'
import { beforeEach, vi } from 'vitest'
import { localStorageMock, mockClassList } from '../vitest.setup'
import { useTheme } from './useTheme'

beforeEach(() => {
  vi.clearAllMocks()
})

test('initializes with light theme when no stored theme', () => {
  localStorageMock.getItem.mockReturnValue(null)

  const { result } = renderHook(() => useTheme())

  expect(result.current.theme).toBe('light')
  expect(localStorage.getItem).toHaveBeenCalledWith('theme')
  expect(mockClassList.toggle).toHaveBeenCalledWith('dark', false)
})

test('initializes with stored theme', () => {
  localStorageMock.getItem.mockReturnValue('dark')

  const { result } = renderHook(() => useTheme())

  expect(result.current.theme).toBe('dark')
  expect(mockClassList.toggle).toHaveBeenCalledWith('dark', true)
})

test('toggles from light to dark', () => {
  localStorageMock.getItem.mockReturnValue('light')

  const { result } = renderHook(() => useTheme())

  act(() => {
    result.current.toggleTheme()
  })

  expect(result.current.theme).toBe('dark')
  expect(mockClassList.toggle).toHaveBeenCalledWith('dark', true)
  expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
})

test('toggles from dark to light', () => {
  localStorageMock.getItem.mockReturnValue('dark')

  const { result } = renderHook(() => useTheme())

  act(() => {
    result.current.toggleTheme()
  })

  expect(result.current.theme).toBe('light')
  expect(mockClassList.toggle).toHaveBeenCalledWith('dark', false)
  expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light')
})
