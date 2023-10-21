<!-- Start SDK Example Usage -->


```typescript
import { PGLatest } from "PG-Latest";
import { OTPRequestAction } from "PG-Latest/dist/sdk/models/shared";

(async () => {
    const sdk = new PGLatest();

    const res = await sdk.authentication.otpRequest({
        otpRequest: {
            action: OTPRequestAction.SubmitOtp,
            otp: "string",
        },
        paymentId: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->