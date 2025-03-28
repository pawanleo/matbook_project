import React, { useState } from 'react';
import './WorkflowTable.css';
import data from './data.json'
import { DownloadIcon, EditIcon, ExecuteIcon, MoreIcon, SearchIcon } from '../../utils/Icons';

  // Rest of the previous component remains the same, but I'll add a new header component
  const WorkflowBuilder = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    return (
      <div className="workflow-builder">
        {/* Header */}
        <div className="workflow-header">
          <div className="header-left">
            <button className="hamburger-menu">
              <HamburgerIcon />
            </button>
            <h1>Workflow Builder</h1>
          </div>
          
          <div className="header-right">
            <div className="search-container">
              <SearchIcon />
              <input 
                type="text" 
                placeholder="Search by Workflow Name/ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="create-process-btn">+ Create New Process</button>
          </div>
        </div>
  
        {/* Existing Workflow Table Component */}
        <WorkflowTable />
      </div>
    );
  };
export default WorkflowBuilder;

const WorkflowTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const workflowData = [
    {
      id: '#494',
      name: 'Workflow Name here...',
      lastEdited: 'Zubin Khanna | 22:43 IST - 28/05',
      description: 'Some Description Here Regarding The Flow...',
      runs: [
        { status: 'Passed', timestamp: '28/05 - 22:43 IST' },
        { status: 'Failed', timestamp: '28/05 - 22:43 IST' },
        { status: 'Failed', timestamp: '28/05 - 22:43 IST' }
      ]
    },
    // Add more workflow items as needed
  ];

  const toggleRowExpansion = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="workflow-table-container">
        <div className='workflow_header'></div>

        <div className='worflow_filters'></div>
      <div className="workflow-table-header">
        <span>Workflow Name</span>
        <span>ID</span>
        <span>Last Edited On</span>
        <span>Description</span>
        <span>Actions</span>
      </div>

      {data.map((workflow, index) => (
        <div 
          key={index} 
          className={`workflow-row ${expandedRow === index ? 'expanded' : ''}`}
        >
          <div 
            className="workflow-row-main"
            onClick={() => toggleRowExpansion(index)}
          >
            <span className="workflow-name">{workflow.workflow_name}</span>
            <span className="workflow-id">{workflow.id}</span>
            <span className="workflow-last-edited">{workflow.lastEdited}</span>
            <span className="workflow-description">{workflow.description}</span>
            <div className="workflow-actions">
              <button className="action-button"><ExecuteIcon /> Execute</button>
              <button className="action-button"><EditIcon /> Edit</button>
              <button className="more-button"><MoreIcon /></button>
              <button className="download-button"><DownloadIcon /></button>
            </div>
          </div>

          {expandedRow === index && (
            <div className="workflow-row-expanded">
              {workflow.runs.map((run, runIndex) => (
                <div 
                  key={runIndex} 
                  className={`workflow-run ${run.status.toLowerCase()}`}
                >
                  <div className="run-status-indicator"></div>
                  <span className="run-timestamp">{run.timestamp}</span>
                  <span className="run-status">{run.status}</span>
                  <button className="external-link-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="workflow-pagination">
        <button>{'<'}</button>
        <span className="current-page">1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>15</span>
        <button>{'>'}</button>
      </div>
    </div>
  );
};


// CSS File (WorkflowTable.css)
