import './App.css';

function App() {
    return (
        <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form className="login-form">
                        <div className="form-group">
                            <h3 className="tieu-de">Login</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" name="username" required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" required></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
