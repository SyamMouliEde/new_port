import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const projectsData = [
  {
    id: 5,
    name: 'YouTube Clone',
    description: `I developed a fully responsive YouTube clone using React.js to replicate the core features of the YouTube interface. The application integrates with the YouTube Data API to fetch and display real video content, including video playback, channel pages, and search functionality. I used React Router for navigation, Axios for API requests, and context-based state management to handle global data. The UI is styled with SCSS and Bootstrap to ensure mobile responsiveness and a clean layout.`,
    tools: ['React', 'React Router', 'Axios', 'YouTube Data API', 'Bootstrap', 'SCSS', 'Context API'],
    role: 'Frontend Developer',
  },
  {
    id: 2,
    name: 'Travel Agency App',
    description: 'I have designed and developed a web app for Travel Agencies. I created the UI using React JS, MUI, TailwindCSS, Google Maps. The app supports multiple languages and currencies. I developed the API using FastAPI.',
    tools: ['React', 'Tailwind CSS', 'Google Maps', 'Gmail Passkey'],
    role: 'Frontend Developer',
  },
  {
    id: 4,
    name: 'Newsroom Management',
    description: 'My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application\'s state and React-hook-form and Sun Editor to handle forms.',
    tools: ['NextJS', 'Material UI', 'Redux', 'Calendar'],
    role: 'Frontend Developer',
  }
];

const ProjectCard = ({ project }) => {
  const codeString = `const project = {
  name: '${project.name}',
  tools: [${project.tools.map(tool => `'${tool}'`).join(', ')}],
  myRole: '${project.role}',
  Description: \`${project.description}\`
};`;

  return (
    <div
      style={{
        fontSize: '1rem',
        margin: '25px auto',
        padding: '1rem',
        opacity: 0.93,
        border: '1.7px solid rgba(200, 137, 230, 0.637)',
        textAlign: 'center',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '4px 5px 4px 3px rgba(89, 4, 168, 0.137)',
        overflow: 'hidden',
        backgroundColor: '#0f172a',
        transition: 'all 0.4s ease',
        maxWidth: '700px',
        width: '100%',
        paddingTop:'25px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem', marginBottom: '0.75rem' }}>
        <div style={{ height: '12px', width: '12px', borderRadius: '50%', backgroundColor: '#f87171' }} />
        <div style={{ height: '12px', width: '12px', borderRadius: '50%', backgroundColor: '#facc15' }} />
        <div style={{ height: '12px', width: '12px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
      </div>
      <div style={{ fontSize: '0.75rem', textAlign: 'left', width: '100%',whiteSpace: 'pre-wrap', wordBreak: 'break-word'  }}>
        <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
          showLineNumbers
          wrapLongLines
          customStyle={{
            background: 'transparent',
            margin: 0,
            padding: 0,
            width: '100%',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const ProjectsPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', padding: '2rem', backgroundColor: '#0a0d1a', minHeight: '100vh' }}>
    {projectsData.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectsPage;
