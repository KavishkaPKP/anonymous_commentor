import React, { useState } from 'react';
import CommentPopup from './popup_screens/comment_popup';
import AddCommentIcon from '@mui/icons-material/AddComment';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to user comments</h1>

      <div className="text-right">

        <button onClick={() => setShowPopup(true)} className="bg-blue-800 flex-end hover:bg-blue-800 text-white px-6 py-3 rounded"><AddCommentIcon /> Add comment</button>
      </div>

      <div class="overflow-x-auto py-5 items-center">
        <table class="min-w-full divide-y divide-gray-200 border border-gray-300 ">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">කමෙන්ට් කරපු උන්ගේ න​ම්</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700">දාල තියන කමෙන්ට්​ස් 😬</th>
              
            </tr>
          </thead>

          <tbody>
            <tr class="bg-white hover:bg-gray-50">
              <td class="px-6 py-4 text-sm text-gray-900">Pasindu Kavishka</td>
                <td class="px-6 py-4 text-sm text-gray-900">Pasindu Kavishka</td>
            </tr>
          </tbody>
        </table>
      </div>


      <CommentPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Home;