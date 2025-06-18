/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================
🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.
*/

// ✅ Corrected JSON
const correctedBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;

/*
🛠 List of Fixes:

1. ❌ Missing comma after "checkInDate"
   ✅ FIX: Added a comma between "checkInDate" and "checkOutDate"
   ❗ JSON needs commas between key-value pairs.

2. ❌ Unquoted "name" key in Alice's object
   ✅ FIX: Wrapped "name" in double quotes
   ❗ All keys in JSON must be double-quoted strings.

3. ❌ Invalid value: "age": undefined
   ✅ FIX: Replaced undefined with null
   ❗ JSON does not support undefined; null is the correct placeholder.

4. ❌ Incomplete email for Bob
   ✅ FIX: Changed "bob.smith@example" to "bob.smith@example.com"
   ❗ Technically not a syntax error, but not a valid email format.

5. ❌ Trailing comma in amenities array
   ✅ FIX: Removed the comma after "Parking"
   ❗ JSON does not allow trailing commas in arrays or objects.
*/

/*
💬 Follow-Up Questions:

1️⃣ What tools or techniques did you use to identify the errors?
🔹 I used JSONLint (https://jsonlint.com/) to validate and locate syntax issues.
🔹 Syntax highlighting in VS Code helped visually spot mistakes like unquoted keys and missing commas.

2️⃣ How did you confirm that your corrected JSON file was valid?
🔹 I pasted it into JSONLint and received a “valid JSON” confirmation message.

3️⃣ Which errors were the most difficult to spot? Why?
🔹 The missing comma between "checkInDate" and "checkOutDate" was tricky because visually it blended into the structure.
🔹 The invalid email wasn’t a syntax error, so it flew under the radar.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
🔹 Always write JSON in a code editor with linting and syntax highlighting.
🔹 Use online validators like JSONLint before pushing to production.
🔹 Avoid writing JSON by hand—use form-based tools or templates if possible.
*/

