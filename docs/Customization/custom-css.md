---
sidebar_position: 1
id: custom-css
title: Custom CSS
sidebar_label: Custom CSS
---

# Custom CSS - Guidelines

## Points to be noted

- You can apply all CSS properties to every class added here.
- Click on this link to learn how to edit an element which has no class added to it.

## Main Classes

### **Background colour of the app**

```css
.main--background {
  background-color: rgb(249, 250, 251);
}
```

### Icon colour of app (eg: search icon right panel)

```css
.main__icon {
  color: rgb(31, 41, 55);
}
```

### Divider colour of the app (eg: divider in forum posts before forum post actions)

```css
.divider {
  border-color: rgb(243, 244, 246);
}
```

<br/>

## Tab Classes

### Tab Container

```css
.tab__container {
  border-color: rgb(229, 231, 235);
}
```

### Tab Main Class

```css
.tab {
  color: rgb(156, 163, 175);
  border-color: rgb(243, 244, 246);
}
```

### Tab Active-State

```css
.tab--active {
  border-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}
```

<br/>

## Card Classes

### Main Card class

```css
.card {
  background-color: rgb(255, 255, 255);
}
```

### Card footer Class

```css
.card__footer {
  background-color: rgb(249, 250, 251);
}
```

### Card shimmer(or placeholders)

This is on card that will be show when data is being fetched (eg: resource & forum posts)

```css
.card__shimmer {
  background-color: rgb(229, 231, 235);
}
```

<br/>

## Sidepanel Classes (Ex. Profile)

### Sidepanel Main Class

```css
.sidepanel__container {
  background-color: rgb(255, 255, 255);
}
```

<br/>

## Header Classes

### Main Header Class

```css
.header {
  background-color: rgb(255, 255, 255);
}
```

<br/>

## Form Step Classes in Onboarding

### Background colour of steps pending in progress bar + Main Class

(eg: verifyEmail page)

```css
.form__step--active {
  border-color: rgb(88, 90, 218) !important;
}

.form__step {
  border-color: rgb(229, 231, 235);
}
```

<br/>

## Text Classes

If you have some colour like `text-gray-600` then you can use the class closest to it like `text__description` instead.

### Title text (eg: title in forum posts)

```css
.text__title {
  color: rgb(17, 24, 39);
}
```

### Body text (eg: body of forum posts)

(eg: verifyEmail page)

```css
.text__body {
  color: rgb(31, 41, 55);
}
```

### Description text (eg: list of access levels shown in userProfile sidebar)

```css
.text__description {
  color: rgb(107, 114, 128);
}
```

### Info text (eg: time ago shown on forum posts)

```css
.text__info {
  color: rgb(156, 163, 175);
}
```

### Text and icons in header

```css
.text__header {
  color: rgb(17, 24, 39);
}
```

### Links(eg: read more in events card)

```css
.text__link {
  /* default accent color */
  color: rgb(88, 90, 218) !important;
}
```

<br/>

## Button Classes

### Primary Button & Community Colour (eg: Add To Calendar button in event card)

```css
/* It overrides appearance primary color */
.btn__primary {
  background-color: rgb(88, 90, 218) !important;
  color: rgb(255, 255, 255);
}
.btn__primary:hover {
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.btn__primary:active {
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.75);
}
.btn__primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Calendar Channel Top Tab

```css
.btn__outline__primary {
  background-color: transparent;
  color: rgb(88, 90, 218) !important;
  border-color: rgb(88, 90, 218) !important;
}
```

### Sidebar Button (Eg. Add a new Channel button sidebar)

```css
.btn__outline__dashed {
  color: rgb(156, 163, 175);
  border-color: rgb(156, 163, 175);
}
```

### Link Buttons (eg: unselected button in scheduled or past in calendar channel

```css
.btn__link {
  color: rgb(17, 24, 39);
}
```

### Secondary Button (Eg. upload photo in edit profile)

```css
.btn__light {
  background-color: rgb(255, 255, 255);
  color: rgb(31, 41, 55);
  border: 1px solid rgb(209, 213, 219);
}
.btn__light:hover {
  border: 1px solid rgb(156, 163, 175);
}
.btn__light:active {
  border: 1px solid rgba(209, 213, 219, 0.5);
  color: rgba(31, 41, 55, 0.5);
}
.btn__light:disabled {
  border: 1px solid rgb(209, 213, 219);
}
```

### Danger Buttons (eg: send report button in report modal )

```css
.btn__danger {
  background-color: rgb(239, 68, 68);
  color: rgb(255, 255, 255);
}
```

<br/>

## Form Element Classes

### Input Placeholder (Eg. Input in Edit Profile)

```css
.input {
  border-color: rgb(209, 213, 219);
  color: rgb(17, 24, 39);
}

