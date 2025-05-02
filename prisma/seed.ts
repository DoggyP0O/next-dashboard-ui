
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

    const getRandomStartTime = () => {
      const hour = Math.floor(Math.random() * 6) + 9; // 9 to 14
      const start = hour.toString().padStart(2, '0') + ':00';
      const end = (hour + 2).toString().padStart(2, '0') + ':00';
      return { start, end };
    };
    
  // Create Degree Plan
  const degreePlan = await prisma.degree_Plan.createMany({
     data: [{
      degreePlanName: 'CS Degree Plan',
      semester: 'Fall 1',
    },
    {
      degreePlanName: 'CS Degree Plan',
      semester: 'Fall 2',
    },
    {
      degreePlanName: 'CS Degree Plan',
      semester: 'Fall 3',
    },
    {
      degreePlanName: 'CS Degree Plan',
      semester: 'Fall 4',
    },
    {
      degreePlanName: 'CS Degree Plan',
      semester: 'Spring 1',
    },
    {
      degreePlanName: 'CS Degree Plan',
      semester: 'Spring 2',
    },
    {
      degreePlanName: 'CS Degree Plan',
      semester: 'Spring 3',
    },
    {
      degreePlanName: 'CS Degree Plan',
      semester: 'Spring 4',
    },
    {
      degreePlanName: 'current',
      semester: 'current',
    }
  ]
  });

  // Create Students
  await prisma.students.createMany({
    data: [
      { email: "student1@example.com", pin: "0001", name: "Student 1", year: "Freshman" },
      { email: "student2@example.com", pin: "0002", name: "Student 2", year: "Junior" },
      { email: "student3@example.com", pin: "0003", name: "Student 3", year: "Freshman" },
      { email: "student4@example.com", pin: "0004", name: "Student 4", year: "Junior" },
      { email: "student5@example.com", pin: "0005", name: "Student 5", year: "Freshman" },
      { email: "student6@example.com", pin: "0006", name: "Student 6", year: "Senior" },
      { email: "student7@example.com", pin: "0007", name: "Student 7", year: "Freshman" },
      { email: "student8@example.com", pin: "0008", name: "Student 8", year: "Senior" },
      { email: "student9@example.com", pin: "0009", name: "Student 9", year: "Freshman" },
      { email: "student10@example.com", pin: "00010", name: "Student 10", year: "Freshman" }
    ]
  });

  // Create Classes
  await prisma.classes.createMany({
    data: [
      {
        className: "Class 1",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "001",
        description: "Sample description for Class 1",
        teacher: "Teacher 1",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 2",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "001",
        description: "Sample description for Class 2",
        teacher: "Teacher 2",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 3",
        subject: "CS",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 3",
        teacher: "Teacher 3",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 4",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "001",
        description: "Sample description for Class 4",
        teacher: "Teacher 4",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 5",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "001",
        description: "Sample description for Class 5",
        teacher: "Teacher 5",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 6",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "001",
        description: "Sample description for Class 6",
        teacher: "Teacher 6",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 7",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "001",
        description: "Sample description for Class 7",
        teacher: "Teacher 7",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 8",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "001",
        description: "Sample description for Class 8",
        teacher: "Teacher 8",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 9",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "001",
        description: "Sample description for Class 9",
        teacher: "Teacher 9",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 10",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "001",
        description: "Sample description for Class 10",
        teacher: "Teacher 10",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 11",
        subject: "CS",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 11",
        teacher: "Teacher 11",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 12",
        subject: "CS",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 12",
        teacher: "Teacher 12",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 13",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "001",
        description: "Sample description for Class 13",
        teacher: "Teacher 13",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 14",
        subject: "CS",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 14",
        teacher: "Teacher 14",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 15",
        subject: "CS",
        classNumber: "3313",
        sectionNumber: "001",
        description: "Sample description for Class 15",
        teacher: "Teacher 15",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 16",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "001",
        description: "Sample description for Class 16",
        teacher: "Teacher 16",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 17",
        subject: "PHYS",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 17",
        teacher: "Teacher 17",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 18",
        subject: "PHYS",
        classNumber: "3313",
        sectionNumber: "001",
        description: "Sample description for Class 18",
        teacher: "Teacher 18",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 19",
        subject: "BIO",
        classNumber: "2313",
        sectionNumber: "001",
        description: "Sample description for Class 19",
        teacher: "Teacher 19",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 20",
        subject: "HIST",
        classNumber: "3313",
        sectionNumber: "001",
        description: "Sample description for Class 20",
        teacher: "Teacher 20",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 21",
        subject: "MATH",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 21",
        teacher: "Teacher 21",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 22",
        subject: "ENG",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 22",
        teacher: "Teacher 22",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 23",
        subject: "BIO",
        classNumber: "2313",
        sectionNumber: "001",
        description: "Sample description for Class 23",
        teacher: "Teacher 23",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 24",
        subject: "MATH",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 24",
        teacher: "Teacher 24",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 25",
        subject: "PHYS",
        classNumber: "2313",
        sectionNumber: "001",
        description: "Sample description for Class 25",
        teacher: "Teacher 25",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 26",
        subject: "BIO",
        classNumber: "2313",
        sectionNumber: "001",
        description: "Sample description for Class 26",
        teacher: "Teacher 26",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 27",
        subject: "HIST",
        classNumber: "3313",
        sectionNumber: "001",
        description: "Sample description for Class 27",
        teacher: "Teacher 27",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 28",
        subject: "BIO",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 28",
        teacher: "Teacher 28",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 29",
        subject: "HIST",
        classNumber: "4313",
        sectionNumber: "001",
        description: "Sample description for Class 29",
        teacher: "Teacher 29",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class 30",
        subject: "MATH",
        classNumber: "1313",
        sectionNumber: "001",
        description: "Sample description for Class 30",
        teacher: "Teacher 30",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 1",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 1",
        teacher: "Teacher 1",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 2",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 2",
        teacher: "Teacher 2",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 3",
        subject: "CS",
        classNumber: "1313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 3",
        teacher: "Teacher 3",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 4",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 4",
        teacher: "Teacher 4",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 5",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 5",
        teacher: "Teacher 5",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 6",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 6",
        teacher: "Teacher 6",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 7",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 7",
        teacher: "Teacher 7",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 8",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 8",
        teacher: "Teacher 8",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 9",
        subject: "CS",
        classNumber: "2313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 9",
        teacher: "Teacher 9",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    },
      {
        className: "Class Copy 10",
        subject: "CS",
        classNumber: "4313",
        sectionNumber: "002",
        description: "Sample description for Class Copy 10",
        teacher: "Teacher 10",
        date: "MWF",
        startTime: new Date("2025-01-01T09:00:00"),
        endTime: new Date("2025-01-01T10:00:00")
    }
    ]
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
