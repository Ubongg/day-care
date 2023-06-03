import { NavLink } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg";

function ChildItem({ kid, id, onEdit, onDelete }) {
  return (
    <li className="itemKid">
      <NavLink to={`/kid/${id}`} className="itemKidLink">
        <div className="imgBx">
          <img src={kid.imgUrls[0]} alt={kid.kidName} className="itemKidImg" />
        </div>
        <div className="itemKidDetails">
          <p className="itemKidName">{kid.kidName}</p>
          <p className="itemKidGender">{kid.kidGender}</p>
          <p className="itemKidName">{kid.plan} Plan</p>
        </div>
      </NavLink>

      {onEdit && <EditIcon className="editIcon" onClick={() => onEdit(id)} />}

      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="#bb2525"
          onClick={() => onDelete(kid.id, kid.kidName)}
        />
      )}
    </li>
  );
}

export default ChildItem;
