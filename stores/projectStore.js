import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    projects: [
      {
        slug: "ea-invitation",
        title: "EA Invitation",
        quote: "An official website for EA Invitation.",
        source: null,
        link: "https://ea-invitation.vercel.app/",
        description:
          "This website is used for ordering web-based wedding invitations.",
        story:
          "I created this project for my own business. I developed this web myself, starting from designing the system and database, creating API, designing UI/UX, designing invitations, and etc.",
        stack: ["Nuxt", "Tailwind CSS", "Laravel", "MySQL"],
        image: "/projects/ea-invitation.png",
      },
      {
        slug: "student-management",
        title: "Student Management System",
        quote: "An website for student management.",
        source: "https://github.com/muhdaniboyrendi/student-management",
        link: "https://student-management-steel.vercel.app/",
        description:
          "This website is used for managing students, teachers, staff, and attendance with QR Code.",
        story:
          "I created this project for my portfolio. I developed this web myself, starting from designing the system and database, creating API, designing UI/UX, and etc.",
        stack: ["Vue.js", "Tailwind CSS", "Laravel", "MySQL"],
        image: "/projects/student-management.png",
      },
      {
        slug: "note-app",
        title: "Note App",
        quote: "An website for note aplication.",
        source: "https://github.com/muhdaniboyrendi/personal-notes",
        link: "https://personal-notes-tawny-five.vercel.app/",
        description:
          "This website is used for create, read, update, and delete notes.",
        story:
          "I created this project for my portfolio. I made this website when I was learning to use React.js.",
        stack: ["React.js", "Bootstrap"],
        image: "/projects/note-app.png",
      },
      {
        slug: "todo-list-app",
        title: "Todo List App",
        quote: "An website for todo list aplication.",
        source: null,
        link: null,
        description:
          "This website is used for create, read, update, and delete todo.",
        story:
          "I created this project for my portfolio. I made this website when I was learning to use Vue.js.",
        stack: ["Vue.js", "Bootstrap"],
        image: "/projects/note-app.png",
      },
    ],
  }),
});
