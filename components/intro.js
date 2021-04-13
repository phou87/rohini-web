import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { Select } from "baseui/select";
import {AGE_GROUPS} from '../shared/constants';
import { Button } from "baseui/button";

const OPTIONS = [
  {
    id: AGE_GROUPS.Adult,
    label: 'Parent',
  },
  {
    id: AGE_GROUPS.Child,
    label: 'Teen (Age: 11-14)',
  },
  {
    id: AGE_GROUPS.Teen,
    label: 'Teen (Age: 15-17)',
  }
];

export function Intro(props) {
  return (
    <>
      <FormControl label="Username">
        <Input
          value={props.username}
          onChange={e => props.setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl label="Age Group">
        <Select
          backspaceRemoves={false}
          clearable={false}
          deleteRemoves={false}
          searchable={false}
          value={OPTIONS.filter(o => o.id === props.ageGroup)}
          onChange={val => props.setAgeGroup(val.option.id)}
          options={OPTIONS}
        />
      </FormControl>
      <Button disabled={props.ageGroup === null || props.username.length === 0} onClick={props.onBegin}>Begin</Button>
    </>
  );
}
