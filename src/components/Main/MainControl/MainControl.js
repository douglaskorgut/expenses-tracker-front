import React from 'react';
import classes from './MainControl.module.css';
import {FormControl, Select, MenuItem, InputLabel, TextField, Button} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';

const MainControl = (props) => {
    const today = new Date().toISOString().slice(0, 10);
    return (
        <div className={classes.MainControl}>
            <div style={{display: 'flex', height: '35%', width: '100%', justifyContent: 'space-between'}}>
                <FormControl style={{width: '45%'}}>
                    <InputLabel>Tipo</InputLabel>
                    <Select>
                        <MenuItem value="Entrada">Entrada</MenuItem>
                        <MenuItem value="Gasto">Gasto</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={{width: '50%'}}>
                    <InputLabel>Categoria</InputLabel>
                    <Select>
                        <MenuItem value="Alimentacao">Alimentacao</MenuItem>
                        <MenuItem value="Casa">Casa</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{display: 'flex', height: '35%', width: '100%', justifyContent: 'space-between'}}>
                <TextField type="number" label="Quantia" />
                <TextField type="date" label="Data" defaultValue={today}/>
            </div>
            <div style={{height: '20%'}}>
                <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    fullWidth
                    startIcon={<SaveIcon />}
                >
                    Salvar
                </Button>
            </div>
        </div>
    )
};

export default MainControl;
