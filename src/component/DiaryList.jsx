import './DiaryList.css'
import Button from './Button'
import DiaryItem from './DiaryItem'

const DiaryList = ()=>{
    return <div className='DiaryList'>
        <div className='menu_bar'>
            <select>
                <option value={"latest"}>최신 순</option>
                <option value={"oldest"}>오래된 순</option>
            </select>
            <Button type={"POSITIVE"} text={"새로운 일기 작성"}/>
            
            
        </div>
        <div className='list_wrapper'>
            <DiaryItem/>
        </div>

    </div>
}
export default DiaryList