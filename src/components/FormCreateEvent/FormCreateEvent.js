import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Form, useStyles, Text } from './StyledComponent';

import { createEvent } from '../../redux/events/events-operations';

export default function FormCreateEvent({ onClose }) {
  const { control, handleSubmit, reset } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = data => {
    // dispatch(LogIn(data));
    console.log(data);
    dispatch(createEvent(data));
    reset();
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            type="text"
            inputProps={{ maxLength: 22 }}
            className={classes.inputText}
            onChange={onChange}
            value={value}
            label="Event name"
            variant="outlined"
            required
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            multiline
            type="text"
            rows={4}
            rowsMax={4}
            onChange={onChange}
            value={value}
            className={classes.area}
            InputProps={{
              maxLength: 50,
            }}
            label="Event description"
            variant="outlined"
            required
          />
        )}
      />

      <Controller
        name="priority"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <FormControl className={classes.select}>
            <InputLabel
              className={classes.selectLabel}
              id="demo-simple-select-label"
            >
              priority *
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              onChange={onChange}
              required
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Button
        className={classes.buttonSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Create
        {/* {isLoading ? <Spinner /> : 'Log In'} */}
      </Button>
    </Form>
  );
}
