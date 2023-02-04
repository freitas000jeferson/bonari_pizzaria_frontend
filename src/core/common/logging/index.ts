const info = (...message: any) => {
  if (typeof message === 'string') {
    console.log(`[${getDate()}] [INFO] ${message}`);
  } else {
    console.log(`[${getDate()}] [INFO]`, ...message);
  }
};

const warn = (...message: any) => {
  if (typeof message === 'string') {
    console.warn(`[${getDate()}] [WARN] ${message}`);
  } else {
    console.warn(`[${getDate()}] [WARN]`, ...message);
  }
};

const error = (...message: any) => {
  if (typeof message === 'string') {
    console.error(`[${getDate()}] [ERROR] ${message}`);
  } else {
    console.error(`[${getDate()}] [ERROR]`, ...message);
  }
};

const getDate = () => {
  return new Date().toISOString();
};

const logging = {
  info,
  warn,
  error,
};

export default logging;
