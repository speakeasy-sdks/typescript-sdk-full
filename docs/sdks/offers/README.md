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
import {
  CashbackDetailsCashbackType,
  DiscountDetailsDiscountType,
  OfferDetailsOfferType,
  OfferTncOfferTncType,
} from "PG-Latest/dist/sdk/models/shared";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.offers.createOffer({
    createOfferBackendRequest: {
      offerDetails: {
        cashbackDetails: {
          maxCashbackAmount: "string",
        },
        discountDetails: {
          discountType: DiscountDetailsDiscountType.Percentage,
          discountValue: "string",
          maxDiscountAmount: "string",
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
        offerTncType: OfferTncOfferTncType.Post,
        offerTncValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      offerValidations: {
        maxAllowed: "10",
        minAmount: "1",
        paymentMethod: "string",
      },
    },
    xClientId: "string",
    xClientSecret: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.CreateOfferRequest](../../models/operations/createofferrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateOfferResponse](../../models/operations/createofferresponse.md)>**


## getOffer

Use this API to get offer by offer_id

### Example Usage

```typescript
import { PGLatest } from "PG-Latest";

(async() => {
  const sdk = new PGLatest();

  const res = await sdk.offers.getOffer({
    offerId: "string",
    xClientId: "string",
    xClientSecret: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetOfferRequest](../../models/operations/getofferrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetOfferResponse](../../models/operations/getofferresponse.md)>**

