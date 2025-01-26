function isMaliciousContent(input) {
    // Regular expression to detect script tags and other malicious patterns
    const pattern = /<\s*script.*?>.*?<\s*\/\s*script\s*>|on\w+=".*?"|javascript:/gi;
    
    // Check if the input matches the pattern
    if (pattern.test(input)) {
      return true; // Malicious content detected
    }
    
    return false; // No malicious content detected
  }
  
  // Test the function with user input
  const userInput = '<script>alert("This is an XSS attack!")</script>';
  if (isMaliciousContent(userInput)) {
    console.log("Malicious content detected!");
  } else {
    console.log("Content is safe.");
  }
  