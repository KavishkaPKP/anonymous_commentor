import React from 'react';

const CommentPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">මං ගැන කමෙන්ට් එකක් දාගෙන යන්න ලමායි 😊</h2>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-3">
          </label>
          <textarea
            id="comment"
            className="w-full p-2 border border-gray-300 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-800"
            rows="4"
            placeholder="Type your comment here..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            කැමතිනම් නමත් දාගෙන පලයල්​ලා 😊
          </label>
          <input
            id="name"
            type="text"
            placeholder="Type your name"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:outline-none focus:ring-blue-800"
          />
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <button type="button" onClick={onClose}className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded">දෙන්න ඔනෙ ​නෑ</button>
          <button type="submit" className="bg-blue-800 hover:bg-sky-800 text-white py-2 px-4 rounded">යවප​න්</button>
        </div>
      </form>
    </div>
  );
};

export default CommentPopup;