export function createWhatsappMessageUtil() {
  return {
    messaging_product: "whatsapp",
    to: process.env.META_RECIPIENT_WAID,
    type: "template",
    template: {
      name: "hello_world",
      language: {
        code: "en_US",
      },
    },
  };
}
