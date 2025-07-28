import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function AddNewProduct() {
  const [thumbnail, setThumbnail] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [productVideo, setProductVideo] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaImage, setMetaImage] = useState(null);
  const [indexOption, setIndexOption] = useState(true);
  const [maxSnippet, setMaxSnippet] = useState(-1);
  const [maxVideoPreview, setMaxVideoPreview] = useState(-1);
  const [maxImagePreview, setMaxImagePreview] = useState("Large");

  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
  });
  const [formData, setFormData] = useState({
    category: "",
    subCategory: "",
    subSubCategory: "",
    productType: "Physical",
    sku: "",
    unit: "kg",
    searchTags: "",
    brand: "",
  });

  const handleEditorChange = (content) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      description: content,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMetaImage(file);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      metaTitle,
      metaDescription,
      metaImage,
      indexOption,
      maxSnippet,
      maxVideoPreview,
      maxImagePreview,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      // Thumbnail upload
      if (!thumbnail) {
        setThumbnail(URL.createObjectURL(acceptedFiles[0]));
      } else {
        // Additional images
        setAdditionalImages(
          acceptedFiles.map((file) => URL.createObjectURL(file))
        );
      }
    },
  });

  // Handle YouTube video link input
  const handleVideoChange = (e) => {
    setProductVideo(e.target.value);
  };

  

  return (
    <div className="w-full p-6 bg-white shadow-md rounded-md">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
        <button className="bg-blue-800 text-white px-4 py-2 rounded">
          + Add Info From Gallery
        </button>
      </div>
      {/* Product Name */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Product Name (EN)</label>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={(e) =>
            setProductDetails({ ...productDetails, name: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
          placeholder="Ex: New Product"
        />
      </div>

      {/* Product Description */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Description (EN)</label>
        <Editor
          apiKey="YOUR_TINYMCE_API_KEY" // Optional, if you have a TinyMCE API key
          value={productDetails.description}
          onEditorChange={handleEditorChange}
          init={{
            height: 200,
            menubar: false,
            plugins: ["link", "image", "lists", "textcolor"],
            toolbar:
              "undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image",
          }}
        />
      </div>

      <div className="w-full p-6 bg-white shadow-md rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-4">General setup</h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option>Select category</option>
              {/* Add dynamic category options here */}
            </select>
          </div>

          {/* Sub Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">Sub Category</label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option>Select Sub Category</option>
              {/* Add dynamic subcategory options here */}
            </select>
          </div>

          {/* Sub Sub Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">
              Sub Sub Category
            </label>
            <select
              name="subSubCategory"
              value={formData.subSubCategory}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option>Select Sub Sub Category</option>
              {/* Add dynamic sub subcategory options here */}
            </select>
          </div>

          {/* Product Type */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">
              Product Type *
            </label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option value="Physical">Physical</option>
              <option value="Digital">Digital</option>
            </select>
          </div>

          {/* Product SKU */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">Product SKU *</label>
            <div className="flex items-center">
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="Ex: 161183"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
          </div>

          {/* Unit */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">Unit *</label>
            <select
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="lb">lb</option>
              <option value="oz">oz</option>
            </select>
          </div>

          {/* Search Tags */}
          <div className="mb-4 col-span-1">
            <label className="block text-sm font-semibold">Search tags</label>
            <input
              type="text"
              name="searchTags"
              value={formData.searchTags}
              onChange={handleChange}
              placeholder="Enter tag"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>

          {/* Brand */}
          <div className="mb-4 col-span-3">
            <label className="block text-sm font-semibold">Brand *</label>
            <select
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option>Select Brand</option>
              {/* Add dynamic brand options here */}
            </select>
          </div>
        </div>
      </div>
      <div className="w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">General setup</h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option>Select category</option>
              {/* Add dynamic category options here */}
            </select>
          </div>

          {/* Sub Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">Sub Category</label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option>Select Sub Category</option>
              {/* Add dynamic subcategory options here */}
            </select>
          </div>

          {/* Sub Sub Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">
              Sub Sub Category
            </label>
            <select
              name="subSubCategory"
              value={formData.subSubCategory}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option>Select Sub Sub Category</option>
              {/* Add dynamic sub subcategory options here */}
            </select>
          </div>

          {/* Product Type */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">
              Product Type *
            </label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option value="Physical">Physical</option>
              <option value="Digital">Digital</option>
            </select>
          </div>

          {/* Product SKU */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">Product SKU *</label>
            <div className="flex items-center">
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="Ex: 161183"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
              />
            </div>
          </div>

          {/* Unit */}
          <div className="mb-4">
            <label className="block text-sm font-semibold">Unit *</label>
            <select
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="lb">lb</option>
              <option value="oz">oz</option>
            </select>
          </div>

          {/* Search Tags */}
          <div className="mb-4 col-span-1">
            <label className="block text-sm font-semibold">Search tags</label>
            <input
              type="text"
              name="searchTags"
              value={formData.searchTags}
              onChange={handleChange}
              placeholder="Enter tag"
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
          </div>

          {/* Brand */}
          <div className="mb-4 col-span-3">
            <label className="block text-sm font-semibold">Brand *</label>
            <select
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option>Select Brand</option>
              {/* Add dynamic brand options here */}
            </select>
          </div>
        </div>
      </div>
      <div className="w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Product Images & Video</h2>

        {/* Product Thumbnail */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            Product Thumbnail *
          </label>
          <div
            {...getRootProps()}
            className="w-full h-40 border-2 border-gray-300 border-dashed rounded-md flex justify-center items-center"
          >
            {thumbnail ? (
              <img
                src={thumbnail}
                alt="Product Thumbnail"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">
                Click or drag to upload thumbnail (Ratio 1:1, 500x500 px)
              </span>
            )}
            <input {...getInputProps()} />
          </div>
        </div>

        {/* Upload Additional Images */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">
            Upload Additional Images
          </label>
          <div
            {...getRootProps()}
            className="w-full h-40 border-2 border-gray-300 border-dashed rounded-md flex justify-center items-center"
          >
            {additionalImages.length > 0 ? (
              <div className="flex gap-4">
                {additionalImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Additional Image ${index}`}
                    className="w-20 h-20 object-cover"
                  />
                ))}
              </div>
            ) : (
              <span className="text-gray-400">
                Click or drag to upload additional images (Ratio 1:1, 500x500
                px)
              </span>
            )}
            <input {...getInputProps()} />
          </div>
        </div>

        {/* Product Video */}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Product Video</label>
          <input
            type="url"
            value={productVideo}
            onChange={handleVideoChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-1"
            placeholder="Ex: https://www.youtube.com/embed/5R06LRdUCSE"
          />
        </div>
      </div>
      <div className="w-full p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">SEO Section</h1>

      {/* Meta Title */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Meta Title</label>
        <input
          type="text"
          value={metaTitle}
          onChange={(e) => setMetaTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
          placeholder="Meta Title"
        />
      </div>

      {/* Meta Description */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Meta Description</label>
        <textarea
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
          placeholder="Meta Description"
        />
      </div>

      {/* Meta Image */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Meta Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
        {metaImage && (
          <div className="mt-2 text-sm text-gray-500">{metaImage.name}</div>
        )}
      </div>

      {/* Index Option */}
      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={indexOption}
          onChange={() => setIndexOption(!indexOption)}
          className="form-checkbox"
        />
        <span className="text-sm">Index</span>
      </div>

      {/* Max Snippet */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Max Snippet</label>
        <input
          type="number"
          value={maxSnippet}
          onChange={(e) => setMaxSnippet(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>

      {/* Max Video Preview */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Max Video Preview</label>
        <input
          type="number"
          value={maxVideoPreview}
          onChange={(e) => setMaxVideoPreview(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>

      {/* Max Image Preview */}
      <div className="mb-4">
        <label className="block text-sm font-semibold">Max Image Preview</label>
        <select
          value={maxImagePreview}
          onChange={(e) => setMaxImagePreview(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        >
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="py-2 px-4 bg-gray-300 text-black rounded-md"
        >
          Reset
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
    </div>
  );
}
