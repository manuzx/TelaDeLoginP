import "./Buttons.css"
function Buttons({color, text, icon }) {
    return (
    
            <div className={`icon-btn btn-${color}`}>
                <div className="icon">
                    {icon}
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        
      );
}

export default Buttons;