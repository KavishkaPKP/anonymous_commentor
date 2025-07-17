import React from 'react';

const comment_popup = ({ isOpen, onClose }) => {
    
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add Comment</h2>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Type your comment here..."
        ></textarea>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded">Close</button>
          <button className="bg-sky-600 hover:bg-sky-700 text-white py-1 px-4 rounded">Post</button>
        </div>
      </div>
    </div>
  );
};

export default comment_popup;