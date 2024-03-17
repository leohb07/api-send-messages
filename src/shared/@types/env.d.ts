declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      GMAIL_APP_USER?: string;
      GMAIL_APP_PASSWORD?: string;
      META_APP_ID?: string;
      META_APP_SECRET?: string;
      META_RECIPIENT_WAID?: string;
      META_VERSION?: string;
      META_PHONE_NUMBER_ID?: string;
      META_ACCESS_TOKEN?: string;
    }
  }
}

export {};