.input::placeholder {
  color: rgb(107, 114, 128);
  opacity: 1;
}

.input:focus {
  border-color: rgb(107, 114, 128);
  --tw-ring-color: rgb(107, 114, 128);
}
```

### Input Placeholder - Borderless (Eg. Input in title of Create Resource Post)

```css
.input__borderless {
  color: rgb(17, 24, 39);
}

.input__borderless::placeholder {
  color: rgb(107, 114, 128);
}
```

### Dropdown Classes

```css
.select__button {
  background-color: rgb(255, 255, 255);
  color: rgb(17, 24, 39);
  border-color: rgb(209, 213, 219);
}

.select__button:focus {
  border-color: rgb(107, 114, 128);
  --tw-ring-color: rgb(107, 114, 128);
}

.select__options__container {
  background-color: rgb(255, 255, 255);
  border-color: rgba(209, 213, 219, 0.1);
}

.select__option {
  color: rgb(17, 24, 39);
}

.select__option--active {
  background-color: rgb(243, 244, 246);
}
```

### Menu Options (Eg. Menu that opens after clicking user profile icon in header)

```css
.menu__options__container {
  background-color: rgb(255, 255, 255);
  border-color: rgba(209, 213, 219, 0.1);
}

.menu__option {
  color: rgb(17, 24, 39);
}

.menu__option--active {
  background-color: rgb(243, 244, 246);
}
```

<br/>

## Table Classes

### Table (Eg. Table in moderation Settings)

```css
.table__container {
  border: 1px solid rgb(229, 231, 235);
}
```

### Table - Header

```css
.table__head {
  background-color: rgb(249, 250, 251);
  color: rgb(107, 114, 128);
}
```

### Table - Body

```css
.table__body {
  background-color: rgb(255, 255, 255);
  color: rgb(107, 114, 128);
}
```

<br/>

## Highlight Classes

In this Highlight class wherever you need a light background (and you do not want to use a card component).

### Highlight (eg. Highlight color shown when selecting users in allocate coins to send coins)

```css
.highlighted {
  background-color: rgb(243, 244, 246);
}
```

### Success - Text

These text classes are defined here so that they can override above text colours.

```css
.text__success {
  color: rgb(16, 185, 129);
}
```

### Danger - Text

```css
.text__danger {
  color: rgb(239, 68, 68);
}
```

<br/>

## Chat Classes

Chat Classes are all the elements of the chat channel and are separate from other app classes.

### Main Chat - Background

```css
.chat {
  background-color: rgb(255, 255, 255);
}
```

### Pinned Chat Class

```css
.chat__pinned {
  background-color: rgba(255, 255, 255);
}

.chat__pinned__divider {
  background-color: rgb(31, 41, 55);
}
```

### Chat - Header - Date

```css
.chat__header__date {
  background-color: rgb(243, 244, 246);
  color: rgb(31, 41, 55);
}
```

### Chat - Sent

```css
/* sender name */
.chat__sender__name {
  color: rgb(31, 41, 55);
}

/* sender message container */
.chat__sent__container {
  background-color: rgb(88, 90, 218) !important;
  border-color: rgb(243, 244, 246);
}

/* sender message text */
.chat__sent__message {
  color: rgb(255, 255, 255);
}

/* sender message time */
.chat__sent__time {
  color: rgb(255, 255, 255);
}
```

### Chat - Received

```css
/* recieved message container */
.chat__received__container {
  background-color: rgb(243, 244, 246);
  border-color: rgb(243, 244, 246);
}

/* recieved message text */
.chat__received__message {
  color: rgb(31, 41, 55);
}

/* recieved message time */
.chat__received__time {
  color: rgb(156, 163, 175);
}
```

### Chat - Reply

```css
.chat__reply__container {
  background-color: rgba(17, 24, 39, 0.4);
}

.chat__reply__name {
  color: rgb(255, 255, 255);
}

.chat__reply__message {
  color: rgb(255, 255, 255);
}
```

### Chat - Input Footer - Container

```css
.chat__footer__container {
  background-color: rgb(255, 255, 255);
  color: rgb(17, 24, 39);
}

.chat__footer__input--container {
  background-color: rgb(255, 255, 255);
  color: rgb(17, 24, 39);
}

