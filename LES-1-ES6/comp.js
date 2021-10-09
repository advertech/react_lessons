

const name = 'Aleksandr';

const red = {
    color: '#ff0000',
    fontSize: 25 + 'px'
};

const allertHelo = () => {
    alert('Hello');
};

const button = {
    fontSize: 20 + 'px',
}

const Hello = props => <p style={red} onClick={allertHelo}>Hello {props.name}</p>;

class RenderJSX extends React.Component {

    //создаем счетчик
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        // Обращаемся к методу и присваемыем ему наш THIS
        // this.changeCounter = this.changeCounter.bind(this)
    }

    // пишем метод 
    changeCounter() {
        console.log(this);
        this.state.counter += 1;
    }

    render() {
        return (
            <div>
                <header>
                    <img className="logo" src="logo.svg" alt="react logo" />
                    <h1> Hello REACT</h1>
                </header>
                <main>
                    <button style={button} onClick={this.changeCounter}>{this.state.counter}</button>
                    <p>Same code on JSX [advertech]</p>
                    <Hello name="Maks" />
                    <Hello name="Samanta" />
                    <Hello name="John" />
                </main>
            </div>)
    }
}


ReactDOM.render(<RenderJSX />, document.getElementById('root'))