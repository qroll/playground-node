import winston from 'winston';

const customFormat = (options) => {
  // let timestamp = options.timestamp();
  let level = options.level.toUpperCase();
  let message = options.message;

  if (process.env.NODE_ENV === 'local') {
    timestamp = config.colorize(options.level, options.timestamp());
    level = config.colorize(options.level, options.level.toUpperCase());
  }

  return `${JSON.stringify(options.meta)}`
};

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      timestamp: function () {
        return Date.now();
      },
      colorize: false,
      level: 'info',
      // json: true,
      formatter: customFormat
    })
		/*,new winston.transports.File({
			filename: 'debug.log',
			level: 'verbose',
			json: false
		})*/
  ]
});

logger.info("what is this", { metadata: { stringField: "This is a string field\"", nested: { level1: "test", level2: { level3: "test" } } } }, { test: "wow" });
logger.info("what is this", { foo: "bar" }, { test: "wow" }, { baz: "duex" });