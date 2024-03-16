declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      GMAIL_APP_USER?: string;
      GMAIL_APP_PASSWORD?: string;
    }
  }
}

export {};
