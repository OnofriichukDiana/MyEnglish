import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ILesson } from "../../types/interfaces";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const StartPage = () => {
  const [lesson, setLesson] = useState<ILesson>({
    id: "",
    lessonAudio: "",
    lessonNumber: "",
    lessonText: "",
    stage: null,
  });
  const [englishLevel, setEnglishLevel] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setEnglishLevel(event.target.value);
  };
  const getLesson = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/lessons/test/60"
    );
    setLesson(response.data);
  };
  useEffect(() => {
    getLesson();
  }, []);
  const { id, lessonAudio, lessonNumber, lessonText, stage } = lesson;
  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Неавторизований користувач має можливість пройти один тестовий урок.
        Зареєструйтеся або авторизуйтеся, щоб отримати доступ до наступних
        уроків, а також до словника
      </Typography>
      <div className="auth-nav">
        <NavLink className="header-button" to="registration">
          Registration
        </NavLink>
        <NavLink className="header-button" to="logIn">
          Log in
        </NavLink>
      </div>
      <form>
        <Typography variant="subtitle1" gutterBottom>
          Виберіть свій рівень англійської, щоб отримати тестовий урок
        </Typography>
        <Select
          id="demo-simple-select-required"
          value={englishLevel}
          onChange={handleChange}
        >
          <MenuItem value={"A1"}>A1 (Elementary)</MenuItem>
          <MenuItem value={"A2"}>A2 (Elementary)</MenuItem>
          <MenuItem value={"B1"}>B1 (Intermediate)</MenuItem>
          <MenuItem value={"B2"}>B2 (Intermediate)</MenuItem>
          <MenuItem value={"B3"}>C1 (Advanced)</MenuItem>
        </Select>
        <Button variant="outlined" type="submit">
          Підтвердити
        </Button>
      </form>
      {lessonAudio !== "" && (
        <div>
          <audio controls={true} preload="auto">
            <source src={lessonAudio} type="audio/mp3" />
          </audio>
          <div>
            <iframe
              src={lessonText}
              width="640"
              height="490"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
export default StartPage;
