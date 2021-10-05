// Wellcome to React LES 2 Part 1


// const render = React.createElement('div', null,
//     React.createElement('header', null,
//         React.createElement('img', {
//             src: 'Logo.svg',
//             alt: 'Logo react',
//             className: 'logo'
//         }),
//         React.createElement('h1', null, 'Hello React')
//     ),
//     React.createElement('main', null,
//         React.createElement('p', null, 'Java Scrippt Lessons ')
//     )

// )

// ReactDOM.render(render, document.getElementById('root'))

// тоже самое на JSD  - надо прогнать через Бабель
const imja = 'Simon';

const red = {
    color: '#fff000',
    fontSize: 30 + 'px'
};

const alertHello = () => (
    alert("HEllo It's Allert function")
)


// ELEMENT
const renderJSX = (
    <div>
        <header>
            <img className='logo' src="logo.svg" alt="ReactLogo" />
            <h1 style={red} onClick={alertHello}>Priver React</h1>
        </header>
        <main>
            <p >Hello {imja} </p>
        </main>
    </div>
);



// Component

const Hello = props => <p style={red}>Hello {props.name} </p>;

const RenderJSX = () => (
    <div>
        <header>
            <img className='logo' src="logo.svg" alt="ReactLogo" />
            <h1 onClick={alertHello}>Priver React</h1>
        </header>
        <main>
            <Hello name="Masha" />
            <p> Abra Cadabra I tak Dalee</p>
            <Hello name="MAX ALEX" />
            <Hello name="John">
        </main>
    </div>
);


ReactDOM.render(<RenderJSX />, document.getElementById('root'))