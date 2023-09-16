# Orders

### Available Operations

* [createOrder](#createorder) - Create Order
* [getOrder](#getorder) - Get Order
* [orderPay](#orderpay) - Order Pay
* [preauthorization](#preauthorization) - Preauthorization

## createOrder

Use this API to create orders with Cashfree from your backend and get the payment link. To use this API S2S flag needs to be enabled from the backend. In case you want to use the cards payment option the PCI DSS flag is required, for more information email us at "care@cashfree.com".

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { CreateOrderResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.orders.createOrder({
  createOrderBackendRequest: {
    customerDetails: {
      customerBankAccountNumber: "ipsam",
      customerBankCode: "repellendus",
      customerBankIfsc: "sapiente",
      customerEmail: "quo",
      customerId: "odit",
      customerPhone: "at",
    },
    orderAmount: 10.15,
    orderCurrency: "INR",
    orderExpiryTime: "2021-07-29T00:00:00Z",
    orderId: "at",
    orderMeta: {
      notifyUrl: "maiores",
      paymentMethods: "molestiae",
      returnUrl: "quod",
    },
    orderNote: "Test order",
    orderSplits: [
      {
        amount: 8009.11,
        percentage: 4614.79,
        vendorId: "totam",
      },
    ],
    orderTags: {
      "porro": "dolorum",
    },
    terminal: {
      terminalId: "dicta",
      terminalPhoneNo: "nam",
      terminalType: "officia",
    },
  },
  xApiVersion: "occaecati",
  xClientId: "fugit",
  xClientSecret: "deleniti",
}).then((res: CreateOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.CreateOrderRequest](../../models/operations/createorderrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateOrderResponse](../../models/operations/createorderresponse.md)>**


## getOrder

Use this API to view all details of an order.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { GetOrderResponse } from "PG-Latest/dist/sdk/models/operations";

const sdk = new PGLatest();

sdk.orders.getOrder({
  orderId: "hic",
  xApiVersion: "optio",
  xClientId: "totam",
  xClientSecret: "beatae",
}).then((res: GetOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetOrderRequest](../../models/operations/getorderrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetOrderResponse](../../models/operations/getorderresponse.md)>**


## orderPay

Use this API when you have already created the orders and want Cashfree to process the payment. To use this API S2S flag needs to be enabled from the backend. In case you want to use the cards payment option the PCI DSS flag is required, for more information send an email to "care@cashfree.com".

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { OrderPayResponse } from "PG-Latest/dist/sdk/models/operations";
import {
  AppProvider,
  CardCardBankName,
  CardChannel,
  CardEMICardBankName,
  CardlessEMIProvider,
  PaylaterProvider,
  UpiChannel,
} from "PG-Latest/dist/sdk/models/shared";

const sdk = new PGLatest();

sdk.orders.orderPay({
  orderPayRequest: {
    offerId: "faa6cc05-d1e2-401c-b0cf-0c9db3ff0f0b",
    paymentMethod: {
      netbanking: {
        channel: "molestiae",
        netbankingBankCode: 264555,
      },
    },
    paymentSessionId: "session__CvcEmNKDkmERQrxnx39ibhJ3Ii034pjc8ZVxf3qcgEXCWlgDDlHRgz2XYZCqpajDQSXMMtCusPgOIxYP2LZx0-05p39gC2Vgmq1RAj--gcn",
    saveInstrument: false,
  },
  xApiVersion: "qui",
}).then((res: OrderPayResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.OrderPayRequest](../../models/operations/orderpayrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.OrderPayResponse](../../models/operations/orderpayresponse.md)>**


## preauthorization

Use this API to capture or void a preauthorized payment

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { PreauthorizationResponse } from "PG-Latest/dist/sdk/models/operations";
import { AuthorizationRequestAction } from "PG-Latest/dist/sdk/models/shared";

const sdk = new PGLatest();

sdk.orders.preauthorization({
  authorizationRequest: {
    action: AuthorizationRequestAction.Void,
    amount: 7369.18,
  },
  orderId: "esse",
  xApiVersion: "ipsum",
  xClientId: "excepturi",
  xClientSecret: "aspernatur",
}).then((res: PreauthorizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PreauthorizationRequest](../../models/operations/preauthorizationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PreauthorizationResponse](../../models/operations/preauthorizationresponse.md)>**

