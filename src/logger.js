import logger from "loglevel"

logger.enableAll()
if (process.env.NODE_ENV === "production") {
  logger.disableAll()
}

const log = {
  info: logger.info,
  trace: logger.trace,
  debug: logger.debug,
  info: logger.info,
  warn: logger.warn,
  error: logger.error,
}

export default log
