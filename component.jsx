import SkipLink from '../Components/SkipLink.js';
import Sidebar from '../Components/Sidebar.js';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import CodeLink from '../Components/CodeLink.js';

const ColourInfoTool = () => {

    return (
      <>
        <SkipLink />
        <Sidebar />
        <div id="chris" className="min-h-screen bg-quaternary">
          <Header />
          <main id="main" className="w-10/12 mx-auto pt-[150px] m:pb-20 d:pb-32 text-secondary">
            <article className="contain-width d:grid d:[grid-template-areas:'links']">
              <header>
                <h1 id="colour-header" className="mt-6 m:text-4xl d:text-5xl font-bold">Colour Information Tool</h1>
              </header>
              <p id="colour-legend" className="py-4 text-xl">Choose a colour or type it below as a HTML colour name, hexadecimal, or RGB value to be given more info about it.</p>
              <div id="colour-info" className="m:w-full d:w-1/2 p-4 mt-4 border-2 border-secondary rounded grid grid-cols-1 justify-between bg-quaternary">
                <fieldset className="relative p-0 m-0 grid gap-y-5 border-none">
                  <div className="relative w-full">
                    <label htmlFor="colour-chooser" className="absolute w-fit pl-3 ml-1.5 leading-9 text-white cursor-pointer">Select your colour here…</label>
                    <input id="colour-chooser" className="w-full h-9 p-0 rounded bg-secondary cursor-pointer l3 s2" type="color"></input>
                    <svg className="absolute top-0 right-0 p-1.5 shadow-[inset_1px_1px_1px_0_rgb(255_249_240/50%),_inset_2px_-2px_2px_0_rgb(255_249_240/50%)] pointer-events-none" width="36" height="36" viewBox="0 0 24 24">
                      <path fill="#fff" d="M18.5 7.6L13 6.5V3c0-1.7-1.3-3-3-3S7 1.3 7 3v7.4a5 5 0 00-1.8-.7c-1.9-.3-3.2 1-3.2 2.5 0 .8.4 1.6 1 2.3 4 4 5.7 5 6 9.5h10v-1.7c0-5.2 3-6 3-10 0-2.5-1-4.2-3.5-4.7zm.4 8A11 11 0 0017 22h-6.1c-.8-3.8-3.8-6.3-6.5-9-.7-.6-.4-1.3.5-1.3 1.2 0 3 1.9 4.1 3.2v-12c0-.5.5-.9 1-.9s1 .4 1 1v6.9a.6.6 0 001.1 0v-.6a.8.8 0 011.7 0v1.3a.6.6 0 001.2 0v-.8a.8.8 0 011.7 0v1.5a.6.6 0 001.1 0v-1c0-.4.6-.8 1-.6.7.4 1.2 1 1.2 2.5 0 1.4-.5 2.2-1.1 3.4z"></path>
                    </svg>
                  </div>
                  <div className="relative w-full">
                    <input id="colour-input" className="w-full pl-3 border-2 border-secondary rounded outline-none bg-white leading-8 placeholder-secondary" size="15" type="text" placeholder="Or type your colour here…" aria-label="Type your colour."></input>
                    <svg className="absolute top-0 right-0 p-1.5 rounded shadow-[inset_1px_1px_1px_0_rgb(107_75_60/50%),_inset_2px_-2px_2px_0_rgb(107_75_60/50%)] pointer-events-none" width="36" height="36" viewBox="0 0 24 24">
                      <path fill="rgb(var(--colour-secondary))" d="M22 7v10H2V7h20zm2-2H0v14h24V5zM6 8H3v2h3V8zm3 0H7v2h2V8zm3 0h-2v2h2V8zm3 0h-2v2h2V8zm3 0h-2v2h2V8zm3 0h-2v2h2V8zm-4 6H7v2h10v-2zm4-3h-4v2h4v-2zM7 11H3v2h4v-2zm3 0H8v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2z"></path>
                    </svg>
                  </div>
                  <output id="colour-output" className="scrollbar min-h-[160px] m:px-2 m:py-4 d:p-4 border-2 border-secondary rounded bg-white overflow-x-auto">Your colour's info will output here…</output>
                </fieldset>
              </div>
              <aside className="m:w-full d:w-fit m:mt-10 d:my-4 rounded m:grid m:[grid-template-areas:'.''.''back'] d:[grid-area:links] bg-secondary text-white text-l">
                <CodeLink
                  codeLinkClassName="px-4 py-3 d:border-r-2 d:border-r-[#5d4034] m:[grid-area:back] inline-flex items-center justify-between hover:rounded hover:bg-[#7d5a49] hover:[box-shadow:3px_3px_10px_1px_rgb(0_0_0/24%)]"
                  codeLinkHref="/#main"
                  codeLinkRel="home"
                  codeLinkTarget="_self"
                  codeLinkText="Go back"
                  svgClassName="ml-4"
                  svgTitle="Return to the projects page"
                  pathFill="#fff"
                  pathD="M11 21h8v-2l1-1v4h-9v2L1 21V3l10-3v2h9v5l-1-1V3h-8v18zm10-9-3.2-3.3.7-.7 4.5 4.5-4.5 4.5-.7-.7L21 13h-9v-1h9z"
                />
                <CodeLink
                  codeLinkClassName="px-4 py-3 m:border-b-2 m:border-b-[#5d4034] d:border-r-2 d:border-r-[#5d4034] inline-flex items-center justify-between hover:rounded hover:bg-[#7d5a49] hover:[box-shadow:3px_3px_10px_1px_rgb(0_0_0/24%)]"
                  codeLinkHref="https://github.com/ChrisJohnNewton/colour-info-tool.git"
                  codeLinkRel="external"
                  codeLinkTarget="_blank"
                  codeLinkText="See repo"
                  svgClassName="ml-4"
                  svgTitle="View the project's repository"
                  pathFill="#fff"
                  pathD="M15 16H9v-2h6v2zm9-8v2H0V8l4.5-8h15L24 8zm-2.3 0-3.3-6H5.7L2.3 8h19.4zM21 22H3V12H1v12h22V12h-2v10z"
                />
                <CodeLink
                  codeLinkClassName="px-4 py-3 m:border-b-2 m:border-b-[#5d4034] inline-flex items-center justify-between hover:rounded hover:bg-[#7d5a49] hover:[box-shadow:3px_3px_10px_1px_rgb(0_0_0/24%)]"
                  codeLinkHref="https://github.com/ChrisJohnNewton/colour-info-tool/blob/main/colour-info-tool.js"
                  codeLinkRel="external"
                  codeLinkTarget="_blank"
                  codeLinkText="See source code"
                  svgClassName="ml-4"
                  svgTitle="View the project's source code"
                  pathFill="#fff"
                  pathD="M16 3h-1L8 21h1l7-18zm0 4 6 5-6 5 1 1 7-6-7-6-1 1zM8 7l-6 5 6 5-1 1-7-6 7-6 1 1z"
                />
              </aside>
            </article>
          </main>
          <Footer />
        </div>
      </>
    );

};

const canonicalURL = `<link rel="canonical" href="https://chrisnewton.dev/colour-info-tool"/>`;
const title = `<title>Colour Information Tool | Chris Newton — Web Developer</title>`;
const description = `<meta name="description" content="A colour information tool for identifying a colour and investigating complementary shades."/>`;
const JSON = ``;
const extraAMPScripts = ``;

export default { ColourInfoTool, Head: { canonicalURL, description, title, JSON, extraAMPScripts } };
