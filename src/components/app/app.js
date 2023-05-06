import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
function App() {

    const data = [
        {name:'john Smith' , salary:800 },
        {name:'Alex Lytor' , salary:2000 },
        {name:'Fabio Samone' , salary:1800 },
    ]
    return (
        <div className="app">
            <AppInfo name="Alex Lytor " quantity="N" number="3"/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App