.chat__footer__btn {
  background-color: rgba(31, 41, 55, 0.1);
  color: rgb(55, 65, 81);
}
.chat__footer_send__btn {
  background-color: rgb(88, 90, 218) !important;
  color: rgb(255, 255, 255) !important;
}
.chat__footer__container > textarea {
  background-color: rgb(243, 244, 246);
  color: rgb(17, 24, 39);
}
.chat__footer__container > textarea::placeholder {
  color: rgb(107, 114, 128);
}
```

### GIF and Emoji Picker Chat Channel

```css
.emoji-picker-react input.emoji-search {
  background-color: rgb(248, 248, 248);
  border-color: rgb(209, 213, 219);
  color: rgb(17, 24, 39);
}

.emoji-picker-react input.emoji-search::placeholder {
  color: rgb(137, 138, 141);
  opacity: 1;
}

.emoji-picker-react input.emoji-search:focus {
  border-color: rgb(107, 114, 128);
  --tw-ring-color: rgb(107, 114, 128);
}

.emoji-picker-react .emoji-group::before {
  background-color: transparent;
  color: rgb(112, 113, 116);
}
```

<br/>

## Stage Classes

The right panel on the Stage Channel (Chat Panel) is given separate classes from the rest of the app.

### Stage Classes

```css
.stage__layout {
  color: rgb(255, 255, 255);
}
.stage__card {
  color: rgb(249, 250, 251);
}
.stage__border {
  border-color: rgb(243, 244, 246);
}
.stage__rightpanel {
  background-color: rgb(255, 255, 255);
}
.stage__rightpanel__tab__container {
  border-color: rgb(229, 231, 235);
}
.stage__rightpanel__tab {
  color: rgb(156, 163, 175);
  border-color: rgb(243, 244, 246);
}
.stage__rightpanel__tab:hover {
  color: rgb(156, 163, 175);
  border-color: rgb(243, 244, 246);
}
.stage__rightpanel__tab--active {
  color: rgb(31, 41, 55);
  border-color: rgb(31, 41, 55);
}
.stage__rightpanel__tab--active:hover {
  color: rgb(31, 41, 55);
  border-color: rgb(31, 41, 55);
}
.stage__rightpanel__highlighted {
  background-color: rgb(243, 244, 246);
}
.stage__rightpanel__title {
  color: rgb(31, 41, 55);
}
.stage__rightpanel__body {
  color: rgb(55, 65, 81);
}
.stage__rightpanel__info {
  color: rgb(156, 163, 175);
}
.stage__rightpanel__chat__footer__container {
  background-color: rgb(255, 255, 255);
  color: rgb(17, 24, 39);
}
.stage__rightpanel__chat__footer__btn {
  background-color: rgba(31, 41, 55, 0.1);
  color: rgb(55, 65, 81);
}
.stage__rightpanel__chat__footer__send__btn {
  background-color: rgb(88, 90, 218) !important;
  color: rgb(255, 255, 255) !important;
}
.stage__rightpanel__chat__footer__container > textarea {
  background-color: rgb(243, 244, 246);
  color: rgb(17, 24, 39);
}
.stage__rightpanel__chat__footer__container > textarea::placeholder {
  color: rgb(107, 114, 128);
}
```

<br/>

## DM (Inbox) Classes

```css
.inbox__sidebar__header {
  background-color: rgb(255, 255, 255);
}

.inbox__chat__header {
  background-color: rgb(255, 255, 255);
}
```

<br/>

## Text Editor Classes

```css
/* Placeholder of tinymce editor */
.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
  color: rgb(31, 41, 55);
}

/* links in tinymce editor */
#tinymce a {
  color: rgb(88, 90, 218);
}
```

<br/>

## Misc Classes

```css
.main_background_on_hover:hover {
  background-color: rgb(249, 250, 251);
}
```

<br/>

## Boilerplate Code

```css
/*This is the Custom CSS feature on Scenes. We allow you to change the look and feel of your entire community with a fine tipped paintbrush. So go wild!
We've included some boiler plate code below containing all our configurable classes. Feel free to change whatever you feel like, colors and more!*/

/* main container */
.main--background {
  background-color: rgb(249, 250, 251);
}
.main__icon {
  color: rgb(31, 41, 55);
}
.divider {
  border-color: rgb(243, 244, 246);
}
/* tab classes */
.tab__container {
  border-color: rgb(229, 231, 235);
}
.tab {
  color: rgb(156, 163, 175);
  border-color: rgb(243, 244, 246);
}

.tab--active {
  border-color: rgb(31, 41, 55);
  color: rgb(31, 41, 55);
}
/* card container */
.card {
  background-color: rgb(255, 255, 255);
}
.card__footer {
  background-color: rgb(249, 250, 251);
}
.card__shimmer {
  background-color: rgb(229, 231, 235);
}

