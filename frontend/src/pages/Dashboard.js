import { Link } from "react-router-dom";

function Dashboard(){
    return(
        <div>
            <h1>Book Dashboard</h1>
            <p>Welcome to the main dashborad</p>

            <div>
                <Link to ="/add-book">
                <button>Add Book</button>
                </Link>
            </div>

            <div>
                <Link to="/edit-book">
                <button>Edit Book</button>
                </Link>
            </div>

            <div>
                <Link to="/delete-book">
                <button>Delete Book</button>
                </Link>
            </div>
        </div>

        
    );
}

export default Dashboard;