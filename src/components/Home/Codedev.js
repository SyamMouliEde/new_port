import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `
const developer = {
  name: 'Syam Mouli Ede',
  skills: ['React', 'HTML', 'CSS', 'Javascript', 'Bootstrap', 'Git', 'Figma'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};
`;

export default function DeveloperCard() {
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
        // width: '100%',
        // maxWidth: '550px',
      }}
    >
      {/* Colored buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem', marginBottom: '0.75rem' }}>
        <div style={{ height: '12px', width: '12px', borderRadius: '50%', backgroundColor: '#f87171' }} />
        <div style={{ height: '12px', width: '12px', borderRadius: '50%', backgroundColor: '#facc15' }} />
        <div style={{ height: '12px', width: '12px', borderRadius: '50%', backgroundColor: '#4ade80' }} />
      </div>

      {/* Code block */}
      <div
        style={{
          fontSize: '0.75rem',
          textAlign: 'left',
          width: '100%',
        }}
      >
        <SyntaxHighlighter
          language="javascript"
          style={nightOwl}
          showLineNumbers
          wrapLongLines
          customStyle={{
            background: 'transparent',
            margin: 0,
            padding: 0,
            maxHeight: 'auto',
            width: '100%',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
