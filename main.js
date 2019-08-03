const { Component } = React;
const root = document.getElementById("app");

const getUser = () => {
  const user = faker.helpers.createCard();
  user.isFavorite = false;
  return user;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: new Array(20).fill().map(user => getUser()),
      count: 0 // user.isFavorite set to be faluse initially
    };
  }

  render() {
    let count = this.state.count;
    const users = this.state.users;

    const clickEvent = ev => {
      let idx = ev.target.dataset.index;
      users[idx].isFavorite = !users[idx].isFavorite;
      count = users.filter(user => user.isFavorite === true).length;

      this.setState({ users: users, count: count });

      // It can also be set seperately like below
      // this.setState({ users });
      // this.setState({ count });
    };

    const usersElements = users.map((user, idx) =>
      React.createElement(
        "div",
        {
          key: user.username,
          "data-index": idx,
          className: user.isFavorite ? "favorite" : "",
          onClick: ev => clickEvent(ev)
          // type: "none"
        },
        user.name,
        user.username
      )
    );

    // adding new user
    // new user will have 'isFavorite = false' -- this is different w. the provided example
    const addUser = () => {
      // const newUser = getUser();
      users.unshift(getUser());
      this.setState({ users });
    };

    const favoriteCount = React.createElement(
      "h4",
      {
        key: count,
        onClick: () => addUser()
      },
      `You have ${count} favorite user(s)!`
    );

    const container = React.createElement("div", { className: "list" }, [
      favoriteCount,
      usersElements
    ]);

    return container;
  }
}

ReactDOM.render(React.createElement(App), root);
