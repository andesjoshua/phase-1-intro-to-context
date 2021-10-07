// Your code here

function createEmployeeRecord(employeeInfo) {
    let employeeObj = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeObj
}

function createEmployeeRecords(infoArray) {
    return infoArray.map(array => createEmployeeRecord(array));
}

function createTimeInEvent(recordObj, date) {
    
   recordObj.timeInEvents.push({
        type:'TimeIn',
        hour: Number(date.slice(-4)),
        date: date.slice(0, 10),
    })
   return recordObj
}
function createTimeOutEvent(recordObj, date) {
    
    recordObj.timeOutEvents.push({
         type:'TimeOut',
         hour: Number(date.slice(-4)),
         date: date.slice(0, 10),
     })
    return recordObj
 }

 function hoursWorkedOnDate(recordObj, date) {
    let timeIn = createTimeInEvent(recordObj, date);
    let timeOut = createTimeOutEvent(recordObj, date);
    console.log(timeOut.timeOutEvents[0].hour)
    const hoursWorked = timeOut.timeOutEvents[0].hour - timeIn.timeInEvents[0].hour
    return hoursWorked
 }

