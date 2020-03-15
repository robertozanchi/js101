// Problem 6

// How does Array.prototype.fill work?
// Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

// I check the docs
// Yes, it is destructive, it returns the modified array.
// Fills array with 1, from fill with 0 from position 2 until position 4.
