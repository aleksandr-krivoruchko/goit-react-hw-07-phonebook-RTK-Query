import { Label, Input } from '../Form/FormStyle.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/store';

export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  return (
    <Label>
      Find contacts by name
      <Input
        onChange={e => dispatch(filter(e.target.value))}
        value={filterValue}
        type="text"
      />
    </Label>
  );
}
