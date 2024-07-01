import event from '@/src/core/data/event.json'


export type ModelType = typeof event[0]


declare global {
    interface Window {
      ethereum: MetaMaskProvider;
    }
  }