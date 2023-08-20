function Userdetails(probs)
{
 return(
    <div className="container h3">
        <div className="row">
            <div className="col ">
                Name :
            </div>
            <div className="col">
                {probs.Name}
            </div>

        </div>
        <div className="row">
            <div className="col">
                Email :
            </div>
            <div className="col">
                {probs.Email}
            </div>
        </div>
        <div className="row">
            <div className="col">
                Phone :
            </div>
            <div className="col">
                {probs.Phone}
            </div>
        </div>
        <div className="row">
            <div className="col">
                Institution :
            </div>
            <div className="col-6">
                {probs.Institution}
            </div>
        </div>
        <div className="row">
            {probs.Verified ? 
            <h2><span class="badge bg-success">User Verified</span></h2>
             : 
            <button className="btn btn-success btn-lg" onClick={probs.onclick}>
            verify
            </button>
            }
            
        </div>
    </div>
 );
}
export default Userdetails;