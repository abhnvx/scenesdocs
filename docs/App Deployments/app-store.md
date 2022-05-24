---
sidebar_position: 1
id: app-store
title: App Store Deployment
sidebar_label: App Store Deployment
---

# App store submission (iOS)

# **Prerequisites**

1. Project that is ready for submission and passes [Apple’s App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)
2. Valid [Apple developer program account](https://developer.apple.com/programs/) (not the Apple Developer Enterprise Program)
3. Computer that runs Mac OS X

# **Step Overview**

Below you will find a list of guides, each describing how to do one of the steps required for submitting an app.

1. Assemble App Store Information
2. Create a Bundle Identifier
3. Create a Certificate Signing Request
4. Create an App Store Production Certificate
5. Create a Production Provisioning Profile
6. Create an App Store Listing
7. Create a Release Build
8. Fill in the Version Information
9. Submit Version for Review
10. Release

# **1. Assemble App Information**

It is very important to collect all of the information you need to submit before you start the process.  [More Information Here](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Appendices/Properties.html#//apple_ref/doc/uid/TP40011225-CH26-SW2).

[Check all the Required Information here](https://www.notion.so/e08fc909338e4110831e7553150f0be7)

# **2. Create A Bundle Identifier**

The bundle identifier is the name of your app, as seen by both the App Store and iOS devices.

1. In your browser, navigate to Apple’s [Developer Portal](https://developer.apple.com/account/overview.action)
2. Log in
3. Click Identifiers
4. Click the “+” in the top right of the screen
5. Name the App ID the same as your app
6. Make sure the Bundle ID follows the standard naming convention: **com.avalonlabs.unext**
7. Check any App Services the app needs, click Continue
8. Verify the services are correct, then click Submit

# **3. Create A Certificate Signing Request**

Certificate Signing Requests are used to link your computer to your Apple developer account.

1. Open a program called KeyChain Access
2. In the top left menu, click Certificate Assistant
3. Click Request a Certificate From a Certificate Authority…User email: Enter your email addressCommon Name: We recommend using the name of the appCA email is not actually required
4. Check Saved to Disk, click Continue
5. Save the Certificate Signing Request for later

# **4. Create An App Store Production Certificate**

Code Signing Certificates are used to link iOS apps to your Apple developer account.

1. In your browser, navigate to Apple’s [Developer Portal](https://developer.apple.com/account/overview.action)
2. Click Certificates
3. Click the “+” in the top right of the screen
4. Click the App Store ProductionCurrently named “App Store and Ad Hoc” under Production
5. Click Continue
6. Upload the Certificate Signing Request created earlier
7. Download the Certificate
8. Install the certificate on your computer by double-clicking
9. Keep this file somewhere safe

# **5. Create A Production Provisioning Profile**

[Provisioning Profiles](https://clearbridgemobile.com/how-to-create-a-distribution-provisioning-profile-for-ios/) are packaged with iOS apps so user’s devices can install them.

1. In your browser, navigate to Apple’s [Developer Portal](https://developer.apple.com/account/overview.action)
2. Log in
3. Click Provisioning Profiles
4. Click the “+” in the top right of the screen
5. Click the App Store Distribution option, click Continue
6. Select the Bundle ID created earlier, click Continue
7. Select the Certificate created earlier, click Continue
8. Make sure the Profile Name follows the standard naming convention: **App Name App Store Distribution**
9. Click Generate
10. Download it
11. Install the provision profile on your computer by double-clicking
12. Keep this file somewhere safe

# **6. Create App Store Listing**

Reserve a slot in the App Store for your app for users to see.

1. Start in your browser, navigate to [iTunes Connect](https://itunesconnect.apple.com/)
2. Log in
3. Click My Apps
4. Click the “+” in the top left of the screen
5. Click “New iOS App”
6. Bundle ID: choose the one created on Developer Portal
7. For convenience, make the SKU match the Bundle ID created earlier
8. Click Create to create the first version listing

# **7. Make The Release Build**

Scenes team will help you in this. Reach out to our support at this step.
Invite developer@avalonmeta.com as an Admin to your Appstore as well as the apple developer account.

# **8. Fill In Version Information**

Users will decide whether or not to install your app based on your store listing.

1. Enter all of the information assembled in step 1
2. Select the build you wish to tie to the version
3. Fill in pricing information
4. Click Save
5. Fit any errors based on the messages that appear and save changes

# **9. Submit Version For Review**

Every app that is submitted to the store has to be reviewed by the Apple team before release.

1. Select the release typeManual release – after the app is accepted, a Release button will appearAutomatic release – as soon as the app is accepted, it will be released
2. Wait for approvalThis process usually takes 2-3 weeks for a new submission
3. If your app was not approved, review the notes in the Resolution Center and make any necessary changes to the app or version information then resubmit

# **10. Release**

Enjoy the final, most satisfying step.

1. If you selected Manual release, click Release your app when ready
2. Wait for the green “Ready for Sale” version status (This might take from 1 hour to 1 day after release)
3. Search for your app on the App Store
4. Celebrate!

When submitting a new version of your app, you will only have to repeat steps 7 through 10.
