# Soulframe Weapon Tracker

This is an unofficial, community-driven web application to track your weapon progress in Soulframe (P12). It uses client-side JavaScript, React, and Google Drive's App Data folder for persistent, secure cloud syncing.

## Features

* All Weapons as of P12 (will be updated as new preludes release)
* Local Storage Persistence (via browser cookies)
* Local export/import
* Secure Google Drive Sync

---

### A. Secure Deployment Prerequisites

To enable the Google Drive synchronization feature and secure your app, you must have the following:

1.  Google API Credentials
    * A Google API Key (`AIzaSy...`)
    * A Google OAuth 2.0 Client ID (`7346...apps.googleusercontent.com`)
    * *Note: Ensure the Google Drive API is enabled for your project in the Google Cloud Console.*
2.  Free Cloudflare account connected to your GitHub account

### B. How to deploy on Cloudflare Pages
1. Fork this repository
2. Connect a new pages project with your forked repository
3. Choose nothing as the build preset or build command (basically dont change anything) EXCEPT
4. provide ENV variables to Cloudflare -

   a) `GOOGLE_CLIENT_ID` (make a new client in oauth consent screen in google cloud console) and

   b) `GOOGLE_API_KEY` [(from here)](https://console.cloud.google.com/apis/credentials)
5. Deploy the project
