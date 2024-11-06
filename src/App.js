

import React from 'react';
import Column from './components/Column/Column';

const App = () => {
    const taskIds = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

    return (
        <div className="flex overflow-x-auto p-4">
            <Column title="Incomplete" color="text-red-500" count="0" taskIds={taskIds} />
            <Column title="To Do" color="text-black" count="0" taskIds={taskIds} />
            <Column title="Doing" color="text-yellow-500" count="0" taskIds={taskIds} />
            <Column title="Under Review" color="text-gray-500" count="0" taskIds={taskIds} />
            <Column title="Completed" color="text-gray-500" count="0" taskIds={taskIds} />
            <Column title="Overdue" color="text-gray-500" count="0" taskIds={taskIds} />
        </div>
    );
};

export default App;
