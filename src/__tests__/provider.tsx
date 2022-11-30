import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

type ChildrenType = {children: React.ReactElement};

export const wrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({children}: ChildrenType) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
