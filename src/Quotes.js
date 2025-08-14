function Quotes() {
  let fruites = ["apple", "grape", "peach", "banana", "cherry"];
  try {
    if (fruites.includes("apple")) {
      console.log("Here is the apple", fruites);
    } else {
      console.log("No apple ;(");
    }
  } catch (err) {
    console.log("An error occurred:", err);
  }
}

Quotes();
