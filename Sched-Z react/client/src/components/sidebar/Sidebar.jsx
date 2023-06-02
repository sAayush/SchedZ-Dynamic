import './Sidebar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = () => {
    return (
        <div className='sideBar'>
            <div className="sideBarWrapper">
                <div className="top">
                    <img className="logo" src="/Source Images/logo.png" alt="" />
                    <h1 className="logo-text"></h1>
                </div>
                <div className="mid">
                    <ul className="list">
                        <li className="listItems">
                            <span>
                                <HomeOutlinedIcon fontSize='small' />
                            </span>
                            <p>Home</p>
                        </li>
                        <li className="listItems">
                            <span>
                                <CalendarMonthOutlinedIcon fontSize='small' />
                            </span>
                            <p>Events</p>
                        </li>
                        <li className="listItems">
                            <span>
                                <ListAltOutlinedIcon fontSize='small' />
                            </span>
                            <p>Select</p>
                        </li>
                        <li className="listItems">
                            <span>
                                <InsertChartOutlinedSharpIcon fontSize='small' />
                            </span>
                            <p>Analytics</p>
                        </li>
                        <li className="listItems">
                            <span>
                                <SettingsOutlinedIcon fontSize='small' />
                            </span>
                            <p>Settings</p>
                        </li>
                    </ul>
                </div>
                <div className="bottom">
                    {/* Details goes here */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar