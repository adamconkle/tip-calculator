// Function to calculate a predefined tip percentage
function calculateTip(selectedPercentage) {
  // Get the bill total from the input field
  const bill = parseFloat(document.getElementById("billInput").value);
  
  // Validate the input
  if (isNaN(bill) || bill <= 0) {
     alert("Please enter a valid bill amount.");
      return;
  }
    
    // Calculate tip amounts for 10% 15%, 20%
  const tip10 = bill * 0.10;  
  const tip15 = bill * 0.15;
  const tip20 = bill * 0.20;


  // Calculate the total for the selected tip percentage
  const selectedTip = bill * (selectedPercentage / 100);
  const totalWithSelectedTip = bill + selectedTip;

  
  // Update the DOM with the results
  document.getElementById("billTotalText").innerHTML = `Bill Total = $${bill.toFixed(2)}`;
  document.getElementById("tipAmount10").innerHTML = `10% Tip = $${tip10.toFixed(2)}`;
  document.getElementById("tipAmount15").innerHTML = `15% Tip = $${tip15.toFixed(2)}`;
  document.getElementById("tipAmount20").innerHTML = `20% Tip = $${tip20.toFixed(2)}`;
  document.getElementById("newTotal").innerHTML = `New Total = $${totalWithSelectedTip.toFixed(2)}`;
}

// The following handles the custom tip portion

// Function to handle custom tip input
function customTip() {
  const bill = parseFloat(document.getElementById("billInput").value);
  const customPercentage = parseFloat(prompt("Enter your tip percentage (e.g., 18 for 18%)"));

  // Validate inputs
  if (isNaN(bill) || bill <= 0 || isNaN(customPercentage) || customPercentage <= 0) {
    alert("Please enter valid numbers.");
    return;
  }
  
    // Calculate the custom tip and total
  const customTip = bill * (customPercentage / 100);
  const totalWithCustomTip = bill + customTip;

  // Update the DOM with the custom tip results
  document.getElementById("billTotalText").innerHTML = `Bill Total = $${bill.toFixed(2)}`;       
  document.getElementById("tipAmountCustom").innerHTML = `Custom Tip (${customPercentage}%) = $${customTip.toFixed(2)}`;
  document.getElementById("newTotal").innerHTML = `New Total = $${totalWithCustomTip.toFixed(2)}`;
}
