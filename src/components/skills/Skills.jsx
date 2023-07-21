import { useEffect, useState } from 'react';

const Skills = ({ skills }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogin(true);
    }, 2000);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLogin ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
