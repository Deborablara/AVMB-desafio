import { IEnvelope } from "../envelope/types";

export type APIData = Record<string, any>;

export type APIResponse = {
  status: number;
  data: any;
};


export type EnvelopeApiResponse = {
  status: number;
  data: IEnvelope;
};

