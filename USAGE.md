<!-- Start SDK Example Usage -->
```typescript
import { PGLatest } from "PG-Latest";

(async () => {
    const sdk = new PGLatest();

    const res = await sdk.tokenVault.deleteSpecificSavedInstrument({
        customerId: "string",
        instrumentId: "string",
        xClientId: "string",
        xClientSecret: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->