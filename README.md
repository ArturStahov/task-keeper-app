## Task-keeper v0.01betta

### use libs:

- react;
- redux,@reduxjs/toolkit;
- react-router-dom;
- react-hook-form;
- redux-persist;
- green scope (gsap);
- styled-components;
- material-ui;
- font awesome;
- csstools/normalize;
- axios;

### Summary:

- Display meetings planned;
- Add new meetings;
- Delete meetings;
- Auto save and load events

### Basic feature

- create user account and change;
- SignUp,LogIn,LogOut ;
- On a “Task-keeper” screen user should be able to see all meetings scheduled
  for the meeting room;
- In order to create new meeting user should click “New Event” button at
  “Task-keeper” screen, after that he should be transferred to “Create event”
  screen. At that screen user should enter meeting title, select day (Mon-Fri),
  select time (10:00-18:00); The meeting can be successfully created if and only
  if the time slot for that day and time is free. Otherwise the error bar should
  be shown. After successful creation of an event, the user should be
  transferred back to the “Task-keeper” screen where new event should already be
  displayed.
  - In order to delete a meeting user has to click the delete icon near the
    meeting title at “Task-keeper” screen and then confirm his action in a
    confirmation dialog.
  - Auto save and load events;
