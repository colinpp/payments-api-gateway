/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "merchant";

export interface FindOneData {
  id: number;
  name: string;
  cancelUrl: string;
  successUrl: string;
  failedUrl: string;
  siteCode: string;
}

export interface GetMerchantRequest {
  id: number;
}

export interface GetMerchantResponse {
  id: number;
  error: string[];
  data: FindOneData | undefined;
}

export const MERCHANT_PACKAGE_NAME = "merchant";

export interface MerchantServiceClient {
  getMerchant(request: GetMerchantRequest): Observable<GetMerchantResponse>;
}

export interface MerchantServiceController {
  getMerchant(
    request: GetMerchantRequest,
  ): Promise<GetMerchantResponse> | Observable<GetMerchantResponse> | GetMerchantResponse;
}

export function MerchantServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getMerchant"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("MerchantService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("MerchantService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const MERCHANT_SERVICE_NAME = "MerchantService";
