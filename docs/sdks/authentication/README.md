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
import { OTPRequestAction } from "PG-Latest/dist/sdk/models/shared";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.authentication.otpRequest({
    otpRequest: {
      action: OTPRequestAction.SubmitOtp,
      otp: "<value>",
    },
    paymentId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.OTPRequestRequest](../../sdk/models/operations/otprequestrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.OTPRequestResponse](../../sdk/models/operations/otprequestresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
