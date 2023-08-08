const app = document.getElementById("app")

function Project({ title }) {        

    return (
        <div>
            <a href="https://github.com/RobelGeb/cryptopricer" target="_blank">
                <div class="proj1" >
                    <div class="inside-proj">
                        <h2 class="proj1title">{title}</h2>
                    </div>
                    <img class="proj1img" src="/img/cryptoscreenshot.png" height="325" width="600"/>
                </div>
            </a>
        </div>
    )
}

function Projects() {
    return (
        <div>
            <Project title="CryptoPricer" />
            <Project title="Chatter" />
            <Project title="Lyric Finder" />
        </div>
    )
}

ReactDOM.render(<Projects />,  app)