import { getSlackTabs } from '../helpers/tab';

const ACTIVITY_CHECK_INTERVAL_MINUTES = 1;
const IDLE_THRESHOLD_MINUTES = 2;
const ALARM_NAME = 'SLACK_ACTIVITY_CHECK';

export const initializeSlackActivity = () => {
  try {
    setupActivityCheck();
  } catch (error) {
    console.error('Failed to initialize Slack activity manager:', error);
  }
};

const setupActivityCheck = () => {
  chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create(ALARM_NAME, {
      periodInMinutes: ACTIVITY_CHECK_INTERVAL_MINUTES,
    });
  });

  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === ALARM_NAME) {
      checkAndUpdateActivity();
    }
  });
};

const checkAndUpdateActivity = () => {
  chrome.idle.queryState(IDLE_THRESHOLD_MINUTES * 60, (state) => {
    if (state !== 'locked') {
      updateSlackActivity();
    }
  });
};

const updateSlackActivity = async () => {
  const tabs = await getSlackTabs();

  tabs.forEach((tab) => {
    if (tab.id) {
      chrome.scripting
        .executeScript({
          target: { tabId: tab.id },
          func: simulateKeyPress,
        })
        .catch((error) => {
          console.error('Failed to execute script:', error);
        });
    }
  });
};

const simulateKeyPress = () => {
  const eventOptions = {
    key: 'F13',
    code: 'F13',
    bubbles: true,
    cancelable: true,
    view: window,
  };

  const keyDownEvent = new KeyboardEvent('keydown', eventOptions);
  const keyUpEvent = new KeyboardEvent('keyup', eventOptions);

  document.dispatchEvent(keyDownEvent);
  document.dispatchEvent(keyUpEvent);

  console.log('Activity maintained with F13 key press');
};
