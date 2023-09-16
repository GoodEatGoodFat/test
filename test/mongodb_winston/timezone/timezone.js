const winston = require("winston");
const { format, level, prettyPrint } = require("winston");

const timezoned = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "Australia/Melbourne",
  });
};

require("winston-daily-rotate-file");

var transport = new winston.transports.DailyRotateFile({
  filename: "application-%DATE%.log",
  datePattern: "YYYY-MM-DD-HH",
  zippedArchive: true,
  maxSize: "1g",
  format: format.combine(
    format.timestamp({ format: timezoned }),
    format.prettyPrint()
  ),
  level: "info",
});

transport.on("rotate", function (oldFilename, newFilename) {
  // do something fun
});

var logger = winston.createLogger({
  transports: [transport],
});

module.exports.logger = logger;
