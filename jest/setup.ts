// jest/setup.ts
import '@testing-library/jest-dom';

import { TextDecoder, TextEncoder } from 'util'

// Mock global objects
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

// Mock next/navigation
const mockPush = jest.fn()
const mockReplace = jest.fn()
const mockBack = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockReplace,
    back: mockBack,
  }),
  usePathname: () => '/test-path',
  useSearchParams: () => new URLSearchParams(),
}))


jest.mock('next/server', () => ({
  NextRequest: class {},
}));


// Mock next-auth/react
const mockUseSession = jest.fn()
const mockSignIn = jest.fn()
const mockSignOut = jest.fn()


import '@testing-library/jest-dom';

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  return {
    ...originalModule,
    useSession: jest.fn(() => ({
      data: null,
      status: 'unauthenticated',
    })),
    signIn: jest.fn(),
    signOut: jest.fn(),
  };
});



// Mock next-auth/middleware
jest.mock('next-auth/middleware', () => {
  return jest.fn((req) => {
    // Mock middleware logic
    const pathname = new URL(req.url).pathname
    if (pathname.startsWith('/protected') && !req.headers.get('authorization')) {
      return Response.redirect(new URL('/login', req.url))
    }
    return undefined
  })
})

// Export mocks for use in tests
export { mockBack, mockPush, mockReplace, mockSignIn, mockSignOut, mockUseSession }
