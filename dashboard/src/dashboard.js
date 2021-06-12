
import Navigation from "./components/navigation/navigation";

function Dashboard() {
  const navigationItems = [
    {
      url: "/greetings",
      title: "Greetings"
    },
    {
      url: "/kiwi",
      title: "Kiwi"
    }
  ];
  Navigation(navigationItems);
}
Dashboard();

const url = window.location.pathname;

if (url === "/greetings") {
  import("GreetingsApp/GreetingsPage").then((GreetingsModule) => {
    const GreetingsPage = GreetingsModule.default;
    GreetingsPage();
  });
}

if (url === "/kiwi") {
  import("KiwiApp/KiwiPage").then((KiwiModule) => {
    const KiwiPage = KiwiModule.default;
    const kiwiPage = new KiwiPage();
    kiwiPage.render();
  });
}
