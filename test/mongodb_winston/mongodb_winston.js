const winston = require("winston");

const { MongoClient } = require("mongodb");
const MongoDB = require("winston-mongodb").MongoDB;

// MongoDB 连接字符串，包括用户名和密码
const mongoURI = "mongodb://username:password@localhost:27017/mydatabase";

// 创建 MongoDB 连接
const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");

    // 创建 MongoDB Transport
    const mongoTransport = new MongoDB({
      db: client.db(), // 使用已连接的数据库实例
      level: "info", // 选择日志级别
      options: {
        collection: "logs", // MongoDB 集合的名称
        storeHost: true, // 存储主机信息
        capped: true, // 启用集合封顶
        cappedMax: 10000, // 封顶集合的最大文档数
      },
    });

    // 创建 Winston 日志记录器并添加 MongoDB Transport
    const logger = winston.createLogger({
      transports: [mongoTransport],
    });

    // 记录日志
    logger.info("This is a log message.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
