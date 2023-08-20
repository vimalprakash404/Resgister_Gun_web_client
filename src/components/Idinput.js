function Idinput(probs)
{
    return(
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <input className="form-control form-control-lg" type="number" placeholder="USER ID" aria-label=".form-control-lg example" ref={probs.refs}/>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-primary btn-lg" onClick={probs.onclick}>Search</button>
                
                </div>
            </div>
            
        </div>
    );
}

export default Idinput;