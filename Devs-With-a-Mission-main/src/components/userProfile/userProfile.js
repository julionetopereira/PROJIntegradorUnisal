import React from 'react';

function UserProfile() {
  const user = {
    name: 'João Silva',
    bio: 'Viajante apaixonado e voluntário. Adoro explorar novas culturas e ajudar comunidades.',
    profilePicture: 'https://via.placeholder.com/150',
    skills: ['Construção', 'Ensino', 'Agricultura'],
    interests: ['Ecoturismo', 'Sustentabilidade', 'Culturas Locais'],
    email: 'joao.silva@example.com',
    phone: '+55 11 98765-4321',
    location: 'São Paulo, Brasil',
    gallery: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300'
    ],
    trips: [
      {
        destination: 'Quênia',
        description: 'Ajudei a construir escolas em áreas rurais',
        date: 'Março de 2024'
      },
      {
        destination: 'Peru',
        description: 'Trabalhei com agricultores locais para melhorar a produção agrícola',
        date: 'Junho de 2023'
      }
    ],
    friends: [
      {
        name: 'Maria Fernanda',
        profilePicture: 'https://via.placeholder.com/50'
      },
      {
        name: 'Carlos Eduardo',
        profilePicture: 'https://via.placeholder.com/50'
      }
    ],
    posts: [
      {
        content: 'A experiência no Peru foi incrível! Ajudar os agricultores foi gratificante.',
        date: '15 de Junho de 2023'
      },
      {
        content: 'Quênia, você está nos meus pensamentos! Trabalho maravilhoso feito por todos.',
        date: '20 de Março de 2024'
      }
    ]
  };

  return (
    <div className="container mx-auto my-12 p-8 bg-white rounded shadow-lg">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src={user.profilePicture}
          alt="Perfil"
        />
        <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p className="text-gray-600 mt-2">{user.bio}</p>
          <div className="flex justify-center md:justify-start mt-4">
            <ul className="flex flex-wrap justify-center md:justify-start">
              {user.skills.map((skill, index) => (
                <li key={index} className="mr-4 mb-2 px-2 py-1 bg-gray-200 text-gray-700 rounded">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-400" />
      <div>
        <h3 className="text-2xl font-semibold mb-4">Viagens Passadas</h3>
        <ul>
          {user.trips.map((trip, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-100 rounded shadow">
              <h4 className="text-xl font-bold">{trip.destination}</h4>
              <p className="text-gray-700">{trip.description}</p>
              <p className="text-gray-500">{trip.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-8 border-gray-400" />
      <div>
        <h3 className="text-2xl font-semibold mb-4">Amigos</h3>
        <div className="flex flex-wrap justify-center md:justify-start">
          {user.friends.map((friend, index) => (
            <div key={index} className="flex flex-col items-center mx-4 my-2">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={friend.profilePicture}
                alt={friend.name}
              />
              <p className="text-gray-700 mt-2">{friend.name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-8 border-gray-400" />
      <div>
        <h3 className="text-2xl font-semibold mb-4">Publicações</h3>
        <ul>
          {user.posts.map((post, index) => (
            <li key={index} className="mb-4 p-4 bg-gray-100 rounded shadow">
              <p className="text-gray-700">{post.content}</p>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-8 border-gray-400" />
      <div>
        <h3 className="text-2xl font-semibold mb-4">Interesses</h3>
        <ul className="flex flex-wrap">
          {user.interests.map((interest, index) => (
            <li key={index} className="mr-4 mb-2 px-2 py-1 bg-gray-200 text-gray-700 rounded">
              {interest}
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-8 border-gray-400" />
      <div>
        <h3 className="text-2xl font-semibold mb-4">Galeria de Fotos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {user.gallery.map((photo, index) => (
            <img
              key={index}
              className="rounded-lg object-cover"
              src={photo}
              alt={`Foto ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <hr className="my-8 border-gray-400" />
      <div>
        <h3 className="text-2xl font-semibold mb-4">Informações de Contato</h3>
        <div className="flex flex-col md:flex-row justify-center md:justify-start">
          <p className="text-gray-600 mr-4">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-gray-600 mr-4">
            <span className="font-semibold">Telefone:</span> {user.phone}
          </p>
          <p className="text-gray-600">
        <span className="font-semibold">Localização:</span> {user.location}
        </p>
        </div>
        </div>
        </div>
        );
        }

export default UserProfile;
