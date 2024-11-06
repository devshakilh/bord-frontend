# File Upload Feature - Frontend Guide


---

### Prerequisites
Ensure you have:
- The backend server configured with endpoints for file uploads and attachment data retrieval.
- `API_BASE_URL` updated with the correct backend server URL, typically `http://localhost:5000`.

### Table of Contents
1. Getting Started
2. Installing Dependencies
3. Creating the Upload Component
4. File Upload Functionality
5. Fetching Attachments
6. Integrating Components
7. Example Usage

---

### Getting Started
1. Clone the repository or navigate to your frontend directory.
2. Ensure the backend server is running to accept file uploads and handle requests.

### Installing Dependencies
Install `axios` to manage HTTP requests. This enables communication between your React frontend and Express backend.

### Creating the Upload Component
Create a new React component called `FileUpload` to handle file selection and uploads. This component will:
- Allow multiple file selection.
- Trigger a file upload when the user initiates it.
- Send selected files to the backend, which stores them in the server and database.

### File Upload Functionality
The `FileUpload` component should:
- Enable multi-file selection with an input field.
- Collect selected files and send them to the backend using `FormData`.
- Clear selected files upon successful upload.

### Fetching Attachments
To show information on uploaded attachments (e.g., file count and total size), create a function to fetch attachment data. This function:
- Retrieves attachment count and total size from the backend.
- Displays this information for a specific task by calling the backend API endpoint for attachments.

### Integrating Components
Combine the `FileUpload` and `AttachmentList` components in a main component (e.g., `TaskDetail`). This setup:
- Displays attachment data.
- Provides file upload functionality within a single, cohesive interface.

### Example Usage
In your main app, use the `TaskDetail` component and pass a specific `taskId`. This setup allows users to upload multiple files associated with a task and view the total number and size of all attachments uploaded.

### Final Notes
- Ensure your backend server is running, and the routes are functioning as expected.
- Use Postman or cURL to test each backend endpoint before connecting to the frontend.
- Customize error handling and messaging in the frontend to improve the user experience.

