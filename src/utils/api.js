import axios from 'axios';

// Fetch attachment count
export const fetchAttachmentCount = (taskId, setAttachmentCount) => {
    axios.get(`http://localhost:5000/attachments/${taskId}/count`)
        .then(response => setAttachmentCount(response.data.count))
        .catch(error => console.error("Error fetching attachment count:", error));
};
