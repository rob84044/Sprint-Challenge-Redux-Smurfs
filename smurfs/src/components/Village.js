import React from 'react';
import { Main, Section } from '../styles';
import Form from './SmurfForm';
import Smurfs from './SmurfList';

const Village = props => {
  return (
    <Main>
      <Section>
        <Form
          mode={props.mode}
          handleChange={props.handleChange}
          name={props.name}
          age={props.age}
          height={props.height}
          addSmurf={props.addSmurf}
          updateSmurf={props.updateSmurf}
          defaultForm={props.defaultForm}
        />
        <Smurfs
          toggleMode={props.toggleMode}
          smurfs={props.smurfs}
          deleteSmurf={props.deleteSmurf}
        />
      </Section>
    </Main>
  );
};

export default Village;
