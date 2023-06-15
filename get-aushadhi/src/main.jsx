import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>

<BrowserRouter>


<Auth0Provider
     domain="dev-l0j2ielnakcusakq.us.auth0.com"
     clientId="xpAtZNGUm0glyfS6IxCCWuawDF0EDHBi"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
</BrowserRouter>

  </ChakraProvider>
)
