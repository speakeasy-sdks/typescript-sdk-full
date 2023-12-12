<!-- Start SDK Example Usage [usage] -->
```typescript
import { PGLatest } from "PG-Latest";

async function run() {
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
}

run();

```
<!-- End SDK Example Usage [usage] -->