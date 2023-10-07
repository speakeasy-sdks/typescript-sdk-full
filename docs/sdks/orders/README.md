# Orders
(*orders*)

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

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.orders.createOrder({
    createOrderBackendRequest: {
      customerDetails: {
        customerId: "North double",
        customerPhone: "spherical woman burdensome",
      },
      orderAmount: 10.15,
      orderCurrency: "INR",
      orderExpiryTime: "2021-07-29T00:00:00Z",
      orderMeta: {},
      orderNote: "Test order",
      orderSplits: [
        {},
      ],
      orderTags: {
        "temporibus": "SUV",
      },
      terminal: {
        terminalId: "overriding",
        terminalPhoneNo: "Southeast Southwest but",
        terminalType: "Recycled",
      },
    },
    xClientId: "Orchestrator",
    xClientSecret: "implement",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.orders.getOrder({
    orderId: "facilitate male Customer",
    xClientId: "lavender",
    xClientSecret: "concept phrasing Bicycle",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.orders.orderPay({
    orderPayRequest: {
      offerId: "faa6cc05-d1e2-401c-b0cf-0c9db3ff0f0b",
      paymentMethod: "candela",
      paymentSessionId: "session__CvcEmNKDkmERQrxnx39ibhJ3Ii034pjc8ZVxf3qcgEXCWlgDDlHRgz2XYZCqpajDQSXMMtCusPgOIxYP2LZx0-05p39gC2Vgmq1RAj--gcn",
    },
    xApiVersion: "compressing Islands Rap",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { AuthorizationRequestAction } from "PG-Latest/dist/sdk/models/shared";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.orders.preauthorization({
    authorizationRequest: {},
    orderId: "Clothing Celsius cum",
    xClientId: "browse than salmon",
    xClientSecret: "Cuban",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PreauthorizationRequest](../../models/operations/preauthorizationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PreauthorizationResponse](../../models/operations/preauthorizationresponse.md)>**

