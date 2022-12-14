import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

type ChildrenType = {children: React.ReactElement};

export const wrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: consose.error,
    },
  });

  return ({children}: ChildrenType) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

test.skip('skip', () => {});
