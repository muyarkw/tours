const errors = {
  UnexpectedError: {
    statusCode: 400,
    msg: 'Unexpected server error'
  },
  MissingExpectedParams: {
    statusCode: 400,
    msg: 'Missing expected params'
  },
  ArrayCannotBeEmpty: {
    statusCode: 400,
    msg: 'Array cannot be empty'
  },
  UnknownConversionType: {
    statusCode: 400,
    msg: 'Unknown conversion type'
  },
  UnknownConversionSide: {
    statusCode: 400,
    msg: 'Unknown conversion side'
  },
  PositiveValueRequired: {
    statusCode: 400,
    msg: 'Positive value is required'
  },
  WithdrawalLimitExceeded: {
    statusCode: 400,
    msg: 'Withdrawal limit exceeded'
  },
  WithdrawalDailyLimitExceeded: {
    statusCode: 400,
    msg: 'Withdrawal daily limit exceeded'
  },
  WithdrawalWeeklyLimitExceeded: {
    statusCode: 400,
    msg: 'Withdrawal weekly limit exceeded'
  },
  WithdrawalMonthlyLimitExceeded: {
    statusCode: 400,
    msg: 'Withdrawal monthly limit exceeded'
  },
  UnknownConversionError: {
    statusCode: 400,
    msg: 'Unknown conversion error'
  },
  InstrumentNotAllowed: {
    statusCode: 400,
    msg: 'Instrument not allowed'
  },
  InvalidUserStatus: {
    statuscode: 400,
    msg: 'Invalid User Status'
  },
  QuantityTooBig: {
    statusCode: 400,
    msg: 'Quantity too big'
  },
  CurrencyPairNotSupported: {
    statusCode: 400,
    msg: 'Currency pair not supported'
  },
  InvalidUnitPremiumAmount: {
    statusCode: 400,
    msg: 'Invalid unit premium amount'
  },
  RequireAdminPrivilege: {
    statusCode: 400,
    msg: 'Require administrator privilege for action'
  },
  ZeroUnitPremiumAmount: {
    statusCode: 400,
    msg: 'Premium too small, premium per asset unit must be larger than 0'
  },
  ZeroTradeUnitPremiumAmount: {
    statusCode: 400,
    msg: 'Premium too small, premium per trade unit must be larger than 0'
  },
  ZeroTotalPremiumAmount: {
    statusCode: 400,
    msg: 'Premium too small, total premium must be larger than 0'
  },
  FailureCreateUser: {
    statusCode: 400,
    msg: 'Failed to create a new user'
  },
  ConversionQuoteNotFound: {
    statusCode: 400,
    msg: 'Unable to find conversion quote'
  },
  UnexpectedConversionSide: {
    statusCode: 400,
    msg: 'Unexpected Conversion Side'
  },
  ConfigurationNotFound: {
    statusCode: 400,
    msg: 'Unable to find configuration'
  },
  InvalidToken: {
    statusCode: 400,
    msg: 'Invalid token'
  },
  maxEth: {
    statusCode: 400,
    msg: 'Maximum ether amount is 1000000'
  },
  minEth: {
    statusCode: 400,
    msg: 'Minimum ether amount is 0.000001'
  },
  InvalidEthAmount: {
    statusCode: 400,
    msg: 'Ethereum amount is not valid'
  },
  MissingRequiredFieldsForNotification: {
    statusCode: 400,
    msg: 'Missing required fields for notification'
  },
  InvalidAuthHash: {
    statusCode: 403,
    msg: 'Invalid security hash'
  },
  ResendVerificationTimeout: {
    statusCode: 400,
    msg: 'Please wait for at least 60 seconds before trying to resend'
  },
  ResendResetPasswordTimeout: {
    statusCode: 400,
    msg: 'Please wait for at least 60 seconds before trying to resend'
  },
  ResendWithdrawalConfirmationTimeout: {
    statusCode: 400,
    msg: 'Please wait for at least 60 seconds before trying to resend'
  },
  UnableLogout: {
    statusCode: 400,
    msg: 'Unable to logout'
  },
  UnverifiedEmail: {
    statusCode: 400,
    msg: 'Email is not verified and must be verified before logging in.'
  },
  NotInBiddingState: {
    statusCode: 400,
    msg: 'Trade not in bidding state'
  },
  EmailExists: {
    statusCode: 403,
    msg: 'Email has been previously registered'
  },
  UserNotFound: {
    statusCode: 404,
    msg: 'User not found'
  },
  UserSuspended: {
    statusCode: 403,
    msg: 'Your account has been suspended. Please contact support'
  },
  WithdrawalLimitNotFound: {
    statusCode: 404,
    msg: 'Withdrawal limit not found'
  },
  TradeContractNotFound: {
    statusCode: 404,
    msg: 'TradeContract not found'
  },
  IncorrectEmailPassword: {
    statusCode: 404,
    msg: 'Wrong email and password combination'
  },
  LoginAttemptsExceededLimit: {
    statusCode: 470,
    msg:
      'Login attempts exceeded limit. You account has been locked. Please contact support.'
  },
  WalletNotFound: {
    statusCode: 404,
    msg: 'Wallet not found'
  },
  CoinNotFound: {
    statusCode: 404,
    msg: 'Coin not found'
  },
  TradeOrderNotFound: {
    statusCode: 404,
    msg: 'TradeOrder not found'
  },
  // Use for bitgo
  TransferIdNotFound: {
    statusCode: 404,
    msg: 'Transfer Id not found'
  },
  DepositNotFound: {
    statusCode: 404,
    msg: 'Deposit not found'
  },
  DepositAssignFailure: {
    statusCode: 400,
    msg: 'Assign deposit address failure'
  },
  NoDepositAddress: {
    statusCode: 400,
    msg: 'No deposit address'
  },
  KYCVerificationNotFound: {
    statusCode: 404,
    msg: 'KYC verification not found'
  },
  KYCVerificationApproved: {
    statusCode: 403,
    msg: 'User has successfully submitted KYC documents and approved.'
  },
  KYCVerificationInReviewing: {
    statusCode: 403,
    msg: 'KYC document in reviewing.'
  },
  KYCVerificationComplianceReview: {
    statusCode: 403,
    msg: 'KYC document in the compliance review.'
  },
  KYCAMLRequired: {
    statusCode: 403,
    msg: 'KYC and AML is required for this operation'
  },
  KYCConfigNotFound: {
    statusCode: 400,
    msg: 'KYC configuration not found'
  },
  MissingRequiredFieldsForKYC: {
    statusCode: 400,
    msg: 'Missing required fields for KYC'
  },
  DisabledDevOnlyAPI: {
    statusCode: 400,
    msg: 'Disabled dev-only API'
  },
  InsufficientBalance: {
    statusCode: 455,
    msg: 'Insufficient balance'
  },
  InsufficientBalanceForTrade: {
    statusCode: 455,
    msg: 'Insufficient balance to lock for trade'
  },
  InsufficientBalanceForFee: {
    statusCode: 455,
    msg: 'Insufficient balance for fee'
  },
  InsufficientBalanceForTradeAndFee: {
    statusCode: 455,
    msg: 'Insufficient balance for trade and fee'
  },
  InsufficientBalanceForPremium: {
    statusCode: 455,
    msg: 'Insufficient balance for premium'
  },
  InsufficientBalanceForPremiumAndFee: {
    statusCode: 455,
    msg: 'Insufficient balance for premium and fee'
  },
  InsufficientBalanceForConversion: {
    statusCode: 455,
    msg: 'Insufficient balance for conversion'
  },
  InsufficientBalanceForWithdraw: {
    statusCode: 455,
    msg: 'Insufficient balance for withdraw'
  },
  InvalidAmount: {
    statusCode: 400,
    msg: 'Amount is invalid'
  },
  DuplicateExtId: {
    statusCode: 409,
    msg: 'Duplicate ext_id'
  },
  InvalidTrade: {
    statusCode: 400,
    msg: 'Trade is invalid'
  },
  InvalidConversionExecution: {
    statusCode: 400,
    msg: 'Conversion is invalid'
  },
  TransactionIdNotFound: {
    statusCode: 404,
    msg: 'Transaction Id not found'
  },
  LinkHasExpired: {
    statusCode: 400,
    msg: 'Link has expired'
  },
  Unauthorized: {
    statusCode: 401,
    msg: 'Unauthorized'
  },
  UnauthorizedAuthenticationTimeout: {
    statusCode: 401,
    msg: 'Login timeout'
  },
  OTPNotFound: {
    statusCode: 404,
    msg: 'One-time password expected'
  },
  OTPExists: {
    statusCode: 400,
    msg: '2FA is already enabled for user'
  },
  OTPRequired: {
    statusCode: 499,
    msg: 'One-time password is required'
  },
  InvalidOTP: {
    statusCode: 401,
    msg: 'One-time password is not correct'
  },
  OTPUsed: {
    statusCode: 400,
    msg: 'One-time password is used'
  },
  PermissionDenied: {
    statusCode: 403,
    msg: 'Permission denied'
  },
  EmailServerError: {
    statusCode: 500,
    msg: 'Email delivery failed'
  },
  IncorrectWalletForUser: {
    statusCode: 400,
    msg: 'Wallet does not belong to user'
  },
  ConfirmationNotRequired: {
    statusCode: 400,
    msg: 'User confirmation no longer required'
  },
  NotPositiveNumber: {
    statusCode: 400,
    msg: 'Please enter a positive number'
  },
  UnableToWithdrawCoin: {
    statusCode: 400,
    msg: 'This coin is temporarily or permanently not withdraw-able.'
  },
  UnableToDepositCoin: {
    statusCode: 400,
    msg: 'This coin is temporarily or permanently not deposit-able.'
  },
  UnableToWithdrawFiat: {
    statusCode: 400,
    msg: 'This currency is temporarily or permanently not withdraw-able.'
  },
  UnableToDepositFiat: {
    statusCode: 400,
    msg: 'This currency is temporarily or permanently not deposit-able.'
  },
  BankAccountExisted: {
    statusCode: 400,
    msg: 'This account has existed.'
  },
  BankAccountAliasExisted: {
    statusCode: 400,
    msg: 'This alias has existed, please try again with different alias.'
  },
  BankAccountNotFound: {
    statusCode: 400,
    msg: 'Bank account not found.'
  },
  SuspendedBankAccount: {
    statusCode: 400,
    msg: 'Unknown issue with bank account, please contact support.'
  },
  UnauthorizedFiatOperation: {
    statusCode: 400,
    msg: 'KYC screening with Wallex is not yet submitted or approved.'
  },
  NotPendingWithdrawal: {
    statusCode: 400,
    msg: 'Only can process PENDING withdrawal.'
  },
  InvalidWithdrawalAddress: {
    statusCode: 400,
    msg: 'Invalid withdrawal address'
  },
  InvalidAddress: {
    statusCode: 400,
    msg: 'Invalid address'
  },
  InvalidConfigures: {
    statusCode: 400,
    msg: 'Invalid configure'
  },
  InvalidTradeFilter: {
    statusCode: 400,
    msg: 'Invalid trade filter'
  },
  InvalidPairing: {
    statusCode: 400,
    msg: 'Invalid pairing'
  },
  InvalidAction: {
    statusCode: 400,
    msg: 'Invalid action'
  },
  InvalidStatus: {
    statusCode: 400,
    msg: 'Invalid status'
  },
  InvalidType: {
    statusCode: 400,
    msg: 'Invalid type'
  },
  InvalidPremium: {
    statusCode: 400,
    msg: 'Invalid premium'
  },
  InvalidLifetime: {
    statusCode: 400,
    msg: 'Invalid lifetime'
  },
  InvalidFeeCoin: {
    statusCode: 400,
    msg: 'Invalid fee coin'
  },
  InvalidTradeCancellation: {
    statusCode: 400,
    msg: 'Only pending trades can be cancelled'
  },
  InvalidTradeContractSettlement: {
    statusCode: 400,
    msg: 'Only active trades contracts can be settled'
  },
  InvalidTradeMatch: {
    statusCode: 400,
    msg: 'Only pending trades can be matched'
  },
  InvalidSkipBidding: {
    statusCode: 400,
    msg: 'Invalid skip matching value'
  },
  TradeSellerError: {
    statusCode: 400,
    msg: 'SellerId already exists'
  },
  TradeBuyerError: {
    statusCode: 400,
    msg: 'BuyerId already exists'
  },
  TradePermissionDenied: {
    statusCode: 400,
    msg: 'Manipulate trade permission denied'
  },
  TradeContractNotExpired: {
    msg: 'Cannot settle trade contract that has not expired'
  },
  InvalidDateFormat: {
    statusCode: 400,
    msg: 'Invalid date format'
  },
  InvalidDateTimezone: {
    statusCode: 400,
    msg: 'Invalid date timezone'
  },
  InvalidExpiryDate: {
    statusCode: 400,
    msg: 'Invalid expiry date'
  },
  InvalidExpiryTime: {
    statusCode: 400,
    msg: 'Invalid expiry time'
  },
  ExceedExpiryLimit: {
    statusCode: 400,
    msg: 'Expiry exceeded maximum limit'
  },
  OrderWasRejected: {
    statusCode: 400,
    msg: 'Order was rejected'
  },
  InvalidSortDirection: {
    statusCode: 400,
    msg: 'Invalid order target'
  },
  InvalidSortItem: {
    statusCode: 400,
    msg: 'Invalid order target'
  },
  InvalidOrder: {
    statusCode: 400,
    msg: 'Invalid order'
  },
  InvalidStrikeStep: {
    statusCode: 400,
    msg: 'Invalid strike step'
  },
  InvalidAmountStep: {
    statusCode: 400,
    msg: 'Invalid amount step'
  },
  InvalidPairForStep: {
    statusCode: 400,
    msg: 'Invalid pair for step'
  },
  NoIdToCreateContract: {
    statusCode: 400,
    msg: 'Neither bidId nor TradeOrderId provided to create contract'
  },
  InvalidIdsForTradeContract: {
    statusCode: 400,
    msg:
      'Invalid number of ids - both bidId and tradeOrderId present to create single contract'
  },
  BidIdNotFound: {
    statusCode: 404,
    msg: 'Bid Id not found'
  },
  MissingDatabaseTransaction: {
    statusCode: 400,
    msg: 'Missing database transaction'
  },
  OrderIdNotFound: {
    statusCode: 404,
    msg: 'Order Id not found'
  },
  OrderNotAllowCancel: {
    statusCode: 400,
    msg: 'Order is not allow cancel'
  },
  OrderHasFullyMatched: {
    statusCode: 400,
    msg: 'Some of the orders have no more unfilled amount'
  },
  UnauthorizedCancelOrder: {
    statusCode: 400,
    msg: 'You are not authorized to cancel some of the given orders'
  },
  OrderNotAllowRefund: {
    statusCode: 400,
    msg: 'Order is not allow refund'
  },
  InvalidNumberOfPayouts: {
    statusCode: 400,
    msg: 'Invalid number of payouts'
  },
  NoBuyerPayoutFound: {
    statusCode: 400,
    msg: 'No buyer payout found'
  },
  NoSellerPayoutFound: {
    statusCode: 400,
    msg: 'No seller payout found'
  },
  InvalidPayoutAmount: {
    statusCode: 400,
    msg: 'Invalid payout amount'
  },
  InvalidStrike: {
    statusCode: 400,
    msg: 'Invalid strike - must be more than zero'
  },
  NanStrike: {
    statusCode: 400,
    msg: 'Invalid strike - strike is not numerical value'
  },
  InvalidTradeOrderAmount: {
    statusCode: 400,
    msg: 'Invalid TradeOrder amount - must be more than zero'
  },
  InvalidBiddingAmount: {
    statusCode: 400,
    msg: 'Invalid bidding amount - must be more than zero'
  },
  OverBulkLimit: {
    statusCode: 400,
    msg: 'Over the bulk handle limit'
  },
  InvalidParameterDataType: {
    statusCode: 400,
    msg: 'Invalid data type for parameter'
  },
  InvalidCoinsFilter: {
    statusCode: 400,
    msg: 'Invalid coins filter'
  },
  InvalidContractFormat: {
    statusCode: 400,
    msg: 'Invalid contract format'
  },
  InvalidRoundingMode: {
    statusCode: 400,
    msg: 'Invalid rounding mode'
  },
  DeviceAuthorizationRequestNotFound: {
    statusCode: 400,
    msg: 'Device authorization request not found'
  },
  DeviceAuthRequired: {
    statusCode: 480,
    msg: 'Unrecognized device/ip. Authorization required. Check email.'
  },
  DeviceAuthDenied: {
    statusCode: 403,
    msg: 'Device is denied access'
  },
  BelowMinimumWithdrawal: {
    statusCode: 400,
    msg: 'Below minimum withdrawal'
  },
  InvalidCnfRevenueBalance: {
    statusCode: 400,
    msg: 'Unable to settle, revenue wallet(s) consists of negative balance.'
  },
  'missing-input-response': {
    statusCode: 460,
    msg: 'Missing recaptcha response.'
  },
  'invalid-input-response': {
    statusCode: 460,
    msg: 'Invalid recaptcha response.'
  },
  'timeout-or-duplicate': {
    statusCode: 460,
    msg: 'Captcha response expired.'
  },
  InvalidCnfParameteres: {
    statusCode: 400,
    msg:
      'Server error. We are facing some server difficulties at the moment, please try again shortly.',
    details: {
      code: 4001,
      desc: 'invalid parameters'
    }
  },
  UnsupportedCnfPairSide: {
    statusCode: 400,
    msg:
      'Server error. We are facing some server difficulties at the moment, please try again shortly.',
    details: {
      code: 4002,
      desc: 'currency pair or side not supported'
    }
  },
  NoRfqFound: {
    statusCode: 400,
    msg:
      'Server error. We are facing some server difficulties at the moment, please try again shortly.',
    details: {
      code: 4003,
      desc: 'no RFQ found'
    }
  },
  QuantityExceedLimit: {
    statusCode: 400,
    msg:
      'Server error. We are facing some server difficulties at the moment, please try again shortly.',
    details: {
      code: 4004,
      desc: 'quantity exceed limit'
    }
  },
  CnfQuoteExpired: {
    statusCode: 400,
    msg: 'Quote expired, please request for a new quote.',
    details: {
      code: 5001,
      desc: 'expired'
    }
  },
  PriceOutOfRange: {
    statusCode: 400,
    msg:
      'Server error. We are facing some server difficulties at the moment, please try again shortly.',
    details: {
      code: 5002,
      desc: 'price is out of range'
    }
  },
  IncorrectQuoteQuantity: {
    statusCode: 400,
    msg:
      'Server error. We are facing some server difficulties at the moment, please try again shortly.',
    details: {
      code: 5003,
      desc: 'quote qty is not correct'
    }
  },
  HighTraffic: {
    statusCode: 400,
    msg: 'High traffic. Please try again later',
    details: {
      code: 5004,
      desc: 'High traffic. Please try again later'
    }
  },
  CnfInternalError: {
    statusCode: 400,
    msg:
      'Server error. We are facing some server difficulties at the moment, please try again shortly.',
    details: {
      code: 500,
      desc: 'internal server error'
    }
  },
  InvalidIp: {
    statusCode: 400,
    msg: 'Invalid IP address detected.'
  },
  WalletBalanceLocked: {
    statusCode: 400,
    msg: 'Concurrent wallet spending is detected, please try again later.'
  },
  UnsupportedLanguage: {
    statusCode: 400,
    msg: 'Unsupported language.'
  },
  UnsupportedCountries: {
    statusCode: 400,
    msg: 'Unsupported country.'
  },
  PasswordTooLong: {
    statusCode: 400,
    msg: 'Password is too long.'
  },
  InvalidJSON: {
    statusCode: 400,
    msg: 'JSON format is not valid.'
  },
  BroadcastFailed: {
    statusCode: 400,
    msg: 'Broadcasting has failed.'
  },
  ApiRoleNotFound: {
    statusCode: 400,
    msg: 'API Role not found.'
  },
  ApiKeyNotFound: {
    statusCode: 401,
    msg: 'API key not found.'
  },
  InvalidTokenPayload: {
    statusCode: 401,
    msg: 'Invalid token payload.'
  },
  ApiKeyDescriptionExisted: {
    statusCode: 400,
    msg:
      'Description has to be unique, please try again with different description.'
  },
  ApiKeyDescriptionLengthy: {
    statusCode: 400,
    msg: 'Description only allow max 255 characters.'
  },
  InvalidUploadFileType: {
    statusCode: 400,
    msg: 'Invalid file type.'
  },
  MaxFileSize: {
    statusCode: 400,
    msg: 'File size exceeded maximum limit.'
  },
  WallexUnauthorized: {
    statusCode: 400,
    msg:
      'Server error. We are facing some server difficulties at the moment, please try again shortly.',
    details: {
      code: 403,
      desc: 'internal server error'
    }
  },
  WallexInternalError: {
    statusCode: 400,
    msg: 'Service unavailable. Please try again shortly.',
    details: {
      code: 503,
      desc: 'internal server error'
    }
  },
  NoFileUploaded: {
    statusCode: 400,
    msg: 'No file uploaded.'
  },
  InvalidTimezone: {
    statusCode: 400,
    msg: 'Invalid timezone.'
  },
  InvalidNumber: {
    statusCode: 400,
    msg: 'Invalid number.'
  },
  InvalidAddressVerificationStatus: {
    statusCode: 400,
    msg: 'Address info was already submitted.'
  },
  NoSupportingDocUploaded: {
    statusCode: 400,
    msg: 'No supporting document uploaded, please retry after upload.'
  },
  AlgoNotOnline: {
    statusCode: 400,
    msg: 'Algo must online to proceed for order creation.'
  },
  SortingProhibited: {
    statusCode: 400,
    msg: 'No allow to sort the data.'
  },
  InvalidEmploymentStatus: {
    statusCode: 400,
    msg: 'Invalid of employment status.'
  },
  InvalidNatureOfBusiness: {
    statusCode: 400,
    msg: 'Invalid of nature of business.'
  },
  MissingNatureOfBusiness: {
    statusCode: 400,
    msg: 'Missing nature of business.'
  },
  InvalidActivityType: {
    statusCode: 502,
    msg: 'Internal server error'
  },
  SettlementPriceNotFound: {
    statusCode: 400,
    msg: 'Settlement price is not ready.'
  },
  PlatformLocked: {
    statusCode: 400,
    msg:
      'Plafform is locked. Order creation or any CNF actions are not allowed.'
  },
  TNCAgreeRequired: {
    statusCode: 400,
    msg: 'Must agree T&C in order to use our webapp'
  }
};

module.exports = name => {
  const error = errors[name];

  if (error) {
    const e = new Error(error.msg);
    e.statusCode = error.statusCode;
    e.code = name;
    e.details = error.details;
    return e;
  }

  const e = new Error(name);
  e.statusCode = 400;
  e.code = 'UnexpectedError';
  return e;
};
