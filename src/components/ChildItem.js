import { NavLink } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg";

function ChildItem({ kid, id, onEdit, onDelete }) {
  return (
    <li className="itemKid">
      <NavLink to="/kid/:kidId" className="itemKidLink">
        <img src={kid.imgUrls[0]} alt={kid.kidName} className="itemKidImg" />
        <div className="itemKidDetails">
          <p className="itemKidLocation">{kid.address}</p>
          <p className="itemKidName">{kid.kidName}</p>
          <p className="itemKidGender">{kid.kidGender}</p>
          <p className="itemKidName">{kid.plan}</p>
        </div>
      </NavLink>

      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231, 76,60)"
          onClick={() => onDelete(kid.id, kid.kidName)}
        />
      )}

      {onEdit && <EditIcon className="editIcon" onClick={() => onEdit(id)} />}
    </li>
  );
}

export default ChildItem;
