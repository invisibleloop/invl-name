import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'invl',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
