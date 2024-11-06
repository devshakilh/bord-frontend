import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoAttachOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import { FaComments, FaCalendarAlt } from 'react-icons/fa';
import { fetchAttachmentCount } from '../../utils/api';

const TaskCard = ({ taskId }) => {
    const [attachmentCount, setAttachmentCount] = useState(0);
    const [attachments, setAttachments] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    useEffect(() => {
        fetchAttachmentCount(taskId, setAttachmentCount);
    }, [taskId]);

  

    const handleFileUpload = async (event) => {
        const files = Array.from(event.target.files); // Convert FileList to array
    
        if (files.length > 0) {
            const formData = new FormData();
            files.forEach((file) => {
                formData.append('files', file); // Append each file to formData
            });
    
            try {
                await axios.post(`http://localhost:5000/upload/${taskId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                // After successful upload, re-fetch the attachment count
                fetchAttachmentCount();
            } catch (error) {
                console.error('Error uploading files:', error);
            }
        }
    };
    

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-[350px]">
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <img src="https://placehold.co/30x30" alt="Client avatar" className="rounded-full mr-2" />
                <h3 className="font-semibold">Client Name</h3>
            </div>
            <div className="flex items-center text-right">
                <img src="https://placehold.co/30x30" alt="Client avatar" className="rounded-full mr-2" />
                <p className="font-semibold">Sadik Istiak</p>
            </div>
        </div>

        <div className="flex justify-between pb-3 pt-1">
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet curn...</p>
            <p className="text-sm text-gray-500">1/2</p>
        </div>

        <div className="flex justify-between items-center text-gray-500 text-sm">
            <div className="flex items-center">
                <img src="https://placehold.co/30x30" alt="Client avatar" className="rounded-full mr-4" />
                <img src="https://placehold.co/30x30" alt="Client avatar" className="rounded-full mr-2" />
                12+
            </div>
            <div className="flex items-center">
                <FaComments className="mr-1" /> 15
            </div>
            <div className="flex items-center">
    <label htmlFor={`file-upload-${taskId}`} className="cursor-pointer flex items-center">
        <IoAttachOutline className="mr-1 text-xl" />
        {attachmentCount} {/* Show the attachment count only for this task */}
    </label>
    <input
        type="file"
        id={`file-upload-${taskId}`}
        multiple // Allows multiple file selection
        style={{ display: 'none' }}
        onChange={handleFileUpload}
    />
</div>

            <div className="flex items-center">
                  {/* Date Picker */}
            <div className="flex items-center">
              
                {/* Date Picker with Calendar Toggle */}
            <div className="flex items-center relative">
                <FaCalendarAlt className="mr-1 cursor-pointer" onClick={() => setIsCalendarOpen(!isCalendarOpen)} />
                
                <span className="text-sm">
                    {selectedDate.toLocaleDateString('en-GB')}
                </span>

               
            </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default TaskCard;
