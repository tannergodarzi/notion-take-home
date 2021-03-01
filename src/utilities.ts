export function parseCSV(csv: string) {
    // Convert CSV string to an array with each line of the CSV being an element.
    const lines = csv.split('\n');
    // Convert each element/string from the previous array into a nested array representing cells
    const data = lines.map(v=>v.split(','));
    // Get the first array, that presents the CSV header
    const headers = data && data.shift();
    // Craft an object representing attributes pulled from header
    const output = data.map((value)=> {
        // If for some reason headers doesn't exist, just do nothing
        if (!headers) {
            return null;
        }        
        let entry = {};
        // For each header, find a corresponding cell
        for (let i = 0; i < headers.length; i++) {
            // Append to entry object...
            Object.assign(entry, {[headers[i]]: value[i]});
        }
        // We have our data!
        return entry;
    });
    
    return output;
}

// Remove common prefixes on URLs. 
export function URLPrettifier(url: string) {
    return url.split("www.").join("").split("https://").join("").split("http://").join("");
}

// Find a string in an object
export function stringInObject(obj: Array<string>, string: string) {
    // Convert just the values of an object in an array.
    // If the string we're searching for exists in the array of values, the index will be 0 or above
    // Return the element
    return Object.values(obj).findIndex((element) => element.toLowerCase().includes(string.toLowerCase())) !== -1;
}