/* Sidepanel */
.sidepanel__container {
  background-color: rgb(255, 255, 255);
}

/* header main */
.header {
  background-color: rgb(255, 255, 255);
}

.form__step--active {
  border-color: rgb(88, 90, 218) !important;
}
.form__step {
  border-color: rgb(229, 231, 235);
}

/* texts */
.text__title {
  color: rgb(17, 24, 39);
}
.text__body {
  color: rgb(31, 41, 55);
}
.text__description {
  color: rgb(107, 114, 128);
}
.text__info {
  color: rgb(156, 163, 175);
}
.text__header {
  color: rgb(17, 24, 39);
}
.text__link {
  /* default accent color */
  color: rgb(88, 90, 218) !important;
}
/* buttons */
/* It overrides appearance primary color */
.btn__primary {
  background-color: rgb(88, 90, 218) !important;
  color: rgb(255, 255, 255);
}
.btn__primary:hover {
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.btn__primary:active {
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.75);
}
.btn__primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* calendar top button */
.btn__outline__primary {
  background-color: transparent;
  color: rgb(88, 90, 218) !important;
  border-color: rgb(88, 90, 218) !important;
}
/* sidebar add new buttons */
.btn__outline__dashed {
  color: rgb(156, 163, 175);
  border-color: rgb(156, 163, 175);
}
/* calendar unselected button */
.btn__link {
  color: rgb(17, 24, 39);
}
/* secondary button */
.btn__light {
  background-color: rgb(255, 255, 255);
  color: rgb(31, 41, 55);
  border: 1px solid rgb(209, 213, 219);
}
.btn__light:hover {
  border: 1px solid rgb(156, 163, 175);
}
.btn__light:active {
  border: 1px solid rgba(209, 213, 219, 0.5);
  color: rgba(31, 41, 55, 0.5);
}
.btn__light:disabled {
  border: 1px solid rgb(209, 213, 219);
}

/* red button */
.btn__danger {
  background-color: rgb(239, 68, 68);
  color: rgb(255, 255, 255);
}

/* inputs */
.input {
  border-color: rgb(209, 213, 219);
  color: rgb(17, 24, 39);
}
.input::placeholder {
  color: rgb(107, 114, 128);
  opacity: 1;
}
.input:focus {
  border-color: rgb(107, 114, 128);
  --tw-ring-color: rgb(107, 114, 128);
}
.input__borderless {
  color: rgb(17, 24, 39);
}
.input__borderless::placeholder {
  color: rgb(107, 114, 128);
}

/* dropdown */
.select__button {
  background-color: rgb(255, 255, 255);
  color: rgb(17, 24, 39);
  border-color: rgb(209, 213, 219);
}
.select__button:focus {
  border-color: rgb(107, 114, 128);
  --tw-ring-color: rgb(107, 114, 128);
}
.select__options__container {
  background-color: rgb(255, 255, 255);
  border-color: rgba(209, 213, 219, 0.1);
}
.select__option {
  color: rgb(17, 24, 39);
}
.select__option--active {
  background-color: rgb(243, 244, 246);
}

/* menu */
.menu__options__container {
  background-color: rgb(255, 255, 255);
  border-color: rgba(209, 213, 219, 0.1);
}
.menu__option {
  color: rgb(17, 24, 39);
}
.menu__option--active {
  background-color: rgb(243, 244, 246);
}

/* table */
.table__container {
  border: 1px solid rgb(229, 231, 235);
}
.table__head {
  background-color: rgb(249, 250, 251);
  color: rgb(107, 114, 128);
}
.table__body {
  background-color: rgb(255, 255, 255);
  color: rgb(107, 114, 128);
}

/* hightlight */
.highlighted {
  background-color: rgb(243, 244, 246);
}

/* success & danger */
.text__success {
  color: rgb(16, 185, 129);
}
.text__danger {
  color: rgb(239, 68, 68);
}

/* main chat */
.chat {
  background-color: rgb(255, 255, 255);
}
.chat__pinned {
  background-color: rgba(255, 255, 255);
}
.chat__pinned__divider {
  background-color: rgb(31, 41, 55);
}
/* chat date */
.chat__header__date {
  background-color: rgb(243, 244, 246);
  color: rgb(31, 41, 55);
}
/* chat sent */
.chat__sender__name {
  color: rgb(31, 41, 55);
}
.chat__sent__container {
  background-color: rgb(88, 90, 218) !important;
  border-color: rgb(243, 244, 246);
}
.chat__sent__message {
  color: rgb(255, 255, 255);
}
.chat__sent__time {
  color: rgb(255, 255, 255);
}
/* chat recieved */
.chat__received__container {
  background-color: rgb(243, 244, 246);
  border-color: rgb(243, 244, 246);
}
.chat__received__message {
  color: rgb(31, 41, 55);
}
.chat__received__time {
  color: rgb(156, 163, 175);
}
/* chat reply */
.chat__reply__container {
  background-color: rgba(17, 24, 39, 0.4);
}
.chat__reply__name {
  color: rgb(255, 255, 255);
}
.chat__reply__message {
  color: rgb(255, 255, 255);
}
/* chat input footer */
.chat__footer__container {
  background-color: rgb(255, 255, 255);
  color: rgb(17, 24, 39);
}

