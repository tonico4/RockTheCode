import "./Contact.css";

export const Contact = () => {
  const contact = document.createElement("section");
  contact.className = "contact";

  const form = document.createElement("form");
  const nameField = createField("Name", "John");
  const emailField = createField("Email", "email@gmail.com", "email");

  const messageField = document.createElement("div");
  messageField.className = "divform";
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message";
  messageLabel.htmlFor = "message";
  const messageArea = document.createElement("textarea");
  messageArea.placeholder = "Write your message here";
  messageArea.id = "message";
  messageArea.rows = 3;
  messageField.append(messageLabel);
  messageField.append(messageArea);

  const button = document.createElement("button");
  button.textContent = "Submit";
  button.type = "submit";

  form.append(nameField);
  form.append(emailField);
  form.append(messageField);
  form.append(button);
  contact.append(form);

  return contact;
};

const createField = (textLabel = "text", textPlaceholder = "placeholder", inputType = "text") => {
  const divField = document.createElement("div");
  divField.className = "divform";

  const label = document.createElement("label");
  label.textContent = textLabel;
  label.htmlFor = textLabel;

  const input = document.createElement("input");
  input.placeholder = textPlaceholder;
  input.id = textLabel;
  input.type = inputType;
  input.required = true;

  divField.append(label);
  divField.append(input);

  return divField;
};
