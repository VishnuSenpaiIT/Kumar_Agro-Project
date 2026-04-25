const fs = require('fs');
const path = require('path');
const dir = 'src/components';

function replaceInFile(filename, replaceFn) {
  const filepath = path.join(dir, filename);
  if (!fs.existsSync(filepath)) return;
  let content = fs.readFileSync(filepath, 'utf8');
  let newContent = replaceFn(content);
  if (content !== newContent) {
    fs.writeFileSync(filepath, newContent, 'utf8');
    console.log('Updated ' + filename);
  }
}

const adminFiles = ['AssetRequest.tsx', 'AccommodationRequest.tsx', 'DocumentRequest.tsx', 'HRSupportRequest.tsx', 'TravelRequest.tsx', 'IDCardRequest.tsx'];
for (const file of adminFiles) {
  replaceInFile(file, (c) => {
    // Submit Request
    if (!c.includes('alert(')) {
        c = c.replace(/<button([^>]*)>\s*Submit Request\s*<\/button>/g, '<button$1 onClick={() => alert("Request submitted successfully!")}>\n            Submit Request\n          </button>');
    }
    // Upload Photo / Drag & Drop
    c = c.replace(/<div className="([^"]*border-dashed[^"]*)">\s*<Upload([^>]*)>\s*<p([^>]*)>(Drag & Drop Photo|Attach Document)/g, '<div onClick={() => alert("File upload dialog opened")} className="$1">\n                <Upload$2>\n                <p$3>$4');
    return c;
  });
}

replaceInFile('ApplyLeave.tsx', (c) => {
  let cnt = c.replace(/<div className="([^"]*border-dashed[^"]*)">\s*<Upload([^>]*)>\s*<p([^>]*)>Drag & Drop Documents/, '<div onClick={() => alert("File upload dialog opened")} className="$1">\n                    <Upload$2>\n                    <p$3>Drag & Drop Documents');
  cnt = cnt.replace(/<button([^>]*)>\s*Submit Leave Request\s*<\/button>/g, '<button$1 onClick={() => alert("Leave Request submitted successfully!")}>\n                Submit Leave Request\n              </button>');
  return cnt;
});
replaceInFile('LeaveManagement.tsx', (c) => {
  return c.replace(/<button([^>]*)>View Full History Report<\/button>/g, '<button$1 onClick={() => alert("Navigating to Full History...")}>View Full History Report</button>');
});

replaceInFile('ReimbursementDashboard.tsx', (c) => {
  return c.replace(/<button([^>]*)>\s*View Claim History\s*<\/button>/g, '<button$1 onClick={() => alert("Navigating to Claim History...")}>\n            View Claim History\n          </button>');
});

replaceInFile('TotalWorkingDays.tsx', (c) => {
  let cnt = c.replace(/<button([^>]*)>View History<\/button>/g, '<button$1 onClick={() => alert("Navigating to Working Days History...")}>View History</button>');
  cnt = cnt.replace(/<button([^>]*)>Export PDF<\/button>/g, '<button$1 onClick={() => alert("Exporting PDF...")}>Export PDF</button>');
  return cnt;
});

replaceInFile('JobOpeningsList.tsx', (c) => {
  let cnt = c.replace(/<button([^>]*)>\s*<Plus([^>]*)>\s*Create New Job Opening\s*<\/button>/g, '<button$1 onClick={() => alert("Opening Create Job Form...")}>\n            <Plus$2>\n            Create New Job Opening\n          </button>');
  cnt = cnt.replace(/<button([^>]*)>\s*Apply Filter\s*<\/button>/g, '<button$1 onClick={() => alert("Filters Applied!")}>\n                Apply Filter\n              </button>');
  return cnt;
});
replaceInFile('CandidateList.tsx', (c) => {
  return c.replace(/<button([^>]*)>\s*Apply Filter\s*<\/button>/g, '<button$1 onClick={() => alert("Candidate Filters Applied!")}>\n                Apply Filter\n              </button>');
});

replaceInFile('SeparationRequestForm.tsx', (c) => {
  return c.replace(/<button([^>]*)>\s*Submit Resignation\s*<\/button>/g, '<button$1 onClick={() => alert("Resignation submitted successfully!")}>\n                Submit Resignation\n              </button>');
});
replaceInFile('SeparationRecords.tsx', (c) => {
  return c.replace(/<button([^>]*)>\s*Apply Filter\s*<\/button>/g, '<button$1 onClick={() => alert("Separation Filters Applied!")}>\n                Apply Filter\n              </button>');
});

replaceInFile('LTAClaimsModule.tsx', (c) => {
  return c.replace(/<button([^>]*)>\s*Submit Claim\s*<\/button>/g, '<button$1 onClick={() => alert("LTA Claim submitted successfully!")}>\n                Submit Claim\n              </button>');
});

replaceInFile('LoanRequisitionModule.tsx', (c) => {
  return c.replace(/<button([^>]*)>\s*Submit Loan Request\s*<\/button>/g, '<button$1 onClick={() => alert("Loan Request submitted successfully!")}>\n                Submit Loan Request\n              </button>');
});

console.log('Script finished');
