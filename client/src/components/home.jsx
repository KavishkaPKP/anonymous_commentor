import React, { useState, useEffect } from 'react';
import CommentPopup from './popup_screens/comment_popup';
import AddCommentIcon from '@mui/icons-material/AddComment';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [getComments, setComments] = useState([]);

const getComm = async () => {
  try {
    const res = await fetch("http://localhost:5173/getComment");
    const commentS = await res.json();
    if (res.ok) {
      setComments(commentS)
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

  useEffect(() => {
    getComm();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to user comments</h1>

      <div className="text-right">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded inline-flex items-center"
        >
          <AddCommentIcon className="mr-2" /> Add comment
        </button>
      </div>

      <div className="overflow-x-auto py-5 items-center">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 ">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">කමෙන්ට් කරපු නම</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">කමෙන්ට්</th>
            </tr>
          </thead>
          <tbody>
            {getComments.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-center px-6 py-4 text-sm text-gray-500">
                  No comments yet.
                </td>
              </tr>
            ) : (
              getComments.map((element, id) => (
                <tr key={element._id} className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{element.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{element.comment}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <CommentPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Home;