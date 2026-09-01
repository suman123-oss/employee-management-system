const employee = [
  {
    "id": 1,
    "firstname": "Rajesh",
    "email": "employee1@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare monthly report",
        "taskDescription": "Compile and prepare the monthly financial report.",
        "taskDate": "2025-01-15",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team meeting",
        "taskDescription": "Attend the weekly team meeting to discuss project updates.",
        "taskDate": "2025-01-08",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Submit project proposal",
        "taskDescription": "Submit the project proposal for client review.",
        "taskDate": "2025-01-05",
        "category": "Project Management"
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 2,
    "firstname": "Aarav",
    "email": "employee2@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix website bugs",
        "taskDescription": "Resolve the critical bugs reported in the website's user interface.",
        "taskDate": "2025-01-12",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code review",
        "taskDescription": "Review the latest code submissions from the team.",
        "taskDate": "2025-01-09",
        "category": "Code Quality"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client presentation",
        "taskDescription": "Prepare and present the project updates to the client.",
        "taskDate": "2025-01-13",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Database migration",
        "taskDescription": "Migrate the database to the new server.",
        "taskDate": "2025-01-06",
        "category": "Database"
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 3,
    "firstname": "Isha",
    "email": "employee3@me.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Design review",
        "taskDescription": "Review the new design mockups for the application.",
        "taskDate": "2025-01-07",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update user documentation",
        "taskDescription": "Update the user guide with the latest application features.",
        "taskDate": "2025-01-15",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Set up test environment",
        "taskDescription": "Prepare a test environment for the upcoming release.",
        "taskDate": "2025-01-14",
        "category": "Testing"
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "firstname": "Kavya",
    "email": "employee4@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create marketing strategy",
        "taskDescription": "Develop a marketing strategy for the new product launch.",
        "taskDate": "2025-01-18",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Social media posts",
        "taskDescription": "Schedule posts for the social media channels.",
        "taskDate": "2025-01-10",
        "category": "Social Media"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Conduct survey",
        "taskDescription": "Collect feedback through a customer satisfaction survey.",
        "taskDate": "2025-01-08",
        "category": "Customer Feedback"
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 5,
    "firstname": "Neha",
    "email": "employee5@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory check",
        "taskDescription": "Perform a complete inventory check of the warehouse.",
        "taskDate": "2025-01-20",
        "category": "Logistics"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Supplier meeting",
        "taskDescription": "Meet with suppliers to discuss delivery schedules.",
        "taskDate": "2025-01-16",
        "category": "Procurement"
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 0, "failed": 0 }
  }
];

  
  const admin = [
    {
      "id": 1,
      "email": "admin@me.com",
      "password": "123"
    }
  ];

export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(employee))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return {employees, admin};
}