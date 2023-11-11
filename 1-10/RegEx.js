const RegEx = /red flag | blue flag/gi;

"red flag blue flag".match(RegEx) // ➞ ["red flag", "blue flag"]

"yellow flag red flag blue flag green flag".match(RegEx) // ➞ ["red flag", "blue flag"]

"pink flag red flag black flag blue flag green flag red flag ".match(RegEx) // ➞ ["red flag", "blue flag", "red flag"]