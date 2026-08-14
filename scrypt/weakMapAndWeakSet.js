let messages = [
  {text: "Привіт", from: "Іван"},
  {text: "Як справи?", from: "Іван"},
  {text: "До зустрічі", from: "Аліса"}
];


let isRead = new WeakSet();

// for (const elem of messages) {
//     isRead.add(elem);
// }
isRead.add(messages)

console.log(isRead)