import './style.css';
import { FcGoogle } from "react-icons/fc";
export default function Login() {
    return (
        <>
            <div className="container">
                <div className="cardEsq">
                    <div className="buttonCard">
                        <div className='icon-btn'>
                            <button type="button" className='btnCard1'>Facebook</button>

                        </div>

                        <div className='icon-btn'>
                            <FcGoogle size={20} />
                            <p>Twitter</p>
                        </div>

                      <div className='icon-btn'>
                          <button type="button" className='btnCard1'>
                                   <FcGoogle size={20} />Google+</button>
                      </div>
                             
                                </div>

                </div>
            </div>
            <div className="cardDir">
                <div className="topo">
                    <h2>sign in manually</h2>
                </div>
                <button type='bnt'> </button>
            </div>

        </>
    )
}
