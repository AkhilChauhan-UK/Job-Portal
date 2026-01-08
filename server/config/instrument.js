import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://762c5e19efa8b0cdc0495c6274205b4a@o4510672993976320.ingest.us.sentry.io/4510673047977984",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});