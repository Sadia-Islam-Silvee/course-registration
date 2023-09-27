In this project two states are used:

## Use State

In functional components, the useState hook is employed to manage state. It begins by setting an initial value for the state variable, which can take various forms like an array, boolean, or number. useState serves as a mechanism to track and control any dynamic information on the website. It provides a dual return: the current state value and a function that facilitates updates to that state value. Essentially, you can think of useState as a built-in observer that keeps an eye on changes in the state.

const [allCourses, setCourses] = useState([]);

## Use Effect

useEffect provides a way to handle side effects. useEffet has two parameters. One is an arrow function and another is an array which takes a dependency. If any change occurs in dependency then call the arrow function that changes everything which depends on the dependency.

## Three Project Features In This Project

1.Select prefarable Courses Useing Select Button.
2.Course credits are Fixed and User cann't select same course repetedly
3.User can see the total course credits and remaining course credits.

<!-- - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
