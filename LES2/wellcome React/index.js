// Wellcome to React LES 2 Part 1


const render = React.createElement('div', null,
    React.createElement('header', null,
        React.createElement('img', {
            src: 'Logo.svg',
            alt: 'Logo react',
            className: 'logo'
        }),
        React.createElement('h1', null, 'Hello React')
    ),
    React.createElement('main', null,
        React.createElement('p', null, 'Java Scrippt Lessons ')
    )

)

ReactDOM.render(render, document.getElementById('root'))
