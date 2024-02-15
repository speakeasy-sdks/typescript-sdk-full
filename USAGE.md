<!-- Start SDK Example Usage [usage] -->
```typescript
import { PGLatest } from "PG-Latest";

async function run() {
    const sdk = new PGLatest();

    const res = await sdk.tokenVault.deleteSpecificSavedInstrument({
        customerId: "<value>",
        instrumentId: "<value>",
        xClientId: "<value>",
        xClientSecret: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->