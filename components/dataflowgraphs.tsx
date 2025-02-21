"use client"
import { Chrono } from 'react-chrono';

export default function DataFlowGraphs() {
    const milestones = [
      {
        title: 'Project Start',
        date: '2024-01-15', // Added date
        description: 'Project Kickoff Meeting',
      },
      {
        title: 'Design Phase',
        date: '2024-02-01', // Added date
        description: 'UI/UX Design Completed',
      },
      {
        title: 'Development',
        date: '2024-03-15', // Added date
        description: 'Core Features Implemented',
      },
      {
        title: 'Testing',
        date: '2024-04-01', // Added date
        description: 'QA Testing and Bug Fixing',
      },
      {
        title: 'Deployment',
        date: '2024-04-15', // Added date
        description: 'Project Deployed to Production',
      },
    ];
  

  return (
    <section>
      <h2 className="text-3xl font-bold">Data Flow Graphs</h2>

      <div>
        <h1>Project Timeline</h1>
        <div className="project-timeline">
          <Chrono
            items={milestones}
            mode="VERTICAL" // or "HORIZONTAL"
            theme={{
              primary: '#0070f3', // Example: Next.js blue
              secondary: '#f0f0f0', // Light gray
              cardBg: 'white',
              cardText: '#333',
              titleColor: '#0070f3',
              textColor: '#666',
            }}
            // cardHeight={50} // Adjust card height as needed
            // lineWidth={2}
            // other props: https://www.npmjs.com/package/react-chrono
          >
            {/* You can customize the content of each milestone here */}
            {milestones.map((milestone, index) => (
              <div key={index}>
                <h3>{milestone.title}</h3>
                {milestone.description && <p>{milestone.description}</p>}
                {milestone.date && <p className="date">{milestone.date}</p>} {/* Added date display */}
              </div>
            ))}

          </Chrono>
          <style jsx>{`
            .project-timeline {
              width: 90%; /* Adjust width as needed */
              margin: 20px auto; /* Center the timeline */
            }
            .date { /* Style for the date */
              font-style: italic;
              color: #999;
              font-size: smaller;
            }

          `}</style>
        </div>
      </div>
    </section>
  )
}

