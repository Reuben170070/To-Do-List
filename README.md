To-Do List Web App
Created by: Reuben Aby

Overview
The To-Do List is a simple offline web application for managing tasks. You can add, edit, delete, and mark tasks as complete, with all data saved locally on your device. Ideal for organizing daily activities without needing an internet connection.

Technologies Used
HTML – Structures the app interface (input field, buttons, task list).

CSS – Provides clean, responsive design for desktop and mobile.

JavaScript – Manages task logic and user interaction.

localStorage – Stores tasks locally in the browser.

Key Features
Add Task – Create new tasks.

Edit Task – Update existing task text.

Delete Task – Remove individual tasks.

Mark as Complete / Undo – Toggle task status with a strikethrough.

Clear All Tasks – Remove all tasks at once.

Offline Persistence – Tasks remain saved even after closing the app.

How to Use
Prerequisites
Open index.html in any modern browser (e.g., Chrome, Firefox).

Internet connection is not required.

Step-by-Step Instructions
1. Adding a Task
Type a task into the “Add a new task…” input box.

Click the “Add Task” button.

The task appears in the list with Complete, Edit, and Delete options.

Empty submissions are rejected with an alert.
Example: Type “Call doctor” and click “Add Task.”

2. Marking a Task as Complete
Click the Complete button next to a task to mark it done (strikethrough).

Click Undo to revert it.
Example: Click “Complete” on “Buy groceries.”

3. Editing a Task
Click Edit next to a task.

A prompt allows you to change the text.

Confirm with OK, or cancel to leave unchanged.

Empty/space-only entries are ignored.
Example: Change “Call doctor” to “Call dentist.”

4. Deleting a Task
Click Delete next to a task to remove it.
Example: Click “Delete” on “Call dentist.”

5. Clearing All Tasks
Click the Clear All button to wipe the task list.
Example: Add “Buy groceries” and “Call dentist,” then click “Clear All.”

6. Persisting Tasks
Tasks are automatically saved using localStorage.

Close and reopen the app to see your list preserved.
Example: Add “Write report,” close the browser, reopen – it’s still there.

