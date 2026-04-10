# 🎓 Student Enrollment Form (JsonPowerDB)

---

## 📌 Description

The **Student Enrollment Form** is a web-based application designed to store and manage student data using **JsonPowerDB (JPDB)**.

This project demonstrates how to perform **CRUD operations (Create, Read, Update)** using a simple frontend (HTML, Bootstrap, JavaScript) integrated with a **NoSQL database**.

The form allows users to:

* Enter student details
* Automatically check if a record exists
* Save new data
* Update existing data
* Reset the form

---

## 🚀 Benefits of using JsonPowerDB

Using **JsonPowerDB (JPDB)** provides several advantages:

* ⚡ **High Performance** – Fast JSON-based data handling
* 🧩 **Schema-free** – No rigid table structure required
* 🔗 **Easy Integration** – Works directly with frontend (no backend needed)
* 📦 **Lightweight** – Minimal setup compared to traditional databases
* 🔄 **Real-time operations** – Instant data fetch and update
* 🔐 **Secure access** via connection tokens

---

## 🛠️ Scope of Functionalities

* ✔️ Add new student record (Save)
* ✔️ Fetch student data using Roll No (Primary Key)
* ✔️ Update existing student details
* ✔️ Reset form to initial state
* ✔️ Input validation (no empty fields)
* ✔️ Dynamic button enable/disable logic

---

## 📋 Input Fields

| Field Name      | Description         |
| --------------- | ------------------- |
| Roll No         | Primary Key         |
| Full Name       | Student Name        |
| Class           | Class/Grade         |
| Birth Date      | Date of Birth       |
| Address         | Residential Address |
| Enrollment Date | Admission Date      |

---

## 🔄 Application Flow

1. On page load → only **Roll No field is enabled**
2. User enters Roll No:

   * If NOT in database → enable **Save**
   * If EXISTS → fetch data and enable **Update**
3. User fills/edits form
4. Click:

   * **Save** → store new record
   * **Update** → modify existing record
   * **Reset** → clear form

---

## 🧪 Example Usage

* Enter Roll No: `101`
* If not present → fill details → click **Save**
* Enter same Roll No again → data auto loads → click **Update**

---

## 🖼️ Illustrations

### Form UI

* Clean Bootstrap-based layout
* Responsive design
* User-friendly controls



---

## 📂 Technologies Used

* HTML5
* CSS3 (Bootstrap)
* JavaScript
* jQuery
* JsonPowerDB (JPDB)

---

## 📦 Release History

### 🔹 v1.0.0 (Initial Release)

* Basic form UI created
* Integrated with JsonPowerDB
* Implemented Save, Update, Reset functionality
* Added validation and button state control

---

## 📊 Project Status

✅ Completed (Basic Version)
🔄 Future Improvements Possible

---

## 🚧 Future Enhancements

* Add Delete functionality
* Improve UI with modern frameworks (React)
* Add search/filter feature
* Display records in table format
* Add form validation messages (inline)

---

## 📚 Sources

* JsonPowerDB Official Documentation
* Bootstrap Documentation
* jQuery Documentation
* GitHub Markdown Guide

---

## ℹ️ Other Information

* Replace `connToken` in `index.js` with your own JsonPowerDB token
* Ensure internet connection for CDN libraries
* Works best on modern browsers (Chrome, Edge)

---

## 👨‍💻 Author

Maithri
---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork & improve!

---
