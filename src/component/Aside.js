// 아이콘 연결
import { BsArrowUp } from "react-icons/bs";

function Aside(){
    return(
        <aside>
          <h4 className="hide">top메뉴</h4>
          <p><a href="#"><BsArrowUp /></a></p>
        </aside>
    )
}

export default Aside;