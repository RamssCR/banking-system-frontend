import { Component, type ReactNode } from 'react'
import { ErrorPage } from '@shared/views/ErrorPage'

/**
 * A React error boundary component that catches JavaScript errors
 * anywhere in its child component tree, logs those errors,
 * and displays a fallback UI instead of the component tree that crashed.
 * @description
 * Since React 19 does not provide a built-in API for functional
 * components to act as error boundaries, we implement this class-based
 * component to handle errors gracefully.
 */
export class ErrorBoundary extends Component<{ children: ReactNode }> {
  state = { hasError: false }

  /**
   * Updates the state to indicate an error has occurred.
   * @returns An object with hasError set to true.
   */
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return <ErrorPage />
    return this.props.children
  }
}
