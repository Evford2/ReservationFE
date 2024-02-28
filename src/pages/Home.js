import placeholder from './placeholder-400x400.png';
import placeholder2 from './200pximg.jpg';
export default function Home() {
    return <div>
            <h1 className="header">Minutes from the Texas Renaissance Festival</h1>
                <body>
                    <div className="imgContainer">
                        <img src={placeholder} alt="400placeholder" width="400" height="400"></img>
                        <img src={placeholder} alt="400placeholder" width="400" height="400"></img>
                        <img src={placeholder} alt="400placeholder" width="400" height="400"></img>
                    </div>
                    <div className="btnContainer">
                        <img src={placeholder2} alt="200placeholder" width="200" height="200"></img>
                        <img src={placeholder2} alt="200placeholder" width="200" height="200"></img>
                        <img src={placeholder2} alt="200placeholder" width="200" height="200"></img>
                    </div>
            
                </body>
           </div>
}