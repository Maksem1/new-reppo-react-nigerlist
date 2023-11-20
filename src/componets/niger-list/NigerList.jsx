import Niger from "../niger/Niger";
import s from "./NigerList.module.css";

const NigerList = ({ nigers }) => {
  return (
    <div className={s.nigerList}>
      {nigers.map((niger) => (
        <Niger>{niger}</Niger>
      ))}
    </div>
  );
};

export default NigerList;
