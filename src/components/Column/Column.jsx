import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

const Column = ({ title, color, count, taskIds }) => (
    <div className="p-2">
        <div className="bg-gray-100 rounded-lg shadow-md p-4 h-[700px] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className={`font-bold text-lg sticky top-0 bg-inherit ${color}`}>{title}</h2>
                <div className="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center">{count}</div>
            </div>
            {taskIds.map(taskId => (
                <TaskCard key={taskId} taskId={taskId} />
            ))}
        </div>
    </div>
);

export default Column;
