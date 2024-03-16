export function createMessageUtil(sender: string) {
  return {
    from: "leohb1501@gmail.com",
    to: sender,
    subject: "Welcome!",
    html: "<b>Hello world...</b>",
  };
}
