import { useState } from 'react';

export default function SocialMediaLinkSetup() {
  // ข้อมูลตัวอย่างจาก DataFrame
  const initialLinks = [
    { id: 1, name: "facebook", link: "facebook.com", status: true },
    { id: 2, name: "instagram", link: "https://dev.6amtech.com/", status: false },
    { id: 3, name: "pinterest", link: "https://dev.6amtech.com/", status: true },
    { id: 4, name: "google-plus", link: "https://dev.6amtech.com/", status: false },
    { id: 5, name: "linkedin", link: "https://dev.6amtech.com/", status: true },
    { id: 6, name: "twitter", link: "https://www.w3schools.com/howto/howto_css_table_responsive.asp", status: true },
  ];

  const [socialMediaLinks, setSocialMediaLinks] = useState(initialLinks);
  const [socialMedia, setSocialMedia] = useState('');
  const [socialMediaLink, setSocialMediaLink] = useState('');

  const addSocialMediaLink = () => {
    setSocialMediaLinks([
      ...socialMediaLinks,
      { id: Date.now(), name: socialMedia, link: socialMediaLink, status: true }
    ]);
    setSocialMedia('');
    setSocialMediaLink('');
  };

  const removeSocialMediaLink = (id) => {
    setSocialMediaLinks(socialMediaLinks.filter(link => link.id !== id));
  };

  const toggleStatus = (id) => {
    setSocialMediaLinks(prevLinks =>
      prevLinks.map(link =>
        link.id === id ? { ...link, status: !link.status } : link
      )
    );
  };

  return (
    <div className="p-6 mx-auto space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold flex items-center gap-2">📱 Social Media Setup</h1>

      {/* Form to add social media link */}
      <div className="bg-white p-6 rounded shadow space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Select Social Media */}
          <div>
            <label className="block text-sm font-medium mb-1">Select Social Media</label>
            <select
              value={socialMedia}
              onChange={(e) => setSocialMedia(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select social media</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="pinterest">Pinterest</option>
              <option value="google-plus">Google+</option>
              <option value="linkedin">LinkedIn</option>
              <option value="twitter">Twitter</option>
            </select>
          </div>

          {/* Social Media Link */}
          <div>
            <label className="block text-sm font-medium mb-1">Social Media Link</label>
            <input
              type="text"
              value={socialMediaLink}
              onChange={(e) => setSocialMediaLink(e.target.value)}
              placeholder="Enter Social Media Link"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={addSocialMediaLink}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded">
            Reset
          </button>
        </div>
      </div>

      {/* Social Media Links Table */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Social Media Link List</h3>
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="px-4 py-2 text-left">SL</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Social Media Link</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {socialMediaLinks.length > 0 ? (
              socialMediaLinks.map((link, index) => (
                <tr key={link.id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{link.name}</td>
                  <td className="px-4 py-2">{link.link}</td>
                  <td className="px-4 py-2">
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={link.status}
                        onChange={() => toggleStatus(link.id)}
                        className="sr-only peer focus:ring-2 focus:ring-blue-300 rounded-full peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600">
                        
                      </div>
                    </label>
                  </td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-gray-100 rounded">✏️</button>
                    <button
                      className="p-2 text-red-600 hover:bg-gray-100 rounded"
                      onClick={() => removeSocialMediaLink(link.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-400">
                  No social media links available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
