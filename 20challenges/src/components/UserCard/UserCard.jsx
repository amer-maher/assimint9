const UserCard = ({ name, title }) => {
    return (
        <div className="card" style={{ width: 450 }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{name}</h6>

            </div>
        </div>
    );
}

export default UserCard;