.chat__footer__input--container {
  background-color: rgb(255, 255, 255);
  color: rgb(17, 24, 39);
}

.chat__footer__btn {
  background-color: rgba(31, 41, 55, 0.1);
  color: rgb(55, 65, 81);
}
.chat__footer_send__btn {
  background-color: rgb(88, 90, 218) !important;
  color: rgb(255, 255, 255) !important;
}
.chat__footer__container > textarea {
  background-color: rgb(243, 244, 246);
  color: rgb(17, 24, 39);
}
.chat__footer__container > textarea::placeholder {
  color: rgb(107, 114, 128);
}

/* Gif and emoji picker chat channel */
.emoji-picker-react input.emoji-search {
  background-color: rgb(248, 248, 248);
  border-color: rgb(209, 213, 219);
  color: rgb(17, 24, 39);
}

.emoji-picker-react input.emoji-search::placeholder {
  color: rgb(137, 138, 141);
  opacity: 1;
}
.emoji-picker-react input.emoji-search:focus {
  border-color: rgb(107, 114, 128);
  --tw-ring-color: rgb(107, 114, 128);
}

.emoji-picker-react .emoji-group::before {
  background-color: transparent;
  color: rgb(112, 113, 116);
}

/* stage channel */
.stage__layout {
  color: rgb(255, 255, 255);
}
.stage__card {
  color: rgb(249, 250, 251);
}
.stage__border {
  border-color: rgb(243, 244, 246);
}
.stage__rightpanel {
  background-color: rgb(255, 255, 255);
}
.stage__rightpanel__tab__container {
  border-color: rgb(229, 231, 235);
}
.stage__rightpanel__tab {
  color: rgb(156, 163, 175);
  border-color: rgb(243, 244, 246);
}
.stage__rightpanel__tab:hover {
  color: rgb(156, 163, 175);
  border-color: rgb(243, 244, 246);
}
.stage__rightpanel__tab--active {
  color: rgb(31, 41, 55);
  border-color: rgb(31, 41, 55);
}
.stage__rightpanel__tab--active:hover {
  color: rgb(31, 41, 55);
  border-color: rgb(31, 41, 55);
}
.stage__rightpanel__highlighted {
  background-color: rgb(243, 244, 246);
}
.stage__rightpanel__title {
  color: rgb(31, 41, 55);
}
.stage__rightpanel__body {
  color: rgb(55, 65, 81);
}
.stage__rightpanel__info {
  color: rgb(156, 163, 175);
}
.stage__rightpanel__chat__footer__container {
  background-color: rgb(255, 255, 255);
  color: rgb(17, 24, 39);
}
.stage__rightpanel__chat__footer__btn {
  background-color: rgba(31, 41, 55, 0.1);
  color: rgb(55, 65, 81);
}
.stage__rightpanel__chat__footer__send__btn {
  background-color: rgb(88, 90, 218) !important;
  color: rgb(255, 255, 255) !important;
}
.stage__rightpanel__chat__footer__container > textarea {
  background-color: rgb(243, 244, 246);
  color: rgb(17, 24, 39);
}
.stage__rightpanel__chat__footer__container > textarea::placeholder {
  color: rgb(107, 114, 128);
}

/* Inbox(DM) Classes */
.inbox__sidebar__header {
  background-color: rgb(255, 255, 255);
}

.inbox__chat__header {
  background-color: rgb(255, 255, 255);
}

/* Tinymce Classes */
/* Placeholder of tinymce editor */
.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
  color: rgb(31, 41, 55);
}

/* links in tinymce editor */
#tinymce a {
  color: rgb(88, 90, 218);
}

/* misc classes */
.main_background_on_hover:hover {
  background-color: rgb(249, 250, 251);
}

/* DM(Inbox) classes*/
.inbox__sidebar__header {
  background-color: rgb(255, 255, 255);
}
.inbox__chat__header {
  background-color: rgb(255, 255, 255);
}
```
