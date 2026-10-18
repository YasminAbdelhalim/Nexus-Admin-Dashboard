function StatCard({title , value, change}) {
    return ( 
        <div className="stat-card">
            <h3>{title}</h3>
            <p>{value}</p>
            <span>{change}</span>
        </div>
     );
}

export default StatCard;