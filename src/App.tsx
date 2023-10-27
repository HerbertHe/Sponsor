import "./App.less"

const App = () => (
    <div className="App">
        <div className="text-3xl my-7">Sponsor Me</div>
        <img
            src="/avatar.jpeg"
            alt=""
            className="rounded-full shadow shadow-dark-50 w-50 h-50 my-5"
        />

        <p>Hey, I'm Herbert He.(he / him) 👋</p>
        <p>An open-source developer, frontend developer & gopher.</p>

        <p>
            ❤️ Sponsor: <a href="https://www.patreon.com/HerbertHe">Patreon</a>
            {"  "}
            <a href="https://etherscan.io/address/0x02e6C8FC9DC3E1783C9242248Dd007038004e08B">
                ETH
            </a>
            {"  "}
            <a href="https://afdian.net/a/HerbertHe">爱发电(China Mainland)</a>
        </p>

        <p>YOUR SUPPORT is my guarantee for maintaining the afternoon!</p>

        <div className="max-w-130">
            <p>
                I've written too many open-source node packages for development,
                like for-editor-herb, toml2iframe, codeblock-iframe, api-hose,
                @herberthe/react-await, react-vditor, developer-helper-cli,{" "}
                <a href="https://www.npmjs.com/~herberthe">more...</a>
            </p>
            <p>
                I've created a project called "Hapin" for kazakh language
                input. Based on Chinese Pinyin, and make it easy for us who
                are not kazakh language native speaker to learn & like to use
                it.
            </p>
            <p>
                I've also written plugins for docsify, translated Dart, Next2d
                and WindiCSS documents to Chinese and contributed codes & idea
                to Vditor.
            </p>
            <p>
                If you want to employ me, here is my resume📑:{" "}
                <a href="https://resume.ibert.me">https://resume.ibert.me</a>
            </p>

            <p>
                If you want to share amazing idea💡 with me, let's discuss here:{" "}
                <a href="https://idea.ibert.me">https://idea.ibert.me</a>
            </p>

            <p>
                If you want to contact me, send email📧 to{" "}
                <a href="mailto:hi@ibert.me">hi@ibert.me</a>
            </p>
        </div>
    </div>
)

export default App
