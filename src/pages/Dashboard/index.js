import React from 'react';

// import { Container } from './styles';

export default function Dashboard() {
  const posts = {
    author: {
      name: 'Dhemes',
      dados: [{ id: 1 }, { id: 2 }],
    },
  };

  return (
    <>
      <h1>Dashboard</h1>
      <span>{posts?.author?.name}</span>
      {posts?.author?.dados?.map(item => (
        <li key={item.id}>{item.id}</li>
      ))}
    </>
  );
}
