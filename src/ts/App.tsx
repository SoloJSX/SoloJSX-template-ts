import solojsxLogo from '/solojsx.png'
import typescriptLogo from '/typescript.svg'
import viteLogo from '/vite.svg'

export function App() {
    return <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={typescriptLogo} class="logo logots" alt="TypeScript logo" />
        </a>
        <a href="https://github.com/SoloJSX/SoloJSX" target="_blank">
            <img src={solojsxLogo} class="logo logosolojsx" alt="SoloJSX logo" />
        </a>
        <h1>Vite + TypeScript + SoloJSX</h1>
        <p class="read-the-docs">
            Click on the Vite, TypeScript and SoloJSX logos to learn more
        </p>
    </div>
}
document.body.append(App())