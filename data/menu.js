export const menu = [
  {
    hasDropdown: false,
    url: "/login",
    title: "Login",
    icon: "bi:person",
  },
  {
    hasDropdown: false,
    url: "/register",
    title: "Register",
    icon: "bi:person-plus",
  },
  {
    hasDropdown: true,
    title: "Conference",
    icon: "fluent:conference-room-20-regular",
    children: [
      {
        url: "/about",
        title: "About",
        icon: "nimbus:info-circle",
      },
      {
        url: "/ministers",
        title: "Ministers",
        icon: "akar-icons:people-group",
      },
      {
        url: "/faq",
        title: "FAQ",
        icon: "akar-icons:chat-question",
      },
    ],
  },
  {
    hasDropdown: true,
    title: "Oasis Online",
    icon: "ic:twotone-online-prediction",
    children: [
      {
        url: "/stream",
        title: "Stream",
        icon: "pajamas:live-stream",
      },
      {
        url: "/give",
        title: "Give",
        icon: "bx:donate-heart",
      },
      {
        url: "/altar-call",
        title: "Altar Call",
        icon: "emojione-monotone:raising-hands",
      },
    ],
  },

  {
    hasDropdown: false,
    url: "/store",
    title: "Store",
    icon: "ant-design:home-outlined",
  },
  {
    hasDropdown: false,
    url: "/volunteer",
    title: "Volunteer",
    icon: "arcticons:volunteer-exchange",
  },
];
