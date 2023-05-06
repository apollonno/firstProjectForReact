import './app-info.css';


const AppInfo = ({name, quantity, number}) => {
    return (
    <div className="app-info">
        <h1>Учет сотрудников в компании : {quantity} </h1>
        <h2>Общее число сотрудника : {number} </h2>
        <h3>Премию получат : {name}</h3>
    </div>
    )
}

 
export default AppInfo;