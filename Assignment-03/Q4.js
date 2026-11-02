// Q4: Custom Form Builder

class FormBuilder {
  constructor(containerId, fields) {
    this.container = document.getElementById(containerId);
    this.fields = fields;
    this.render();
  }

  // Build the whole form as an HTML string and insert it with innerHTML
  render() {
    let html = '<form id="dynamicForm"><h2>Dynamic Form</h2>';

    this.fields.forEach((field, index) => {
      html += `<label for="field${index}">${field.label}</label>`;
      html += `<input type="${field.type}" id="field${index}">`;
    });

    html += '<button type="submit">Submit</button></form>';
    this.container.innerHTML = html;

    // Attach the submit handler after the form exists
    document.getElementById("dynamicForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = this.getFormData();
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    });
  }

  // Return all entered values as an object keyed by label
  getFormData() {
    const data = {};
    this.fields.forEach((field, index) => {
      data[field.label] = document.getElementById(`field${index}`).value;
    });
    return data;
  }
}

// Describe the form with an array of field objects
const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
  { type: "date", label: "Date of Birth" },
];

new FormBuilder("formContainer", fields);
