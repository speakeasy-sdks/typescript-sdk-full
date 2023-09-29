# Authentication
(*authentication*)

## Overview

The Authentication API allows merchants to show a native screen and capture OTP on their own page and submit to Cashfree. This feature is only available on request.

### Available Operations

* [otpRequest](#otprequest) - Submit or Resend OTP

## otpRequest

If you accept OTP on your own page, you can use the below API to send OTP to Cashfree.

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { OTPRequestResponse } from "PG-Latest/dist/sdk/models/operations";
import { OTPRequestAction } from "PG-Latest/dist/sdk/models/shared";

const sdk = new PGLatest();

sdk.authentication.otpRequest({
  otpRequest: {
    action: OTPRequestAction.SubmitOtp,
    otp: "Tricycle pace",
  },
  paymentId: "Nobelium Planner",
  xApiVersion: "babyish Toys",
}).then((res: OTPRequestResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.OTPRequestRequest](../../models/operations/otprequestrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.OTPRequestResponse](../../models/operations/otprequestresponse.md)>**

