import { authOptions } from "@/lib/authConfig"


describe('Auth Configuration', () => {
  it('should have correct auth0 provider configuration', () => {
    expect(authOptions.providers).toBeDefined()
    expect(authOptions.providers.length).toBeGreaterThan(0)
    
    const auth0Provider = authOptions.providers.find(
      (provider: { id: string }) => provider.id === 'auth0'
    )
    
    expect(auth0Provider).toBeDefined()
  })

  it('should have JWT strategy configured', () => {
    expect(authOptions.session?.strategy).toBe('jwt')
  })

  it('should have callbacks defined', () => {
    expect(authOptions.callbacks).toBeDefined()
    expect(authOptions.callbacks?.jwt).toBeDefined()
    expect(authOptions.callbacks?.session).toBeDefined()
  })
})
