// Problem 1
let Sam ={
    "firstName": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise eligible": true
}

let Mary = {
    "firstName": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise eligible": true,
}
let Bill = {
    "firstName": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise eligible": false,
}
console.log("Number 1", Sam, Mary, Bill);

//Problem 2
let company = {
    "companyName":"Tech Stars",
    "website":"www.techstars.site",
    "employees":[Sam, Mary, Bill]
}
console.log("Number 2", company);

//Problem 3
let Anna = {
    "firstName":"Anna",
    "department":"Tech",
    "designation":"Executive",
    "salary":25600,
    "raise eligible":false
}
company = {
    "companyName":"Tech Stars",
    "website":"www.techstars.site",
    "employees":[Sam, Mary, Bill, Anna]
}
console.log("Number 3", company)

//Problem 4
function totalSalary() {
    total = 0;
    for (let i = 0; i < company["employees"].length; i++) { 
        total += company["employees"][i]["salary"];
      }
    
    console.log("Number 4: Total Salary of Employees = ", total)
}
totalSalary();

//Problem 5
function updateSalary(){
    for(let j = 0; j < company["employees"].length; j++){
        if (company["employees"][j]["raise eligibile"] = true)
        {
            company["employees"][j]["salary"] += company["employees"][j]["salary"] * 0.1;
            company["employees"][j]["raise eligibile"] = false;
            console.log("Number 5: Employees who received a raise: ", company["employees"][j]["firstName"], company["employees"][j]["salary"]);
        }
    }
}
updateSalary(company);

//Problem 6
wfhArray = ["Anna", "Sam"];
function workFromHome(company, wfhArray)
{
    for (const emp of company["employees"]) 
    {
        emp.wfh = false
    }

    for (const emp of company["employees"]) 
    {
        for (let i = 0; i<2; i++)
        {
            if (emp["firstName"]==wfhArray[i])
            {
                emp.wfh = true;
            }
        }
        console.log("Number 6: Employees who work at home: ", emp["firstName"], emp["wfh"])
    }

}

workFromHome(company, wfhArray);