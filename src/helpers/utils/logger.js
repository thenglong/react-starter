import createDebug from "debug"

const APPID = "APP_ID"

const createLogger = () => {
  const base = new createDebug(APPID)

  // eslint-disable-next-line no-console
  base.log = console.log.bind(console)

  //creates new debug instance with extended namespace
  let debug = base.extend("debug")
  let error = base.extend("error")

  return {
    log: base,
    debug,
    error,
    withTag: tag => {
      // tag logs
      return {
        log: base.extend(tag),
        debug: debug.extend(tag),
        error: error.extend(tag),
      }
    },
  }
}

// Auto-enable debug on Dev env
if (process.env.NODE_ENV === "development") {
  createDebug.enable(APPID + ":*")
}

const logger = createLogger()

export default logger

// logger.debug("hello : ", hi)
// logger.debug('[RENDERED]:', JSON.stringify({}));
// logger.debug('activating...');
// logger.debug('onAuthError', auth);
// logger.error(error);

// logger.withTag('handleSubmit').debug('authToken', firebase.auth);
// logger.withTag("useRequesting").debug("requesting...")
