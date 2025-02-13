# oleng-common-utils

## Installation

To install the package, run:

```bash
npm install oleng-common-utils
```

## Usage

### Using GenericContext and GenericProvider

1. Import `GenericProvider` and `useGenericContext` in your React component.

```javascript
import React from 'react';
import { GenericProvider, useGenericContext } from 'oleng-common-utils';
```

2. Wrap your component tree with `GenericProvider` and provide an initial state.

```javascript
const initialState = { key: 'value' };

function App() {
  return (
    <GenericProvider initialState={initialState}>
      <YourComponent />
    </GenericProvider>
  );
}
```

3. Use `useGenericContext` to access and update the state within your components.

```javascript
function YourComponent() {
  const { state, setState } = useGenericContext();

  const updateState = () => {
    setState({ ...state, key: 'newValue' });
  };

  return (
    <div>
      <p>{state.key}</p>
      <button onClick={updateState}>Update State</button>
    </div>
  );
}