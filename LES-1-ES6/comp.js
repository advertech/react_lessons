

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

function RenderJSX() {

    const [count, changeCount] = React.useState(0)





    return (
        <div>
            <header>
                <img className="logo" src="logo.svg" alt="react logo" />
                <h1> Hello REACT</h1>
            </header>
            <main>


                <button style={button} onClick={() => changeCount(count + 1)}>{count}</button>
                <p>Same code on JSX [advertech]</p>
                <Hello name="Maks" />

                <Hello name="Samanta" />
                <Hello name="John" />
            </main>
        </div>)

}


ReactDOM.render(<RenderJSX />, document.getElementById('root'))