 
  
  const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare Report",
          "taskDescription": "Complete the monthly sales report.",
          "taskDate": "2025-02-05",
          "category": "Reporting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Meeting",
          "taskDescription": "Discuss the new project proposal with the client.",
          "taskDate": "2025-02-06",
          "category": "Meeting",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Email Follow-up",
          "taskDescription": "Send follow-up emails to potential clients.",
          "taskDate": "2025-02-07",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review the newly pushed code on GitHub.",
          "taskDate": "2025-02-05",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Bug Fixing",
          "taskDescription": "Fix the reported bugs in the payment module.",
          "taskDate": "2025-02-06",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Check the stock and update the database.",
          "taskDate": "2025-02-07",
          "category": "Inventory",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Supplier Call",
          "taskDescription": "Call suppliers to confirm new orders.",
          "taskDate": "2025-02-08",
          "category": "Procurement",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Data Entry",
          "taskDescription": "Enter new supplier details into the system.",
          "taskDate": "2025-02-09",
          "category": "Administration",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Marketing Strategy",
          "taskDescription": "Plan the next quarter's marketing campaign.",
          "taskDate": "2025-02-10",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Social Media Ads",
          "taskDescription": "Set up advertisements on Facebook and Instagram.",
          "taskDate": "2025-02-11",
          "category": "Advertising",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Blog Post",
          "taskDescription": "Write a blog post on digital marketing trends.",
          "taskDate": "2025-02-12",
          "category": "Content",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Customer Support",
          "taskDescription": "Respond to customer queries and complaints.",
          "taskDate": "2025-02-13",
          "category": "Support",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Training Session",
          "taskDescription": "Conduct a training session for new employees.",
          "taskDate": "2025-02-14",
          "category": "Training",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
export const setLocalStorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))

  console.log(admin,employees)
}