# Slack PWA Enhancements

A Chrome extension that enhances the Slack Progressive Web App (PWA) with one key improvement:

1. **Automatic Activity Status** - Keeps your Slack status as "Available" based on your actual system activity. No more manually changing your status or having Slack incorrectly show you as "Offline".

## Why Use This Extension?

### Activity Status Enhancement

Slack has a frustrating behavior of marking you as "Offline" after a short period of inactivity within the Slack window itself, even if you're actively working on your computer in other applications. This extension simulates activity within Slack when your system is active, maintaining your "Available" status accurately.

## Installation

### Build and Install Manually

1. Clone the repository:
   ```bash
   git clone https://github.com/therichkid/slack-pwa-enhancements.git
   cd slack-pwa-enhancements
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Build the extension (choose one method):
   ```bash
   # Create a ZIP file for installation
   pnpm run package

   # OR create a CRX file for installation
   pnpm run release
   ```

4. Install in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top-right corner
   - For ZIP installation:
     - Click "Load unpacked" and select the `dist` folder
   - For CRX installation:
     - Drag and drop the generated CRX file from the `releases` folder onto the extensions page

## Usage

1. After installation, the extension will automatically run in the background
2. Open Slack in Chrome or as a PWA
3. The extension will:
   - Keep your Slack status as "Available" when you're active on your computer

No configuration is needed! The extension works automatically with the following behaviors:
- Checks for system activity every minute
- Simulates F13 key presses in Slack when you're active elsewhere on your computer

## Privacy and Permissions

This extension:
- Only runs on Slack websites (app.slack.com)
- Does not collect or transmit any data
- Uses permissions only for the specific features mentioned:
  - `alarms`: For scheduling activity checks
  - `idle`: To detect system activity state
  - `scripting`: To execute scripts in Slack tabs
  - `tabs`: To identify Slack tabs

## Development

If you want to contribute or build the extension yourself:

```bash
# Install dependencies
pnpm install

# Build the extension
pnpm run build

# Package the extension for distribution
pnpm run package

# Create a versioned release
pnpm run release
```

## License

ISC License

## Author

Richard Zille
