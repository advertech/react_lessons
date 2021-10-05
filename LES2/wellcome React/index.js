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

const renderJSX = (
    <div>
        <header>
            <img className='logo' src="logo.svg" alt="ReactLogo" />
            <h1>Priver React</h1>
        </header>
        <main>
            <p> </p>
        </main>
    </div>
);

ReactDOM.render(renderJSX, document.getElementById('root'))