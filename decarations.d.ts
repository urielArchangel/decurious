import event from "@/src/core/data/event.json";

export type ModelType = (typeof event)[0];

declare global {
  interface Window {
    ethereum: MetaMaskProvider;
  }
}

export interface UserJWTData {
  email: string;
  expiry:number
}

export interface IEventAdminModel{
  email:string
  passwordHash:string
  eventsKey:string[]

}