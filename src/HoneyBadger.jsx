import Honeybadger from 'honeybadger-js';

const HoneyBadgerClient = Honeybadger.configure({
  apiKey: process.env.HONEY_BADGER_API_KEY,
  environment: process.env.NODE_ENV,
  projectRoot: process.env.APP_HOST,
});

Honeybadger.beforeNotify((notice) => {
  notice.context = {
    currentUserId: document.body.dataset.current_user_id,
    fullStorySessionUrl: window.FS && window.FS.getCurrentSessionURL(),
  };
});

export const configureHoneyBadger = () => HoneyBadgerClient;

export const NotifyError = (error, errorClass = null) => {
  if (error && error.response && error.response.status === 401) return false;
  HoneyBadgerClient.notify(error, errorClass);
  return true;
};

export default HoneyBadgerClient;
