

const name = 'Aleksandr';

const red = {
    color: '#ff0000',
    fontSize: 25 + 'px'
};

const allertHelo = () => {
    alert('Hello');
};

const Hello = props => <p style={red} onClick={allertHelo}>Hello {props.name}</p>;

const RenderJSX = () => (
    <div>
        <header>
            <img className="logo" src="logo.svg" alt="react logo" />
            <h1> Hello REACT</h1>
        </header>
        <main>
            <p>Same code on JSX [advertech]</p>
            <Hello name="Maks" />
            <Hello name="Alex" />
            <Hello name="John" />
        </main>
    </div>

)

ReactDOM.render(<RenderJSX />, document.getElementById('root'))