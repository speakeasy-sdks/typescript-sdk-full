# Offers
(*offers*)

### Available Operations

* [createOffer](#createoffer) - Create Offer
* [getOffer](#getoffer) - Get Offer by ID

## createOffer

Use this API to create offers with Cashfree from your backend

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";
import { CashbackType, DiscountType, OfferDetailsOfferType, OfferTncType } from "PG-Latest/dist/sdk/models/shared";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.offers.createOffer({
    createOfferBackendRequest: {
      offerDetails: {
        cashbackDetails: {
          cashbackType: CashbackType.Percentage,
          cashbackValue: "20",
          maxCashbackAmount: "150",
        },
        discountDetails: {
          discountType: DiscountType.Flat,
          discountValue: "10",
          maxDiscountAmount: "10",
        },
        offerType: OfferDetailsOfferType.DiscountAndCashback,
      },
      offerMeta: {
        offerCode: "CFTESTOFFER",
        offerDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        offerEndTime: "2023-03-29T08:09:51Z",
        offerStartTime: "2023-03-21T08:09:51Z",
        offerTitle: "Test Offer",
      },
      offerTnc: {
        offerTncType: OfferTncType.Post,
        offerTncValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      offerValidations: {
        maxAllowed: "10",
        minAmount: "1",
        paymentMethod: "<value>",
      },
    },
    xClientId: "<value>",
    xClientSecret: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateOfferRequest](../../sdk/models/operations/createofferrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateOfferResponse](../../sdk/models/operations/createofferresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getOffer

Use this API to get offer by offer_id

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

async function run() {
  const sdk = new PGLatest();

  const res = await sdk.offers.getOffer({
    offerId: "<value>",
    xClientId: "<value>",
    xClientSecret: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetOfferRequest](../../sdk/models/operations/getofferrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetOfferResponse](../../sdk/models/operations/getofferresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
