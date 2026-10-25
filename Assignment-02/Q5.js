// Q5: Boolean Logic Access System

// Checks every security condition and prints the result
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Secure only if the alarm is on, door and window are closed, and the owner is inside
  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }
}

// Test several combinations
// Order: isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside
checkSecurity(true, true, true, true);   // everything correct
checkSecurity(true, true, true, false);  // owner is not inside
checkSecurity(false, true, true, true);  // door unlocked
checkSecurity(true, false, true, true);  // window open
checkSecurity(true, true, false, true);  // alarm off
