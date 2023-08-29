import React from 'react';
import PrioritySettings from '../Component/PrioritySetting';
import ViewSettings from '../Component/ViewSetting';
import FeedbackSupport from '../Component/FeedbackSupport';

const Settings = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-4">Settings</h1>
            <PrioritySettings />
            <ViewSettings />
            <FeedbackSupport />
        </div>
    );
};

export default Settings;
