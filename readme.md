#Timestamp Microservice API 
Created by sg11

###Timestamp is a microservice API that accepts a date in Unix or natural language format and returns both the Unix and natural language formats. This app is a project for the Back End Certification on FreeCodeCamp.

##User Stories:
 1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)

 2. If it does, it returns both the Unix timestamp and the natural language form of that date.

 3. If it does not contain a date or Unix timestamp, it returns null for those properties.

##Example Usage:
```url
https://api-proj-sng11.c9users.io/December%2025,%202014 
https://api-proj-sng11.c9users.io/1419465600
```
##Example Output:
```json
{"unix":1419465600,"natural":"December 25, 2014"}
```