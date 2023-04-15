import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post('http://localhost:3001/authenticate',
        {username: value}
        ).then( r => props.onAuth({...res.data, secret: value}))
        .catch(e => console.log('error', e))
        props.onAuth({ username: value, secret: value });
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Manda si no te cagas 👋</div>

                <div className="form-subtitle">Crea un usuario para comenzar</div>

                <div className="auth">
                    <div className="auth-label">Usuario</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;