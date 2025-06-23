import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'

// Mock App component
const MockApp = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading application...</div>
  }

  return (
    <div>
      <h1>My App</h1>
      {session ? (
        <div>
          <p>Welcome back, {session.user?.name}!</p>
          <p>Status: Authenticated</p>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <p>Status: Not authenticated</p>
        </div>
      )}
    </div>
  )
}

const mockUseSession = useSession as jest.MockedFunction<typeof useSession>

describe('Basic App Flow', () => {
  it('should show loading state initially', () => {
    mockUseSession.mockReturnValue({
      data: null,
      status: 'loading',
      update: jest.fn(),
    })

    render(<MockApp />)
    
    expect(screen.getByText('Loading application...')).toBeInTheDocument()
  })

  it('should show not authenticated message', () => {
    mockUseSession.mockReturnValue({
      data: null,
      status: 'unauthenticated',
      update: jest.fn(),
    })

    render(<MockApp />)
    
    expect(screen.getByText('Please sign in')).toBeInTheDocument()
    expect(screen.getByText('Status: Not authenticated')).toBeInTheDocument()
  })

  it('should show authenticated user info', () => {
    mockUseSession.mockReturnValue({
      data: {
          user: {
              name: 'Jane Doe',
              email: 'jane@example.com',
              id: '',
              role: 'user',
              permissions: []
          },
          expires: '2024-12-31',
          accessToken: ''
      },
      status: 'authenticated',
      update: jest.fn(),
    })

    render(<MockApp />)
    
    expect(screen.getByText('Welcome back, Jane Doe!')).toBeInTheDocument()
    expect(screen.getByText('Status: Authenticated')).toBeInTheDocument()
  })
})