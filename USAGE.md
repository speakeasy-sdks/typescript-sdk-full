<!-- Start SDK Example Usage -->


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
<!-- End SDK Example Usage -->