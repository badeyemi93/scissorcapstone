import React, { Component } from 'react';

// Define the type for the state
type ErrorState = {
  hasEncounteredError: boolean;
};

// Define the type for the props
type ErrorProps = {
  children: React.ReactNode;
};

// ErrorBoundary component definition
class Boundary extends Component<ErrorProps, ErrorState> {
  // Initialize state
  state: ErrorState = {
    hasEncounteredError: false,
  };

  // Lifecycle method to update state before render if an error is caught
  static getDerivedStateFromError(error: Error): ErrorState {
    // Log the error for debugging purposes
    console.log('Caught an error during rendering:', error);

    // Update state so the next render will show the fallback UI
    return { hasEncounteredError: true };
  }

  // Lifecycle method to catch errors after render
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Caught an error:', error, info);
  }

  // Render method
  render() {
    // If there's an error, render fallback UI
    if (this.state.hasEncounteredError) {
      return <h1>Oops! Something went wrong.</h1>;
    }

    // Otherwise, render children normally
    return this.props.children;
  }
}

export default Boundary;
