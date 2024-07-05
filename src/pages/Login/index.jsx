import './style.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Buttons from '../../components/Buttons';
export default function Login() {
    return (
        <>
            <div className="containerLogin">
                <div className="cardEsq">
                    <div className="buttonCard">
                     <Buttons color={"blue"} text={"Facebook"} icon={<FaFacebookF />}/>
                     
                        


                        <Buttons color={"blue-weak"} text={"Twitter"} icon={<BsTwitter />} />



                        <Buttons color={"red"} text={"google"} icon={<FaGoogle />}/>

                    </div>
                </div>
                <div className="divMeio">
                    <div className='linhaDoMeio'></div>
                    <div className='meiodoMeio'>
                     <p>OR</p>  
                    </div>
                    <div className='linhaDoMeio'></div>
                </div>




                <div className="cardDir">

                    <div className="topo">
                        <h2>sign in manually</h2>
                    </div>
                    <div className="meio">
                        <input type="email" />
                        <input type="senha" />
                    </div>
                </div>
            </div>



        </>
    )
}
