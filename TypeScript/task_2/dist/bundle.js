/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
console.log(executeWork(createEmployee(200)));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVlBO0lBQUE7SUFVQSxDQUFDO0lBVEcsK0JBQVksR0FBWjtRQUNJLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztJQUNELGlDQUFjLEdBQWQ7UUFDSSxPQUFPLHdCQUF3QixDQUFDO0lBQ3BDLENBQUM7SUFDRCxvQ0FBaUIsR0FBakI7UUFDSSxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBVEcsOEJBQVksR0FBWjtRQUNJLE9BQU8sdUJBQXVCLENBQUM7SUFDbkMsQ0FBQztJQUNELGdDQUFjLEdBQWQ7UUFDSSxPQUFPLHFCQUFxQixDQUFDO0lBQ2pDLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQUlELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzNDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDNUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxRQUFrQjtJQUNsQyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDeEMsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQWtCO0lBQ25DLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDdkM7SUFDRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiO1xuICAgIH1cbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIGEgY29mZmVlIGJyZWFrXCI7XG4gICAgfVxuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3IgdGFza3NcIjtcbiAgICB9XG59XG5cbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gICAgfVxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcbiAgICB9XG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcbiAgICB9XG59XG5cbnR5cGUgRW1wbG95ZWUgPSBEaXJlY3RvciB8IFRlYWNoZXI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRW1wbG95ZWUge1xuICAgIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiICYmIHNhbGFyeSA8IDUwMCkge1xuICAgICAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xufVxuXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBFbXBsb3llZSk6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcbiAgICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3Rvcjtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IEVtcGxveWVlKTogc3RyaW5nIHtcbiAgICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcbiAgICAgICAgcmV0dXJuIGVtcGxveWVlLndvcmtEaXJlY3RvclRhc2tzKCk7XG4gICAgfVxuICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG59XG5cbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=