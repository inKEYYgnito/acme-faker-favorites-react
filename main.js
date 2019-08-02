const { Component } = React
const root = document.getElementById('app')

class App extends Component {
    constructor() {
        super()
        this.state = {
            users: (new Array(20)).fill().map(user => {
                return faker.helpers.createCard()
            })
        }
    }
    render() {
        const users = this.state.users
        console.log(users)
        const usersElements = users.map(user => React.createElement('h1', {key: user.username}, user.name, user.username))
        return usersElements
    }
}

ReactDOM.render(React.createElement(App), root)
