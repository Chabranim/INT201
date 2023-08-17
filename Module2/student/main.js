class CourseManagement {
    constructor(){
        this.courses = []
    }
    createCourse(courseId,courseTitle='untitled',courseTerm='2-2565'){
        this.courses.push({courseId : courseId, courseTitle : courseTitle, courseTerm : courseTerm, registeredStudents : []})
    }
    registerCourseWithOneStudent(courseId,studentId){
        return this.findCourseIndex(courseId)===-1 ? -1 : this.courses[this.findCourseIndex(courseId)].registeredStudents.push(studentId)

    }
    registerCourseWithStudents(courseId,studentIds){
        return this.findCourseIndex(courseId)===-1 ? -1 : this.courses[this.findCourseIndex(courseId)].registeredStudents.push(...studentIds)
    }
    findCourseIndex(courseId){
        return this.courses.findIndex(a=>a.courseId===courseId)
    }
    removeCourse(courseId){
        if(this.findCourseIndex(courseId)===-1){
            return -1
        } this.courses.splice(this.findCourseIndex(courseId),1)
        return courseId
    }
    getCourses(){
        return this.courses
    }
    getCourse(courseId){
        return this.courses[this.findCourseIndex(courseId)]
    }
    getRegisteredStudent(courseId){
        return this.courses[this.findCourseIndex(courseId)].registeredStudents
    }
    removeStudentInCourse(courseId, studentId){
        let courseIndex = this.findCourseIndex(courseId)
        if(courseIndex===-1){
            return -1
        } let studentIndex = this.courses[courseIndex].registeredStudents.indexOf(studentId)
        this.courses[courseIndex].registeredStudents.splice(studentIndex, 1)
        return this.courses[courseIndex]

    }
}


const cm = new CourseManagement ()
console.log(cm.createCourse('INT201', 'Client Side I', '1-2565'))
console.log(cm.createCourse('INT202', 'Server Side I', '1-2565'))
console.log(cm.createCourse('Gen101'))
console.log(cm.createCourse('INT203'))
console.log('-----------------------------------------------------')
console.log(cm.registerCourseWithOneStudent('INT201', 1001))
console.log(cm.registerCourseWithOneStudent('INT203', 1001))
console.log(cm.registerCourseWithOneStudent('INT203', 1002))
console.log(cm.registerCourseWithOneStudent('INT203', 1006))
console.log(cm.registerCourseWithOneStudent('INT202', 1002))
console.log(cm.registerCourseWithOneStudent('Gen111', 1002))
console.log('-----------------------------------------------------')
console.log(cm.registerCourseWithStudents('INT201', [1003, 1005]))
console.log(cm.registerCourseWithStudents('INT202', [1003, 1005]))
console.log(cm.registerCourseWithStudents('Gen101', [1003, 1005]))
console.log('-----------------------------------------------------')
console.log(cm.findCourseIndex('INT201'))
console.log(cm.findCourseIndex('INT202'))
console.log('-----------------------------------------------------')
console.log(cm.removeCourse('INT202'))
console.log(cm.removeCourse('INT203'))
console.log(cm.removeCourse('INT205'))
console.log('-----------------------------------------------------')
console.log(cm.getCourses())
console.log('-----------------------------------------------------')
console.log(cm.getCourse('INT201'))
console.log('-----------------------------------------------------')
console.log(cm.getRegisteredStudent('INT201'))
console.log('-----------------------------------------------------')
console.log(cm.removeStudentInCourse('INT201', 1003))
console.log(cm.removeStudentInCourse('INT205', 1003))
console.log('-----------------------------------------------------')
console.log(cm.getCourse('INT201'))

