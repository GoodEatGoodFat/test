const winston = require("winston");
const { format } = winston;
const mongoose = require("mongoose");

const timezoned = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "Australia/Melbourne",
  });
};

const customTimestamp = format((info, opts) => {
  if (opts.tz) {
    info.timestamp = timezoned();
  }
  return info;
});

// Connect to your MongoDB database using Mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose model for your logs
const LogInfo = mongoose.model("LogInfo", {
  level: String,
  message: String,
  timestamp: String, // Store the timestamp as a string
});

const logger = winston.createLogger({
  format: winston.format.combine(
    customTimestamp({ tz: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.MongoDB({
      level: "info",
      db: mongoose.connection.db, // Use the Mongoose connection object
      storeHost: true,
      collection: "log_info",
      options: {
        useUnifiedTopology: true,
      },
      timestamp: true,
    }),
  ],
});
