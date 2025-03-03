const SLACK_URL_PATTERN = 'https://*.app.slack.com/*';

export const getSlackTabs = () => {
  return chrome.tabs.query({ url: SLACK_URL_PATTERN });
};
