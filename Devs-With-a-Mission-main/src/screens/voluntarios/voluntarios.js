import React, { useState } from "react";
import Navbar from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { motion } from "framer-motion";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";

function Voluntarios() {
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "João",
      avatar: "https://via.placeholder.com/50",
      content: "Que dia incrível para ajudar!",
      image: "https://via.placeholder.com/300",
      date: "23/05/2024",
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      author: "Maria",
      avatar: "https://via.placeholder.com/50",
      content: "Construímos uma escola na comunidade!",
      image: "",
      date: "22/05/2024",
      likes: 15,
      comments: 7,
    },
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewPostImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleNewPostChange = (e) => {
    setNewPostContent(e.target.value);
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    if (newPostContent.trim() !== "") {
      const newPost = {
        id: posts.length + 1,
        author: "Você",
        avatar: "https://via.placeholder.com/50",
        content: newPostContent,
        image: newPostImage,
        date: new Date().toLocaleDateString(),
        likes: 0,
        comments: 0,
      };
      setPosts([newPost, ...posts]);
      setNewPostContent("");
      setNewPostImage("");
    }
  };

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-600 mb-4">Feed</h1>
          <p className="text-lg text-gray-600 mb-8">Veja as últimas postagens dos voluntários.</p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Nova Postagem</h2>
            <form onSubmit={handleNewPostSubmit} className="space-y-4">
              <textarea
                className="w-full h-32 border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-400"
                placeholder="Digite sua postagem..."
                value={newPostContent}
                onChange={handleNewPostChange}
              ></textarea>
              <div className="flex items-center">
                <label htmlFor="file-upload" className="cursor-pointer flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 hover:text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13 8V2H7v6H2v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8h-5zm-2 9H9v-3H6V9h3V6h2v3h3v5h-3v3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Adicionar Imagem</span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
              >
                Postar
              </button>
            </form>
          </div>

          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center p-4">
                <img
                  src={post.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-gray-600">{post.date}</p>
                </div>
              </div>
              <p className="text-gray-800 px-4 pb-4">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post Image"
                  className="w-full h-auto"
                />
              )}
              <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
                <div className="flex items-center">
                  <AiOutlineLike className="mr-1" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center">
                  <AiOutlineComment className="mr-1" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Voluntarios;
