# Timestamp Microservice

- 把一个字符串作为参数，判断该字符串是不是一个 Unix 时间，或者一个公历日期（例如：January 1, 2016）。
- 如果是，那么它同时返回 Unix 时间戳和公历日期。
- 如果不是，那么它返回 null 。
### Example usage:

https://fccp-timestamp.herokuapp.com/December%2015,%202015

https://fccp-timestamp.herokuapp.com/1450137600
### Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }
{ "unix": null, "natural": null }