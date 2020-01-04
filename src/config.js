export default {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "power-serverless-node"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://2s6do95z25.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_KbnzgWRsQ",
    APP_CLIENT_ID: "5fq2m0ql2r0gb9f1rept2i64ul",
    IDENTITY_POOL_ID: "eu-central-1:4fbcc3bf-cb4e-42a7-80e4-79f1eff606ac"
  }
};
