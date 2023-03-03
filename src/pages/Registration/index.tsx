import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useAppDispatch } from '../../Redux/hook';
import { registration } from '../../Redux/actions';
import { IUser } from '../../types/interfaces';



const Registration = () => {
    const [user, setUser] = useState<IUser>({name: "", email: "", password: "", availableLeasons: [1]});
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(registration(user));
        e.currentTarget.reset()
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };
    return (<div>
        <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Ім'я" variant="standard" name="name" onChange={handleChange}/>
        <TextField id="standard-basic" label="Е-мейл" variant="standard" name="email" onChange={handleChange}/>
        <TextField id="standard-basic" label="Пароль" variant="standard" name="password" onChange={handleChange}/>
        <Button variant="outlined" type="submit">Зареєструватися</Button>
        </form>
    </div>)
}
export default Registration 