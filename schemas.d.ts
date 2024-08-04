declare const GetOrderByOrderId: {
  readonly metadata: {
      readonly allOf: readonly [{
          readonly type: "object";
          readonly properties: {
              readonly orderId: {
                  readonly type: "string";
                  readonly default: "YOUR_CUSTOMER_ORDER_ID";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "User order ID";
              };
          };
          readonly required: readonly ["orderId"];
      }, {
          readonly type: "object";
          readonly properties: {
              readonly "access-token": {
                  readonly type: "string";
                  readonly default: "YOUR_ACCESS_TOKEN";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "Your Access Token, you can generate one using our [Refresh Token](ref:refresh-access-token) endpoint";
              };
          };
          readonly required: readonly ["access-token"];
      }];
  };
  readonly response: {
      readonly "200": {
          readonly type: "object";
          readonly properties: {
              readonly meta: {
                  readonly type: "object";
                  readonly properties: {
                      readonly orderId: {
                          readonly type: "string";
                          readonly examples: readonly ["cd09b401-a036-462e-d09b4-cd09b401"];
                      };
                  };
              };
              readonly data: {
                  readonly type: "object";
                  readonly properties: {
                      readonly id: {
                          readonly type: "string";
                          readonly examples: readonly ["cd09b401-a036-462e-d09b4-cd09b401"];
                      };
                      readonly walletAddress: {
                          readonly type: "string";
                          readonly examples: readonly ["0x000389830900e9000000wd000"];
                      };
                      readonly createdAt: {
                          readonly type: "string";
                          readonly examples: readonly ["2021-06-26T04:17:08.892Z"];
                      };
                      readonly status: {
                          readonly type: "string";
                          readonly examples: readonly ["EXPIRED"];
                      };
                      readonly fiatCurrency: {
                          readonly type: "string";
                          readonly examples: readonly ["USD"];
                      };
                      readonly cryptoCurrency: {
                          readonly type: "string";
                          readonly examples: readonly ["ETH"];
                      };
                      readonly isBuyOrSell: {
                          readonly type: "string";
                          readonly examples: readonly ["BUY"];
                      };
                      readonly fiatAmount: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [100];
                      };
                      readonly walletLink: {
                          readonly type: "string";
                          readonly examples: readonly ["https://kovan.etherscan.io/address/0x000389830900e9000000wd000"];
                      };
                      readonly paymentOptionId: {
                          readonly type: "string";
                          readonly examples: readonly ["credit_debit_card"];
                      };
                      readonly quoteId: {
                          readonly type: "string";
                          readonly examples: readonly ["9876543-abcd-0078-kgfd-12345678890"];
                      };
                      readonly addressAdditionalData: {
                          readonly type: "boolean";
                          readonly default: true;
                          readonly examples: readonly [false];
                      };
                      readonly network: {
                          readonly type: "string";
                          readonly examples: readonly ["ethereum"];
                      };
                      readonly cryptocurrency: {
                          readonly type: "string";
                          readonly examples: readonly ["ETH"];
                      };
                      readonly amountPaid: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [0];
                      };
                      readonly referenceCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [458883];
                      };
                      readonly conversionPrice: {
                          readonly type: "number";
                          readonly default: 0;
                          readonly examples: readonly [0.0005205222853619762];
                      };
                      readonly cryptoAmount: {
                          readonly type: "number";
                          readonly default: 0;
                          readonly examples: readonly [0.04244859];
                      };
                      readonly totalFeeInFiat: {
                          readonly type: "number";
                          readonly default: 0;
                          readonly examples: readonly [18.45];
                      };
                      readonly fiatAmountInUsd: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [100];
                      };
                      readonly paymentOptions: {
                          readonly type: "array";
                          readonly items: {};
                      };
                      readonly autoExpiresAt: {
                          readonly type: "string";
                          readonly examples: readonly ["2021-06-26T05:02:08+00:00"];
                      };
                      readonly fromWalletAddress: {
                          readonly type: "boolean";
                          readonly default: true;
                          readonly examples: readonly [false];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "400": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [400];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Bad Request"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Order not found"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "401": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [401];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Unauthorized"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Authorization Required"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
  };
};
declare const GetOrders: {
  readonly metadata: {
      readonly allOf: readonly [{
          readonly type: "object";
          readonly properties: {
              readonly limit: {
                  readonly type: "integer";
                  readonly format: "int32";
                  readonly default: 100;
                  readonly minimum: -2147483648;
                  readonly maximum: 2147483647;
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "limits the number of records returned";
              };
              readonly skip: {
                  readonly type: "integer";
                  readonly format: "int32";
                  readonly default: 0;
                  readonly minimum: -2147483648;
                  readonly maximum: 2147483647;
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "skip omits the specified number of returned records";
              };
              readonly startDate: {
                  readonly type: "string";
                  readonly default: "2022-08-01";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "startDate in YYYY-MM-DD format";
              };
              readonly endDate: {
                  readonly type: "string";
                  readonly default: "2022-09-01";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "endDate in YYYY-MM-DD format";
              };
              readonly "filter[productsAvailed]": {
                  readonly type: "array";
                  readonly items: {
                      readonly type: "string";
                  };
                  readonly default: readonly ["[\"BUY\"]"];
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "products availed i.e., BUY or SELL";
              };
              readonly "filter[status]": {
                  readonly type: "string";
                  readonly default: "COMPLETED";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "order status filter";
              };
              readonly "filter[sortOrder]": {
                  readonly type: "string";
                  readonly default: "desc";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "sort order by which you want your orders either desc or asc";
              };
              readonly "filter[walletAddress]": {
                  readonly type: "string";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "filter orders based on a wallet address";
              };
          };
          readonly required: readonly ["startDate", "endDate"];
      }, {
          readonly type: "object";
          readonly properties: {
              readonly "access-token": {
                  readonly type: "string";
                  readonly default: "YOUR_ACCESS_TOKEN";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "Your Access Token, you can generate one using our [Refresh Token](ref:refresh-access-token) endpoint";
              };
          };
          readonly required: readonly ["access-token"];
      }];
  };
  readonly response: {
      readonly "200": {
          readonly oneOf: readonly [{
              readonly title: "Buy Order";
              readonly type: "object";
              readonly properties: {
                  readonly meta: {
                      readonly type: "object";
                      readonly properties: {
                          readonly startDate: {
                              readonly type: "string";
                              readonly examples: readonly ["2022-06-02"];
                          };
                          readonly endDate: {
                              readonly type: "string";
                              readonly examples: readonly ["2022-06-03"];
                          };
                          readonly limit: {
                              readonly type: "integer";
                              readonly default: 0;
                              readonly examples: readonly [100];
                          };
                          readonly skip: {
                              readonly type: "integer";
                              readonly default: 0;
                              readonly examples: readonly [0];
                          };
                          readonly filter: {
                              readonly type: "object";
                              readonly properties: {
                                  readonly productsAvailed: {
                                      readonly type: "array";
                                      readonly items: {
                                          readonly type: "string";
                                          readonly examples: readonly ["BUY"];
                                      };
                                  };
                              };
                          };
                          readonly totalCount: {
                              readonly type: "integer";
                              readonly default: 0;
                              readonly examples: readonly [1];
                          };
                      };
                  };
                  readonly data: {
                      readonly type: "array";
                      readonly items: {
                          readonly type: "object";
                          readonly properties: {
                              readonly _id: {
                                  readonly type: "string";
                                  readonly examples: readonly ["1f7e08fe-5d94-4075-aa1f-ab438b7d69b3"];
                              };
                              readonly walletAddress: {
                                  readonly type: "string";
                                  readonly examples: readonly ["0x5565b2a44d8A52fF6b3447e9FaA8561D5c506B10"];
                              };
                              readonly createdAt: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-06-03T07:07:13.036Z"];
                              };
                              readonly status: {
                                  readonly type: "string";
                                  readonly examples: readonly ["ON_HOLD_PENDING_DELIVERY_FROM_TRANSAK"];
                              };
                              readonly fiatCurrency: {
                                  readonly type: "string";
                                  readonly examples: readonly ["GBP"];
                              };
                              readonly userId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["41c49da2-c3fc-4b7e-827d-4422634d10cc"];
                              };
                              readonly cryptoCurrency: {
                                  readonly type: "string";
                                  readonly examples: readonly ["ETH"];
                              };
                              readonly isBuyOrSell: {
                                  readonly type: "string";
                                  readonly examples: readonly ["BUY"];
                              };
                              readonly fiatAmount: {
                                  readonly type: "integer";
                                  readonly default: 0;
                                  readonly examples: readonly [76];
                              };
                              readonly dispute: {
                                  readonly type: "boolean";
                                  readonly default: true;
                                  readonly examples: readonly [false];
                              };
                              readonly amountPaid: {
                                  readonly type: "integer";
                                  readonly default: 0;
                                  readonly examples: readonly [76];
                              };
                              readonly paymentOptionId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["credit_debit_card"];
                              };
                              readonly walletLink: {
                                  readonly type: "string";
                                  readonly examples: readonly ["https://kovan.etherscan.io/address/0x5565b2a44d8A52fF6b3447e9FaA8561D5c506B10"];
                              };
                              readonly quoteId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["df329dfe-a763-4fd7-b717-3450becb610a"];
                              };
                              readonly addressAdditionalData: {
                                  readonly type: "boolean";
                                  readonly default: true;
                                  readonly examples: readonly [false];
                              };
                              readonly network: {
                                  readonly type: "string";
                                  readonly examples: readonly ["polygon"];
                              };
                              readonly appVersionName: {
                                  readonly type: "string";
                                  readonly examples: readonly ["local-development"];
                              };
                              readonly conversionPrice: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [0.000691333244110728];
                              };
                              readonly cryptoAmount: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [0.05101348];
                              };
                              readonly totalFeeInFiat: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [2.21];
                              };
                              readonly totalfeeDecimal: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [0.0290789473684211];
                              };
                              readonly fiatAmountInUsd: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [95.51];
                              };
                              readonly referenceCode: {
                                  readonly type: "integer";
                                  readonly default: 0;
                                  readonly examples: readonly [128916];
                              };
                              readonly paymentOptions: {
                                  readonly type: "array";
                                  readonly items: {};
                              };
                              readonly fromWalletAddress: {
                                  readonly type: "string";
                                  readonly examples: readonly ["0x085ee67132ec4297b85ed5d1b4c65424d36fda7d"];
                              };
                              readonly isPaymentProcessing: {
                                  readonly type: "boolean";
                                  readonly default: true;
                                  readonly examples: readonly [false];
                              };
                              readonly autoExpiresAt: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-06-03T07:52:13+00:00"];
                              };
                              readonly partnerApiKey: {
                                  readonly type: "string";
                                  readonly examples: readonly ["69feba7f-a1c2-4cfa-a9bd-43072768b0e6"];
                              };
                              readonly liquidityProvider: {
                                  readonly type: "string";
                                  readonly examples: readonly ["CHECKOUT"];
                              };
                              readonly id: {
                                  readonly type: "string";
                                  readonly examples: readonly ["1f7e08fe-5d94-4075-aa1f-ab438b7d69b3"];
                              };
                              readonly slackThreadId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["1654240034.663239"];
                              };
                              readonly statusHistories: {
                                  readonly type: "array";
                                  readonly items: {
                                      readonly type: "object";
                                      readonly properties: {
                                          readonly status: {
                                              readonly type: "string";
                                              readonly examples: readonly ["AWAITING_PAYMENT_FROM_USER"];
                                          };
                                          readonly createdAt: {
                                              readonly type: "string";
                                              readonly examples: readonly ["2022-06-03T07:07:14.772Z"];
                                          };
                                          readonly message: {
                                              readonly type: "string";
                                              readonly examples: readonly ["*📦 New order by Test Test* \n*Order Id:* 1f7e08fe-5d94-4075-aa1f-ab438b7d69b3\n*Email:* atharvakale01+test1@gmail.com\n*Crypto Amount:* 0.05101348 ETH\n*Fiat Amount:* 76 GBP\n*Payment Method:*  credit_debit_card\n*Liquidity Provider*  CHECKOUT\n*Wallet Address:* 0x5565b2a44d8A52fF6b3447e9FaA8561D5c506B10\n*Reference Code:* 128916 \n*Partner name:* TransakLegend"];
                                          };
                                          readonly isEmailSentToUser: {
                                              readonly type: "boolean";
                                              readonly default: true;
                                              readonly examples: readonly [false];
                                          };
                                          readonly partnerEventId: {
                                              readonly type: "string";
                                              readonly examples: readonly ["ORDER_CREATED"];
                                          };
                                      };
                                  };
                              };
                              readonly paymentTnxId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["6299b3215124d567cfca5725"];
                              };
                              readonly paymentdateTime: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-06-03T07:26:37.832Z"];
                              };
                              readonly partnerFeeInUsd: {
                                  readonly type: "string";
                                  readonly examples: readonly ["1.37"];
                              };
                              readonly partnerFeeDecimal: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [0.0143421052631579];
                              };
                          };
                      };
                  };
              };
          }, {
              readonly title: "Sell Order";
              readonly type: "object";
              readonly properties: {
                  readonly meta: {
                      readonly type: "object";
                      readonly properties: {
                          readonly startDate: {
                              readonly type: "string";
                              readonly examples: readonly ["2022-06-22"];
                          };
                          readonly endDate: {
                              readonly type: "string";
                              readonly examples: readonly ["2022-07-22"];
                          };
                          readonly limit: {
                              readonly type: "integer";
                              readonly default: 0;
                              readonly examples: readonly [100];
                          };
                          readonly skip: {
                              readonly type: "integer";
                              readonly default: 0;
                              readonly examples: readonly [0];
                          };
                          readonly filter: {
                              readonly type: "object";
                              readonly properties: {
                                  readonly productsAvailed: {
                                      readonly type: "array";
                                      readonly items: {
                                          readonly type: "string";
                                          readonly examples: readonly ["SELL"];
                                      };
                                  };
                              };
                          };
                          readonly totalCount: {
                              readonly type: "integer";
                              readonly default: 0;
                              readonly examples: readonly [1];
                          };
                      };
                  };
                  readonly data: {
                      readonly type: "array";
                      readonly items: {
                          readonly type: "object";
                          readonly properties: {
                              readonly _id: {
                                  readonly type: "string";
                                  readonly examples: readonly ["335f43f0-8152-43ae-b364-c3a16d67d71c"];
                              };
                              readonly createdAt: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-07-04T13:03:47.985Z"];
                              };
                              readonly status: {
                                  readonly type: "string";
                                  readonly examples: readonly ["COMPLETED"];
                              };
                              readonly fiatCurrency: {
                                  readonly type: "string";
                                  readonly examples: readonly ["EUR"];
                              };
                              readonly userId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["7031ada0-2a23-42d2-94b8-62ddf3920b67"];
                              };
                              readonly cryptoCurrency: {
                                  readonly type: "string";
                                  readonly examples: readonly ["ETH"];
                              };
                              readonly isBuyOrSell: {
                                  readonly type: "string";
                                  readonly examples: readonly ["SELL"];
                              };
                              readonly fiatAmount: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [69.29];
                              };
                              readonly dispute: {
                                  readonly type: "boolean";
                                  readonly default: true;
                                  readonly examples: readonly [false];
                              };
                              readonly amountPaid: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [69.29];
                              };
                              readonly paymentOptionId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["sepa_bank_transfer"];
                              };
                              readonly quoteId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["5e822839-cef5-4a11-a90b-398f40326105"];
                              };
                              readonly bankId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["246aadfc-e06e-4f7c-9e54-302679f39688"];
                              };
                              readonly addressAdditionalData: {
                                  readonly type: "boolean";
                                  readonly default: true;
                                  readonly examples: readonly [false];
                              };
                              readonly network: {
                                  readonly type: "string";
                                  readonly examples: readonly ["ethereum"];
                              };
                              readonly appVersionName: {
                                  readonly type: "string";
                                  readonly examples: readonly ["production-api"];
                              };
                              readonly conversionPrice: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [0.000947751912890039];
                              };
                              readonly cryptoAmount: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [0.07];
                              };
                              readonly totalFeeInFiat: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [4.57];
                              };
                              readonly totalfeeDecimal: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [0.0618746605986782];
                              };
                              readonly fiatAmountInUsd: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [72.12];
                              };
                              readonly referenceCode: {
                                  readonly type: "integer";
                                  readonly default: 0;
                                  readonly examples: readonly [976899];
                              };
                              readonly paymentOptions: {
                                  readonly type: "array";
                                  readonly items: {};
                              };
                              readonly isPaymentProcessing: {
                                  readonly type: "boolean";
                                  readonly default: true;
                                  readonly examples: readonly [false];
                              };
                              readonly autoExpiresAt: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-07-04T14:03:47+00:00"];
                              };
                              readonly partnerApiKey: {
                                  readonly type: "string";
                                  readonly examples: readonly ["02624956-010b-4775-8e31-7b9c8b82df76"];
                              };
                              readonly cryptoPaymentData: {
                                  readonly type: "object";
                                  readonly properties: {
                                      readonly paymentAddress: {
                                          readonly type: "string";
                                          readonly examples: readonly ["0x71Cf091896A79772Ea9A0BC4c11CE9138e0f82aB"];
                                      };
                                      readonly address: {
                                          readonly type: "string";
                                          readonly examples: readonly ["0x71Cf091896A79772Ea9A0BC4c11CE9138e0f82aB"];
                                      };
                                      readonly cryptoAmountPaid: {
                                          readonly type: "number";
                                          readonly default: 0;
                                          readonly examples: readonly [0.06];
                                      };
                                  };
                              };
                              readonly bankAccountDetails: {
                                  readonly type: "object";
                                  readonly properties: {
                                      readonly id: {
                                          readonly type: "string";
                                          readonly examples: readonly ["246aadfc-e06e-4f7c-9e54-302679f39688"];
                                      };
                                      readonly createdAt: {
                                          readonly type: "string";
                                          readonly examples: readonly ["2022-06-15T08:42:06.439Z"];
                                      };
                                      readonly userId: {
                                          readonly type: "string";
                                          readonly examples: readonly ["7031ada0-2a23-42d2-94b8-62ddf3920b67"];
                                      };
                                      readonly detailsType: {
                                          readonly type: "string";
                                          readonly examples: readonly ["iban"];
                                      };
                                      readonly isVerified: {
                                          readonly type: "boolean";
                                          readonly default: true;
                                          readonly examples: readonly [false];
                                      };
                                      readonly iban: {
                                          readonly type: "string";
                                          readonly examples: readonly ["IT60*******************3456"];
                                      };
                                  };
                              };
                              readonly id: {
                                  readonly type: "string";
                                  readonly examples: readonly ["335f43f0-8152-43ae-b364-c3a16d67d71c"];
                              };
                              readonly slackThreadId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["1656939831.053709"];
                              };
                              readonly statusHistories: {
                                  readonly type: "array";
                                  readonly items: {
                                      readonly type: "object";
                                      readonly properties: {
                                          readonly status: {
                                              readonly type: "string";
                                              readonly examples: readonly ["AWAITING_PAYMENT_FROM_USER"];
                                          };
                                          readonly createdAt: {
                                              readonly type: "string";
                                              readonly examples: readonly ["2022-07-04T13:03:51.120Z"];
                                          };
                                          readonly message: {
                                              readonly type: "string";
                                              readonly examples: readonly ["*📦 New sell order by wer wer* \n*Order Id:* 335f43f0-8152-43ae-b364-c3a16d67d71c\n*Email:* amitrath+test1@transak.com\n*Crypto Amount:* 0.07 ETH\n*Fiat Amount:* 69.29 EUR\n*Payment Method:* sepa_bank_transfer\n*Wallet Address:* 0x71Cf091896A79772Ea9A0BC4c11CE9138e0f82aB \n*Partner name:* TransakLegend"];
                                          };
                                          readonly isEmailSentToUser: {
                                              readonly type: "boolean";
                                              readonly default: true;
                                              readonly examples: readonly [true];
                                          };
                                          readonly partnerEventId: {
                                              readonly type: "string";
                                              readonly examples: readonly ["ORDER_CREATED"];
                                          };
                                      };
                                  };
                              };
                              readonly liquidityProviderData: {
                                  readonly type: "string";
                                  readonly examples: readonly ["Modulr"];
                              };
                              readonly paymentMarkedAt: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-07-04T13:03:54.520Z"];
                              };
                              readonly paymentTnxId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["8514b072-934b-4a18-9d2d-eecff8b0f9a1"];
                              };
                              readonly paymentdateTime: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-07-04T13:03:54.520Z"];
                              };
                              readonly paymentProcessingAt: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-07-04T13:03:59.894Z"];
                              };
                              readonly updatedAt: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-07-04T13:04:02.629Z"];
                              };
                              readonly fiatAmountPaid: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [69.28];
                              };
                              readonly payoutFiatData: {
                                  readonly type: "object";
                                  readonly properties: {
                                      readonly payoutType: {
                                          readonly type: "string";
                                          readonly examples: readonly ["Bank"];
                                      };
                                      readonly payoutMethod: {
                                          readonly type: "string";
                                          readonly examples: readonly ["62b1a3e2e91bf6c489510b0f"];
                                      };
                                      readonly payoutCurrency: {
                                          readonly type: "string";
                                          readonly examples: readonly ["EUR"];
                                      };
                                      readonly payoutDetails: {
                                          readonly type: "object";
                                          readonly properties: {
                                              readonly _id: {
                                                  readonly type: "string";
                                                  readonly examples: readonly ["246aadfc-e06e-4f7c-9e54-302679f39688"];
                                              };
                                              readonly createdAt: {
                                                  readonly type: "string";
                                                  readonly examples: readonly ["2022-06-15T08:42:06.439Z"];
                                              };
                                              readonly userId: {
                                                  readonly type: "string";
                                                  readonly examples: readonly ["7031ada0-2a23-42d2-94b8-62ddf3920b67"];
                                              };
                                              readonly detailsType: {
                                                  readonly type: "string";
                                                  readonly examples: readonly ["iban"];
                                              };
                                              readonly isDefault: {
                                                  readonly type: "boolean";
                                                  readonly default: true;
                                                  readonly examples: readonly [true];
                                              };
                                              readonly isVerified: {
                                                  readonly type: "boolean";
                                                  readonly default: true;
                                                  readonly examples: readonly [false];
                                              };
                                              readonly disabled: {
                                                  readonly type: "boolean";
                                                  readonly default: true;
                                                  readonly examples: readonly [false];
                                              };
                                              readonly iban: {
                                                  readonly type: "string";
                                                  readonly examples: readonly ["IT60X0542811101000000123456"];
                                              };
                                          };
                                      };
                                  };
                              };
                              readonly payoutFiatTransactionId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["P12004UJ0Z"];
                              };
                              readonly payoutFiatTransactionCreatedAt: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-07-04T13:04:03.420Z"];
                              };
                              readonly completedAt: {
                                  readonly type: "string";
                                  readonly examples: readonly ["2022-07-04T13:04:26.490Z"];
                              };
                              readonly userPayoutFiatTransactionId: {
                                  readonly type: "string";
                                  readonly examples: readonly ["T12003UURK"];
                              };
                              readonly partnerFeeInUsd: {
                                  readonly type: "string";
                                  readonly examples: readonly ["1.03"];
                              };
                              readonly partnerFeeDecimal: {
                                  readonly type: "number";
                                  readonly default: 0;
                                  readonly examples: readonly [0.0142877760138548];
                              };
                          };
                      };
                  };
              };
          }];
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "400": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [400];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Error"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["startDate is a required argument"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "401": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [401];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Unauthorized"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Authorization Required"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
  };
};
declare const GetUserData: {
  readonly metadata: {
      readonly allOf: readonly [{
          readonly type: "object";
          readonly properties: {
              readonly partnerCustomerId: {
                  readonly type: "string";
                  readonly default: "YOUR_CUSTOMER_ID";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "It is your unique customer ID that will be used to identify the customer that made the transaction once a webhook is called back to your app";
              };
          };
          readonly required: readonly ["partnerCustomerId"];
      }, {
          readonly type: "object";
          readonly properties: {
              readonly "access-token": {
                  readonly type: "string";
                  readonly default: "YOUR_ACCESS_TOKEN";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "Your Access Token, you can generate one using our [Refresh Token](ref:refresh-access-token) endpoint";
              };
          };
          readonly required: readonly ["access-token"];
      }];
  };
  readonly response: {
      readonly "200": {
          readonly type: "object";
          readonly properties: {
              readonly meta: {
                  readonly type: "object";
                  readonly properties: {
                      readonly partnerCustomerId: {
                          readonly type: "string";
                          readonly examples: readonly ["832351"];
                      };
                  };
              };
              readonly data: {
                  readonly type: "object";
                  readonly properties: {
                      readonly firstName: {
                          readonly type: "string";
                          readonly examples: readonly ["Sandeep"];
                      };
                      readonly lastName: {
                          readonly type: "string";
                          readonly examples: readonly ["Kumar"];
                      };
                      readonly kycStatus: {
                          readonly type: "string";
                          readonly examples: readonly ["APPROVED"];
                      };
                      readonly email: {
                          readonly type: "string";
                          readonly examples: readonly ["sandeep@transak.com"];
                      };
                      readonly dob: {
                          readonly type: "string";
                          readonly examples: readonly ["1997-06-06T00:00:00.000Z"];
                      };
                      readonly mobileNumber: {
                          readonly type: "string";
                          readonly examples: readonly ["+91XXXXXXXXXX"];
                      };
                      readonly address: {
                          readonly type: "object";
                          readonly properties: {
                              readonly addressLine1: {
                                  readonly type: "string";
                                  readonly examples: readonly ["Bengaluru"];
                              };
                              readonly addressLine2: {
                                  readonly type: "string";
                                  readonly examples: readonly [""];
                              };
                              readonly state: {
                                  readonly type: "string";
                                  readonly examples: readonly ["Karnataka"];
                              };
                              readonly city: {
                                  readonly type: "string";
                                  readonly examples: readonly ["Bengaluru"];
                              };
                              readonly postCode: {
                                  readonly type: "string";
                                  readonly examples: readonly ["560048"];
                              };
                              readonly country: {
                                  readonly type: "string";
                                  readonly examples: readonly ["India"];
                              };
                              readonly countryCode: {
                                  readonly type: "string";
                                  readonly examples: readonly ["IN"];
                              };
                          };
                      };
                      readonly createdAt: {
                          readonly type: "string";
                          readonly examples: readonly ["2021-06-19T18:25:08.000Z"];
                      };
                      readonly partnerCustomerId: {
                          readonly type: "string";
                          readonly examples: readonly ["832351"];
                      };
                      readonly partnerApiKey: {
                          readonly type: "string";
                          readonly examples: readonly ["765678-3316-4cbb-8a68-rt7688fgu886"];
                      };
                      readonly kycDocuments: {
                          readonly type: "array";
                          readonly items: {
                              readonly type: "object";
                              readonly properties: {
                                  readonly type: {
                                      readonly type: "string";
                                      readonly examples: readonly ["addressProof"];
                                  };
                                  readonly side: {
                                      readonly type: "boolean";
                                      readonly default: true;
                                      readonly examples: readonly [false];
                                  };
                                  readonly url: {
                                      readonly type: "string";
                                      readonly examples: readonly ["https://api.transak.com/api/v2/user/get-kyc-image?userId=34234gsf-3erg-42b4-b4e7-435323232&docType=addressProof&side=45343243-b21d-49d0-9f53-343243232"];
                                  };
                              };
                          };
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "400": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [400];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Bad Request"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Invalid user id"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "401": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [401];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Unauthorized"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Authorization Required"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
  };
};
declare const GetWebhooks: {
  readonly metadata: {
      readonly allOf: readonly [{
          readonly type: "object";
          readonly properties: {
              readonly eventID: {
                  readonly type: "string";
                  readonly default: "ORDER_COMPLETED";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "Filter by event id (ORDER_COMPLETED, ORDER_CANCELLED, ORDER_CREATED, ORDER_FAILED, ORDER_PROCESSING,ORDER_PAYMENT_VERIFYING))";
              };
              readonly orderID: {
                  readonly type: "string";
                  readonly default: "YOUR_CUSTOMER_ORDER_ID";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "Filter by order id";
              };
          };
          readonly required: readonly [];
      }, {
          readonly type: "object";
          readonly properties: {
              readonly "access-token": {
                  readonly type: "string";
                  readonly default: "YOUR_ACCESS_TOKEN";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "Your Access Token, you can generate one using our [Refresh Token](ref:refresh-access-token) endpoint";
              };
          };
          readonly required: readonly ["access-token"];
      }];
  };
  readonly response: {
      readonly "200": {
          readonly type: "object";
          readonly properties: {
              readonly meta: {
                  readonly type: "object";
                  readonly properties: {};
              };
              readonly data: {
                  readonly type: "array";
                  readonly items: {
                      readonly type: "object";
                      readonly properties: {
                          readonly partnerApiKey: {
                              readonly type: "string";
                              readonly examples: readonly ["cd09b401-a036-462e-d09b4-cd09b401"];
                          };
                          readonly createdAt: {
                              readonly type: "string";
                              readonly examples: readonly ["2020-02-21T02:32:44.914Z"];
                          };
                          readonly eventID: {
                              readonly type: "string";
                              readonly examples: readonly ["ORDER_CREATED"];
                          };
                          readonly webhookData: {
                              readonly type: "object";
                              readonly properties: {
                                  readonly id: {
                                      readonly type: "string";
                                      readonly examples: readonly ["cd09b401-a036-462e-d09b4-cd09b401"];
                                  };
                                  readonly walletAddress: {
                                      readonly type: "string";
                                      readonly examples: readonly ["0x000389830900e9000000wd000"];
                                  };
                                  readonly createdAt: {
                                      readonly type: "string";
                                      readonly examples: readonly ["2020-02-21T02:32:44.822Z"];
                                  };
                                  readonly status: {
                                      readonly type: "string";
                                      readonly examples: readonly ["AWAITING_PAYMENT_FROM_USER"];
                                  };
                                  readonly fiatCurrency: {
                                      readonly type: "string";
                                      readonly examples: readonly ["INR"];
                                  };
                                  readonly userId: {
                                      readonly type: "string";
                                      readonly examples: readonly ["cd09b401-a036-462e-d09b4-cd09b401"];
                                  };
                                  readonly cryptocurrency: {
                                      readonly type: "string";
                                      readonly examples: readonly ["CDAI"];
                                  };
                                  readonly isBuyOrSell: {
                                      readonly type: "string";
                                      readonly examples: readonly ["BUY"];
                                  };
                                  readonly fiatAmount: {
                                      readonly type: "integer";
                                      readonly default: 0;
                                      readonly examples: readonly [1500];
                                  };
                                  readonly commissionDecimal: {
                                      readonly type: "number";
                                      readonly default: 0;
                                      readonly examples: readonly [0.0075];
                                  };
                                  readonly fromWalletAddress: {
                                      readonly type: "string";
                                      readonly examples: readonly ["0x000389830900e9000000wd000"];
                                  };
                                  readonly walletLink: {
                                      readonly type: "string";
                                      readonly examples: readonly ["https://kovan.etherscan.io/address/0x000389830900e9000000wd000"];
                                  };
                                  readonly amountPaid: {
                                      readonly type: "integer";
                                      readonly default: 0;
                                      readonly examples: readonly [0];
                                  };
                                  readonly conversionPrice: {
                                      readonly type: "number";
                                      readonly default: 0;
                                      readonly examples: readonly [0.6481680505382411];
                                  };
                                  readonly cryptoAmount: {
                                      readonly type: "number";
                                      readonly default: 0;
                                      readonly examples: readonly [964.96];
                                  };
                                  readonly totalFee: {
                                      readonly type: "number";
                                      readonly default: 0;
                                      readonly examples: readonly [7.291890568555212];
                                  };
                                  readonly paymentOption: {
                                      readonly type: "array";
                                      readonly items: {
                                          readonly type: "object";
                                          readonly properties: {
                                              readonly currency: {
                                                  readonly type: "string";
                                                  readonly examples: readonly ["INR"];
                                              };
                                              readonly provider: {
                                                  readonly type: "string";
                                                  readonly examples: readonly ["upi"];
                                              };
                                              readonly name: {
                                                  readonly type: "string";
                                                  readonly examples: readonly ["UPI"];
                                              };
                                              readonly fields: {
                                                  readonly type: "array";
                                                  readonly items: {
                                                      readonly type: "object";
                                                      readonly properties: {
                                                          readonly name: {
                                                              readonly type: "string";
                                                              readonly examples: readonly ["UPI / VPA Id"];
                                                          };
                                                          readonly value: {
                                                              readonly type: "string";
                                                              readonly examples: readonly ["1234567890@paytm"];
                                                          };
                                                      };
                                                  };
                                              };
                                          };
                                      };
                                  };
                                  readonly autoExpiresAt: {
                                      readonly type: "string";
                                      readonly examples: readonly ["2020-02-21T03:32:44+00:00"];
                                  };
                                  readonly referenceCode: {
                                      readonly type: "integer";
                                      readonly default: 0;
                                      readonly examples: readonly [554579];
                                  };
                              };
                          };
                          readonly webhookResponse: {
                              readonly type: "object";
                              readonly properties: {
                                  readonly statusCode: {
                                      readonly type: "integer";
                                      readonly default: 0;
                                      readonly examples: readonly [405];
                                  };
                                  readonly body: {
                                      readonly type: "string";
                                      readonly examples: readonly ["<!DOCTYPE html>\n<html lang=en>\n  <meta charset=utf-8>\n  <meta name=viewport content=\"initial-scale=1, minimum-scale=1, width=device-width\">\n  <title>Error 405 (Method Not Allowed)!!1</title>\n  <style>\n    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}\n  </style>\n  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>\n  <p><b>405.</b> <ins>That’s an error.</ins>\n  <p>The request method <code>POST</code> is inappropriate for the URL <code>/</code>.  <ins>That’s all we know.</ins>\n"];
                                  };
                                  readonly headers: {
                                      readonly type: "object";
                                      readonly properties: {
                                          readonly allow: {
                                              readonly type: "string";
                                              readonly examples: readonly ["GET, HEAD"];
                                          };
                                          readonly date: {
                                              readonly type: "string";
                                              readonly examples: readonly ["Fri, 21 Feb 2020 02:32:44 GMT"];
                                          };
                                          readonly "content-type": {
                                              readonly type: "string";
                                              readonly examples: readonly ["text/html; charset=UTF-8"];
                                          };
                                          readonly server: {
                                              readonly type: "string";
                                              readonly examples: readonly ["gws"];
                                          };
                                          readonly "content-length": {
                                              readonly type: "string";
                                              readonly examples: readonly ["1589"];
                                          };
                                          readonly "x-xss-protection": {
                                              readonly type: "string";
                                              readonly examples: readonly ["0"];
                                          };
                                          readonly "x-frame-options": {
                                              readonly type: "string";
                                              readonly examples: readonly ["SAMEORIGIN"];
                                          };
                                          readonly "alt-svc": {
                                              readonly type: "string";
                                              readonly examples: readonly ["quic=\":443\"; ma=2592000; v=\"46,43\",h3-Q050=\":443\"; ma=2592000,h3-Q049=\":443\"; ma=2592000,h3-Q048=\":443\"; ma=2592000,h3-Q046=\":443\"; ma=2592000,h3-Q043=\":443\"; ma=2592000"];
                                          };
                                          readonly connection: {
                                              readonly type: "string";
                                              readonly examples: readonly ["close"];
                                          };
                                      };
                                  };
                                  readonly request: {
                                      readonly type: "object";
                                      readonly properties: {
                                          readonly uri: {
                                              readonly type: "object";
                                              readonly properties: {
                                                  readonly protocol: {
                                                      readonly type: "string";
                                                      readonly examples: readonly ["https:"];
                                                  };
                                                  readonly slashes: {
                                                      readonly type: "boolean";
                                                      readonly default: true;
                                                      readonly examples: readonly [true];
                                                  };
                                                  readonly auth: {};
                                                  readonly host: {
                                                      readonly type: "string";
                                                      readonly examples: readonly ["google.com"];
                                                  };
                                                  readonly port: {
                                                      readonly type: "integer";
                                                      readonly default: 0;
                                                      readonly examples: readonly [443];
                                                  };
                                                  readonly hostname: {
                                                      readonly type: "string";
                                                      readonly examples: readonly ["google.com"];
                                                  };
                                                  readonly hash: {};
                                                  readonly search: {};
                                                  readonly query: {};
                                                  readonly pathname: {
                                                      readonly type: "string";
                                                      readonly examples: readonly ["/"];
                                                  };
                                                  readonly path: {
                                                      readonly type: "string";
                                                      readonly examples: readonly ["/"];
                                                  };
                                                  readonly href: {
                                                      readonly type: "string";
                                                      readonly examples: readonly ["https://google.com/"];
                                                  };
                                              };
                                          };
                                          readonly method: {
                                              readonly type: "string";
                                              readonly examples: readonly ["POST"];
                                          };
                                          readonly headers: {
                                              readonly type: "object";
                                              readonly properties: {
                                                  readonly accept: {
                                                      readonly type: "string";
                                                      readonly examples: readonly ["application/json"];
                                                  };
                                                  readonly "content-type": {
                                                      readonly type: "string";
                                                      readonly examples: readonly ["application/json"];
                                                  };
                                                  readonly "content-length": {
                                                      readonly type: "integer";
                                                      readonly default: 0;
                                                      readonly examples: readonly [1596];
                                                  };
                                              };
                                          };
                                      };
                                  };
                              };
                          };
                          readonly id: {
                              readonly type: "string";
                              readonly examples: readonly ["cd09b401-a036-462e-d09b4-cd09b401"];
                          };
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "401": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [401];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Unauthorized"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Authorization Required"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
  };
};
declare const RefreshAccessToken: {
  readonly body: {
      readonly type: "object";
      readonly required: readonly ["apiKey"];
      readonly properties: {
          readonly apiKey: {
              readonly type: "string";
              readonly description: "Your Api Key which you can get it from <a href=\"https://dashboard.transak.com\" target=\"_blank\">Transak Partner Dashboard</a> for respective environment";
              readonly default: "YOUR_API_KEY";
          };
      };
      readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
  };
  readonly metadata: {
      readonly allOf: readonly [{
          readonly type: "object";
          readonly properties: {
              readonly "api-secret": {
                  readonly type: "string";
                  readonly default: "YOUR_API_SECRET";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "Your api secret, you can get it from  <a href=\"https://dashboard.transak.com\" target=\"_blank\">Transak Partner Dashboard</a>  for respective environment";
              };
          };
          readonly required: readonly ["api-secret"];
      }];
  };
  readonly response: {
      readonly "200": {
          readonly type: "object";
          readonly properties: {
              readonly data: {
                  readonly type: "object";
                  readonly properties: {
                      readonly accessToken: {
                          readonly type: "string";
                          readonly examples: readonly ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBUElfS0VZIjoiZjAxMjZjMjctNGY4Yi00YTZiLTkwNmYtZTU3MGEzNDY0MDEwIi"];
                      };
                      readonly expiresAt: {
                          readonly type: "string";
                          readonly examples: readonly ["1659505096 // unix timestamp"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "400": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [400];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Bad Request"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Your Access Token is Inactive. Please use latest one or generate a new one using our /token end point"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "401": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [401];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Unauthorized"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Authorization Required"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
  };
};
declare const TestWebhook: {
  readonly metadata: {
      readonly allOf: readonly [{
          readonly type: "object";
          readonly properties: {
              readonly "access-token": {
                  readonly type: "string";
                  readonly default: "YOUR_ACCESS_TOKEN";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "Your Access Token, you can generate one using our [Refresh Token](ref:refresh-access-token) endpoint";
              };
          };
          readonly required: readonly ["access-token"];
      }];
  };
  readonly response: {
      readonly "200": {
          readonly type: "object";
          readonly properties: {
              readonly meta: {
                  readonly type: "object";
                  readonly properties: {
                      readonly success: {
                          readonly type: "boolean";
                          readonly default: true;
                          readonly examples: readonly [true];
                      };
                      readonly webhookURL: {
                          readonly type: "string";
                          readonly examples: readonly ["www.transak.com"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "401": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [401];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Unauthorized"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Authorization Required"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
  };
};
declare const UpdateWebhook: {
  readonly body: {
      readonly type: "object";
      readonly required: readonly ["webhookURL"];
      readonly properties: {
          readonly webhookURL: {
              readonly type: "string";
              readonly description: "Enter your new webhook URL";
              readonly default: "www.transak.com";
          };
      };
      readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
  };
  readonly metadata: {
      readonly allOf: readonly [{
          readonly type: "object";
          readonly properties: {
              readonly "access-token": {
                  readonly type: "string";
                  readonly default: "YOUR_ACCESS_TOKEN";
                  readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                  readonly description: "Your Access Token, you can generate one using our [Refresh Token](ref:refresh-access-token) endpoint";
              };
          };
          readonly required: readonly ["access-token"];
      }];
  };
  readonly response: {
      readonly "200": {
          readonly type: "object";
          readonly properties: {
              readonly meta: {
                  readonly type: "object";
                  readonly properties: {
                      readonly success: {
                          readonly type: "boolean";
                          readonly default: true;
                          readonly examples: readonly [true];
                      };
                  };
              };
              readonly data: {
                  readonly type: "object";
                  readonly properties: {
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Your request to update webhook url is successfully processed."];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "400": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [400];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Error"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["webhookURL is a required argument"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
      readonly "401": {
          readonly type: "object";
          readonly properties: {
              readonly error: {
                  readonly type: "object";
                  readonly properties: {
                      readonly statusCode: {
                          readonly type: "integer";
                          readonly default: 0;
                          readonly examples: readonly [401];
                      };
                      readonly name: {
                          readonly type: "string";
                          readonly examples: readonly ["Unauthorized"];
                      };
                      readonly message: {
                          readonly type: "string";
                          readonly examples: readonly ["Authorization Required"];
                      };
                  };
              };
          };
          readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
      };
  };
};
export { GetOrderByOrderId, GetOrders, GetUserData, GetWebhooks, RefreshAccessToken, TestWebhook, UpdateWebhook };
