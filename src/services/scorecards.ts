import { parseCSV } from "utilities";

// Handle making a fetch to an external source, formata data
// then handle success or error states as need
export function getAllScoreCards() {
    return fetch(`data/edu-scorecard.csv`, {
        method: "GET",
        headers: {
            "Content-Type": "text"
        }
    })
    // Check what our response text is
    .then(response => response.text())
    // Parse the CSV and return an object
    .then(parseCSV).catch((error) => {
        console.error(error);
        // Some sort of error handling to surface that visually to a user...
      });
};