const { Component } = React
const root = document.getElementById('app')

class App extends Component {
    constructor() {
        super()
        this.state = {
            users: (new Array(20)).fill().map(user => {
                user = faker.helpers.createCard()
                user.isFavorite = false 
                return user
            })
        }
    }

    render() {
        const users = this.state.users
        console.log(users)
        const clickEvent = (ev) => {
        let idx = ev.target.dataset.index
        users[idx].isFavorite = !users[idx].isFavorite;
        this.setState({users});

        }
        const usersElements = users.map((user, idx) => React.createElement('div', {key: user.username, "data-index": idx, className:user.isFavorite ? "favorite" : "",  onClick: (ev) => clickEvent(ev)}, user.name, user.username))
        return usersElements
    }
}

ReactDOM.render(React.createElement(App), root)


